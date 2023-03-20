// @ts-nocheck
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import ContentLoader from "../ContentLoader"
import PhoneInput from "react-phone-input-2"
import { SetPersonalInfo } from "../../api/UserAPI"
import "react-phone-input-2/lib/material.css"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { Calendar } from "react-date-range"

const EditInfo = () => {
  const navigate = useNavigate()
  const [personalInfoValues, setPersonalInfoValues] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    phoneNumber: "",
    birthday: "",
  })

  const [errorValues, setErrorValues] = useState({
    firstNameError: "",
    lastNameError: "",
    bioError: "",
    phoneNumberError: "",
    birthdayError: "",
  })

  const dispatch = useDispatch()

  const onClick = () => {
    const { firstName, lastName, bio, phoneNumber, birthday } =
      personalInfoValues

    if (!firstName) {
      setErrorValues({
        ...errorValues,
        firstNameError: "This field is required!",
      })
    } else if (!lastName) {
      setErrorValues({
        ...errorValues,
        lastNameError: "This field is required!",
      })
    } else if (!bio) {
      setErrorValues({
        ...errorValues,
        bioError: "This field is required!",
      })
    } else if (!phoneNumber) {
      setErrorValues({
        ...errorValues,
        phoneNumberError: "This field is required!",
      })
    } else if (!birthday) {
      setErrorValues({
        ...errorValues,
        birthdayError: "This field is required!",
      })
    } else {
      dispatch(
        SetPersonalInfo(
          {
            full_name: `${firstName} ${lastName}`,
            bio: bio,
            phone_number: phoneNumber,
            birthday: birthday.toISOString().split("T")[0],
          },
          navigate
        )
      )
    }
  }
  return (
    <div className="card mb-4">
      <div className="card-header">
        <h3 className="card-title">Edit Profile</h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter First Name"
                value={personalInfoValues.firstName}
                onChange={(e) => {
                  setPersonalInfoValues({
                    ...personalInfoValues,
                    firstName: e.target.value,
                  })
                  setErrorValues({ ...errorValues, firstNameError: "" })
                }}
              />
            </div>
            {errorValues.firstNameError && (
              <div className="error-message">{errorValues.firstNameError}</div>
            )}
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter Last Name"
                value={personalInfoValues.lastName}
                onChange={(e) => {
                  setPersonalInfoValues({
                    ...personalInfoValues,
                    lastName: e.target.value,
                  })
                  setErrorValues({ ...errorValues, lastNameError: "" })
                }}
              />
            </div>
            {errorValues.lastNameError && (
              <div className="error-message">{errorValues.lastNameError}</div>
            )}
          </div>
        </div>
        <div className="form-group">
          <PhoneInput
            country={"us"}
            className="form-control"
            id="phoneNumber"
            variant="outlined"
            label="Phone Number"
            placeholder="Phone Number"
            enableSearch={true}
            onChange={(phoneNumber) => {
              setPersonalInfoValues({
                ...personalInfoValues,
                phoneNumber: phoneNumber,
              })
              setErrorValues({ ...errorValues, phoneNumberError: "" })
            }}
          />
        </div>
        {errorValues.phoneNumberError && (
          <div className="error-message">{errorValues.phoneNumberError}</div>
        )}
        <div className="form-group">
          <label className="form-label">About Me</label>
          <textarea
            className="form-control"
            rows="3"
            value={personalInfoValues.bio}
            onChange={(e) => {
              setPersonalInfoValues({
                ...personalInfoValues,
                bio: e.target.value,
              })
              setErrorValues({ ...errorValues, bioError: "" })
            }}
          >
            Write bio me here.
          </textarea>
        </div>
        {errorValues.bioError && (
          <div className="error-message">{errorValues.bioError}</div>
        )}
        <div className="form-group">
          <label className="form-label">Date Of Birth</label>
          <Calendar
            onChange={(date) => {
              setPersonalInfoValues({
                ...personalInfoValues,
                birthday: date,
              })
              setErrorValues({ ...errorValues, birthdayError: "" })
            }}
          />
        </div>
      </div>
      <div className="card-footer text-end">
        <button className="btn btn-success me-3" onClick={onClick}>
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

export default EditInfo
