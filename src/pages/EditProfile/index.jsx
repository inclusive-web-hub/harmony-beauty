import React from "react"
import EditInfo from "../../components/EditInfo"
const EditProfile = () => {
  return (
    <div className="auth-img">
      <div className="auth-page">
        <div className="container-login">
          <div className="">
            <h1 className="page-title text-center mb-5">Edit Profile</h1>
            <EditInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
