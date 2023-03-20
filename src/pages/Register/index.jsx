// @ts-nocheck
import React, { useState } from "react"
import Icon from "../../components/Icon"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { JWTAuth } from "../../api/AuthAPI"
import { useNavigate } from "react-router-dom"
import ContentLoader from "../../components/ContentLoader"

export const isValidEmail = (value) => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value)
}

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    showPassword: false,
  })

  const [errorValues, setErrorValues] = useState({
    fullNameError: "",
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
    if (!values.fullName) {
      handleErrorChange("fullNameError")("Full Name is required!")
    } else if (!values.email) {
      handleErrorChange("emailError")("Email is required!")
    } else if (!isValidEmail(values.email)) {
      handleErrorChange("emailError")("Email address must be valid!")
    } else if (!values.password) {
      handleErrorChange("passwordError")("Password is required!")
    } else {
      dispatch(
        JWTAuth.onRegister({
          full_name: values.fullName,
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
              <span className="auth-form-title">Register A New Account</span>
              <div className="wrap-input validate-input input-group">
                <div className="input-group-text bg-white text-muted">
                  <Icon icon="user" size={20} color="black" className="me-2" />
                </div>
                <input
                  className="input border-start-0 ms-0 form-control"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => {
                    handleChange("fullName")(e)
                    handleErrorChange("fullNameError")("")
                  }}
                  autoComplete="username"
                  value={values.fullName}
                />
              </div>
              {errorValues.fullNameError && (
                <div className="error-message">{errorValues.fullNameError}</div>
              )}
              <div
                className="wrap-input validate-input input-group"
                data-bs-validate="Valid email is required: ex@abc.xyz"
              >
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
              <label className="custom-control custom-checkbox mt-4">
                <input type="checkbox" className="custom-control-input" />
                <span className="custom-control-label">
                  Agree the <a href="/#">terms and policy</a>
                </span>
              </label>
              <div className="container-auth-form-btn">
                <button className="auth-form-btn" onClick={onClick}>
                  Register
                </button>
              </div>
              <div className="text-center pt-3">
                <p className="text-dark mb-0 d-inline-flex">
                  Already have account ?
                  <Link
                    to="/login"
                    target="_self"
                    className="text-primary ms-1"
                  >
                    Sign In
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

export default Register
