// @ts-nocheck
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { NavBar } from "./NavBar"
import { Profile } from "./Profile"
import navBarItem from "../../data/menu-items.json"
import { useSelector } from "react-redux"
import { authUser } from "../../redux/authReducer/selectors"

import React from "react"

import Icon from "../Icon"

export const Header = () => {
  const currentUser = useSelector(authUser)
  const [modalShow, setModalShow] = useState(false)
  const [fixedNavBar, setFixedNavBar] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", isSticky)
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  })

  const showHide = () => {
    setModalShow(!modalShow)
  }

  const isSticky = () => {
    const scrollTop = window.scrollY
    if (scrollTop > 10) {
      setFixedNavBar(true)
    } else {
      setFixedNavBar(false)
    }
  }
  return (
    <header className="header">
      <div className={`header-content ${fixedNavBar ? "fixed" : ""}`}>
        <div className="header-logo">
          <Link to="/">
            <img src="/logo.png" width="70px" alt="" />
          </Link>
        </div>
        <div className="header-box">
          <NavBar navBarItem={navBarItem} />
          {!currentUser?.length > 0 ? (
            <Link className="btn btn-danger btn-rounded" to="/login">
              Get Started
            </Link>
          ) : (
            <ul className="header-options">
              <li onClick={showHide}>
                <Icon icon="cart" size={20} color="black" />
                <span>{"12"}</span>
              </li>
              <li>
                <Profile />
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}
