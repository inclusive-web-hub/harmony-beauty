import { axiosUrlEncoded, axiosJson } from "./AxiosConfig"
import {
  setAuthUser,
  updateLoadUser,
  setCurrentUser,
} from "../redux/authReducer/actions"
import {
  fetchError,
  fetchStart,
  fetchSuccess,
} from "../redux/commonReducer/actions"

import { Server } from "../utils"

var axUrlEncoded = axiosUrlEncoded()
var axJson = axiosJson()

export const JWTAuth = {
  onRegister: ({ full_name, email, password, navigate }) => {
    return (dispatch) => {
      try {
        dispatch(fetchStart())
        axJson
          .post(
            `${Server.endpoint}/auth/register`,
            JSON.stringify({
              full_name: full_name,
              email: email,
              password: password,
            })
          )
          .then(({ data }) => {
            if (data.status_code === 201) {
              localStorage.setItem("token", data.token.access_token)
              axJson.defaults.headers.common["Authorization"] =
                "Bearer " + data.token.access_token
              dispatch(
                JWTAuth.onLogin({ email: email, password: password, navigate })
              )
            } else {
              dispatch(fetchError(data.message))
            }
          })
          .catch(function (error) {
            dispatch(fetchError(error))
          })
      } catch (error) {
        dispatch(fetchError(error))
      }
    }
  },
  onLogin: ({ email, password, navigate }) => {
    return (dispatch) => {
      try {
        dispatch(fetchStart())
        axUrlEncoded
          .post(
            `${Server.endpoint}/auth/login`,
            JSON.stringify(
              `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
            )
          )
          .then(({ data }) => {
            if (data.access_token) {
              localStorage.setItem("token", data.access_token)
              axJson.defaults.headers.common["Authorization"] =
                "Bearer " + data.access_token
              dispatch(fetchSuccess(data.message))
              dispatch(
                JWTAuth.getAuthUser(
                  navigate,
                  data.access_token,
                  "Welcome. Explore our wonderful marketplace!"
                )
              )
              navigate("/")
            } else {
              dispatch(fetchError(data.message))
            }
          })
          .catch(function (error) {
            dispatch(fetchError("Network Error!"))
            // Todo: remove when backend is deployed
            localStorage.setItem("user", email)
            navigate("/")
            navigate(0)
          })
      } catch (error) {
        dispatch(fetchError("Network Error!"))
      }
    }
  },
  onLogout: (navigate) => {
    navigate(0)
    return (dispatch) => {
      localStorage.clear()
      dispatch(fetchStart())
      axJson
        .get(`${Server.endpoint}/user/logout`)
        .then(({ data }) => {
          if (data.status_code === 200) {
            dispatch(fetchSuccess(data.message))
            dispatch(setAuthUser(null))
            dispatch(setCurrentUser(null))
          } else {
            dispatch(fetchError(data.message))
          }
        })
        .catch(function (error) {
          dispatch(fetchError("Network Error!"))
        })
    }
  },

  getAuthUser: (navigate, token, message) => {
    return (dispatch) => {
      dispatch(updateLoadUser(false))
      if (!token) {
        const token = localStorage.getItem("token")
        axJson.defaults.headers.common["Authorization"] = "Bearer " + token
      }
      axJson
        .get(`${Server.endpoint}/user/profile`)
        .then(({ data }) => {
          if (data.status_code === 200) {
            if (message !== "navigate") {
              dispatch(fetchSuccess(message))
            }
            dispatch(setCurrentUser(data.user))
            dispatch(setAuthUser(data.user))
            // store the user in localStorage
            dispatch(updateLoadUser(true))
            localStorage.setItem("user", JSON.stringify(data.user))
            navigate(0)
          } else {
            dispatch(JWTAuth.onLogout())
          }
        })
        .catch(function (error) {
          dispatch(fetchError("Network Error!"))
        })
    }
  },
}
