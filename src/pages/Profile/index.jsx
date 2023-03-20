import React from "react"
import { About } from "../../components/About"

const Profile = () => {
  return (
    <div className="auth-img">
      <div className="auth-page">
        <div className="container-login">
          <div className="">
            <h1 className="page-title text-center mb-5">Profile</h1>
            <About />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
