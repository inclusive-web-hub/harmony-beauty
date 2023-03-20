// @ts-nocheck
import React from "react"
import { useNavigate } from "react-router-dom"
import Icon from "../Icon"

export const About = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="card mb-4">
      <div className="card-header">
        <div className="card-title">About</div>
      </div>
      <div className="card-body">
        <div>
          <h5>
            Biography
            <Icon
              icon="pencil"
              size={20}
              color="black"
              className="text-primary ms-2"
            />
          </h5>
          <p>{user.bio}</p>
        </div>
        <hr />
        <div className="d-flex align-items-center mb-3 mt-3">
          <div className="me-4 text-center text-primary">
            <span>
              <Icon
                icon="user"
                size={20}
                color="black"
                className="text-primary ms-2"
              />
            </span>
          </div>
          <div>
            <strong>{user.full_name}</strong>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3 mt-3">
          <div className="me-4 text-center text-primary">
            <Icon
              icon="calendar"
              size={20}
              color="black"
              className="text-primary ms-2"
            />
          </div>
          <div>
            <strong>{user.birthday}</strong>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3 mt-3">
          <div className="me-4 text-center text-primary">
            <Icon
              icon="phone1"
              size={20}
              color="black"
              className="text-primary ms-2"
            />
          </div>
          <div>
            <strong>{user.phone_number} </strong>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3 mt-3">
          <div className="me-4 text-center text-primary">
            <Icon
              icon="envelop"
              size={20}
              color="black"
              className="text-primary ms-2"
            />
          </div>
          <div>
            <strong>{user.email}</strong>
          </div>
        </div>
      </div>
      <div className="card-footer text-end">
        <button
          className="btn btn-danger"
          onClick={() => {
            navigate("/")
          }}
        >
          <Icon icon="exit" size={20} color="white" className="me-2" />
          Go Back Home
        </button>
      </div>
    </div>
  )
}
