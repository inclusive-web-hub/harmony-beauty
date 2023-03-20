// @ts-nocheck
import React, { useState } from "react"
import Icon from "../../components/Icon"
import { isValidEmail } from "../Register"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import ContentLoader from "../../components/ContentLoader"
import { JWTAuth } from "../../api/AuthAPI"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: "user@test.com",
    password: "testpassword",
    showPassword: false,
  })

  const [errorValues, setErrorValues] = useState({
    emailError: "",
    passwordError: "",
  })

  const handleChange =
    (/** @type {any} */ prop) =>
    (/** @type {{ target: { value: any; }; }} */ event) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleErrorChange =
    (/** @type {string} */ prop) =>
    (/** @type {{ target: { value: any; }; }} */ event) => {
      if (typeof event == "string")
        setErrorValues({ ...errorValues, [prop]: event })
      else setErrorValues({ ...errorValues, [prop]: event.target.value })
    }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }
  const onClick = (e) => {
    e.preventDefault()
    if (!values.email) {
      handleErrorChange("emailError")("Email is required!")
    } else if (!isValidEmail(values.email)) {
      handleErrorChange("emailError")("Email address must be valid!")
    } else if (!values.password) {
      handleErrorChange("passwordError")("Password is required!")
    } else if (values.password.length < 8) {
      handleErrorChange("passwordError")(
        "Password must be at least 8 characters!"
      )
    } else {
      dispatch(
        JWTAuth.onLogin({
          email: values.email,
          password: values.password,
          navigate,
        })
      )
    }
  }
  return (
    <div className="auth-img">
      <div className="auth-page">
        <div className="container-login">
          <div className="wrap-login p-6 pt-5">
            <div className="text-center">
              <a href="/">
                <img src="/logo.png" className="header-brand-img mb-5" alt="" />
              </a>
            </div>
            <form className="auth-form">
              <span className="auth-form-title">Log Into Your Account</span>
              <div className="wrap-input validate-input input-group">
                <div className="input-group-text bg-white text-muted">
                  <Icon
                    icon="envelop"
                    size={20}
                    color="black"
                    className="me-2"
                  />
                </div>
                <input
                  className="input border-start-0 ms-0 form-control"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => {
                    handleChange("email")(e)
                    handleErrorChange("emailError")("")
                  }}
                  value={values.email}
                />
              </div>
              {errorValues.emailError && (
                <div className="error-message">{errorValues.emailError}</div>
              )}
              <div
                className="wrap-input validate-input input-group"
                id="Password-toggle"
              >
                <div className="input-group-text bg-white text-muted">
                  <Icon icon="key" size={20} color="black" className="me-2" />
                </div>
                <input
                  className="input border-start-0 ms-0 form-control"
                  type={values.showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    handleChange("password")(e)
                    handleErrorChange("passwordError")("")
                  }}
                  value={values.password}
                />
                <div className="input-group-text bg-white">
                  <Icon
                    icon={values.showPassword ? "eye" : "eye-blocked"}
                    size={20}
                    color="black"
                    className="me-2 show-password"
                    onClick={handleClickShowPassword}
                  />
                </div>
              </div>
              {errorValues.passwordError && (
                <div className="error-message">{errorValues.passwordError}</div>
              )}
              <div className="text-end pt-2">
                <p className="mb-0">
                  <Link to="#" target="_self" className="text-primary ms-1">
                    Forgot Password?
                  </Link>
                </p>
              </div>
              <div className="container-auth-form-btn">
                <button className="auth-form-btn" onClick={onClick}>
                  Log In
                </button>
              </div>
              <div className="text-center pt-3">
                <p className="text-dark mb-0 d-inline-flex">
                  Not a registered yet?
                  <Link
                    to="/register"
                    target="_self"
                    className="text-primary ms-1"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>

            <ContentLoader />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
