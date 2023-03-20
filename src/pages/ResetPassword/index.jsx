import React from "react"
import { EditPassword } from "../../components/EditPassword"
const ResetPassword = () => {
  return (
    <div className="auth-img">
      <div className="auth-page">
        <div className="container-login">
          <div className="">
            <h1 className="page-title text-center mb-5">Reset Password</h1>
            <EditPassword />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
