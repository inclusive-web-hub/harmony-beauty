// @ts-nocheck
import React from "react"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import { Link } from "react-router-dom"
import Icon from "../../Icon"
import { useDispatch } from "react-redux"
import { JWTAuth } from "../../../api/AuthAPI"
import { useNavigate } from "react-router-dom"

export const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <DropdownButton
      key="Danger"
      variant="none"
      title={<Icon icon="user" size={20} color="white" />}
    >
      <Dropdown.Item
        eventKey="1"
        onClick={() => {
          navigate("/profile")
        }}
      >
        <Icon icon="user" size={20} color="white" className="me-3  mb-2 mt-2" />
        Profile
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="1"
        onClick={() => {
          navigate("/edit-profile")
        }}
      >
        <Icon
          icon="pencil"
          size={20}
          color="white"
          className="me-3  mb-2 mt-2"
        />
        Edit Profile
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="1"
        onClick={() => {
          navigate("/reset-password")
        }}
      >
        <Icon icon="key" size={20} color="white" className="me-3  mb-2 mt-2" />
        Reset Password
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        eventKey="3"
        onClick={() => dispatch(JWTAuth.onLogout(navigate))}
      >
        <Icon icon="exit" size={20} color="white" className="me-3" />
        Logout
      </Dropdown.Item>
    </DropdownButton>
  )
}
