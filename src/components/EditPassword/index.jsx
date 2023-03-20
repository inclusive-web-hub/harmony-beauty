// @ts-nocheck
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import ContentLoader from "../ContentLoader"
import { resetPassword } from "../../api/UserAPI"
import { useNavigate } from "react-router-dom"
import Icon from "../Icon"

export const EditPassword = () => {
  const navigate = useNavigate()
  const [passwordValues, setPasswordValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [showPasswordValues, setShowPasswordValues] = useState({
    showOldPassword: true,
    showNewPassword: true,
    showConfirmPassword: true,
  })

  const [errorValues, setErrorValues] = useState({
    oldPasswordError: "",
    newPasswordError: "",
    confirmPasswordError: "",
  })

  const dispatch = useDispatch()

  const onClick = () => {
    const { oldPassword, newPassword, confirmPassword } = passwordValues

    if (!oldPassword) {
      setErrorValues({
        ...errorValues,
        oldPasswordError: "This field is required!",
      })
    } else if (!newPassword) {
      setErrorValues({
        ...errorValues,
        newPasswordError: "This field is required!",
      })
    } else if (!confirmPassword) {
      setErrorValues({
        ...errorValues,
        confirmPasswordError: "This field is required!",
      })
    } else {
      dispatch(
        resetPassword(oldPassword, newPassword, confirmPassword, navigate)
      )
    }
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Reset Password</div>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label className="form-label">Current Password</label>
          <div
            className="wrap-input validate-input input-group"
            id="Password-toggle"
          >
            <div className="input-group-text bg-white text-muted">
              <Icon icon="key" size={20} color="black" className="me-2" />
            </div>
            <input
              className="input border-start-0 ms-0 form-control"
              type={showPasswordValues.showOldPassword ? "text" : "password"}
              placeholder="Old Password"
              autoComplete="old-password"
              onChange={(e) => {
                setPasswordValues({
                  ...passwordValues,
                  oldPassword: e.target.value,
                })
                setErrorValues({ ...errorValues, oldPasswordError: "" })
              }}
              value={passwordValues.oldPassword}
            />
            <div className="input-group-text bg-white">
              <Icon
                icon={
                  showPasswordValues.showOldPassword ? "eye" : "eye-blocked"
                }
                size={20}
                color="black"
                className="me-2 show-password"
                onClick={() => {
                  setShowPasswordValues({
                    ...showPasswordValues,
                    showOldPassword: !showPasswordValues.showOldPassword,
                  })
                }}
              />
            </div>
          </div>
          {errorValues.oldPasswordError && (
            <div className="error-message">{errorValues.oldPasswordError}</div>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">New Password</label>
          <div
            className="wrap-input validate-input input-group"
            id="Password-toggle1"
          >
            <div className="input-group-text bg-white text-muted">
              <Icon icon="key" size={20} color="black" className="me-2" />
            </div>
            <input
              className="input border-start-0 ms-0 form-control"
              type={showPasswordValues.showNewPassword ? "text" : "password"}
              placeholder="New Password"
              autoComplete="password"
              onChange={(e) => {
                setPasswordValues({
                  ...passwordValues,
                  newPassword: e.target.value,
                })
                setErrorValues({ ...errorValues, newPasswordError: "" })
              }}
              value={passwordValues.newPassword}
            />
            <div className="input-group-text bg-white">
              <Icon
                icon={
                  showPasswordValues.showNewPassword ? "eye" : "eye-blocked"
                }
                size={20}
                color="black"
                className="me-2 show-password"
                onClick={() => {
                  setShowPasswordValues({
                    ...showPasswordValues,
                    showNewPassword: !showPasswordValues.showNewPassword,
                  })
                }}
              />
            </div>
          </div>
          {errorValues.newPasswordError && (
            <div className="error-message">{errorValues.newPasswordError}</div>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <div
            className="wrap-input validate-input input-group"
            id="Password-toggle2"
          >
            <div className="input-group-text bg-white text-muted">
              <Icon icon="key" size={20} color="black" className="me-2" />
            </div>
            <input
              className="input border-start-0 ms-0 form-control"
              type={
                showPasswordValues.showConfirmPassword ? "text" : "password"
              }
              placeholder="Confirm Password"
              autoComplete="password"
              onChange={(e) => {
                setPasswordValues({
                  ...passwordValues,
                  confirmPassword: e.target.value,
                })
                setErrorValues({ ...errorValues, confirmPasswordError: "" })
              }}
              value={passwordValues.confirmPassword}
            />
            <div className="input-group-text bg-white">
              <Icon
                icon={
                  showPasswordValues.showConfirmPassword ? "eye" : "eye-blocked"
                }
                size={20}
                color="black"
                className="me-2 show-password"
                onClick={() => {
                  setShowPasswordValues({
                    ...showPasswordValues,
                    showConfirmPassword:
                      !showPasswordValues.showConfirmPassword,
                  })
                }}
              />
            </div>
          </div>
          {errorValues.confirmPasswordError && (
            <div className="error-message">
              {errorValues.confirmPasswordError}
            </div>
          )}
        </div>
      </div>
      <div className="card-footer text-end">
        <button className="btn btn-primary me-3" onClick={onClick}>
          Submit
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            navigate("/")
          }}
        >
          Cancel
        </button>
      </div>
      <ContentLoader />
    </div>
  )
}
