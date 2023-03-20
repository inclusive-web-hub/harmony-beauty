import React from "react"
import { EditProfile } from "../../components/EditInfo"
const EditProfilePage = () => {
  return (
    <div className="auth-img">
      <div className="auth-page">
        <div className="container-login">
          <div className="">
            <h1 className="page-title text-center mb-5">Edit Profile</h1>
            <EditProfile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage
