import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { NavBar } from "./NavBar"
import navBarItem from "../../data/menu-items.json"
import React from "react"

import Icon from "../Icon"

export const Header = () => {
  const cart = {}
  const [fixedNavBar, setFixedNavBar] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", isSticky)
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  })

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
            <img src="/logo.png" width="80px" alt="" />
          </Link>
        </div>
        <div className="header-box">
          <NavBar navBarItem={navBarItem} />
          <ul className="header-options">
            <li>
              <Link to="/faq" target="_blank">
                <Icon icon="search" size={20} color="black" />
              </Link>
            </li>
            <li>
              <Link to="/profile" target="_blank">
                <Icon icon="user" size={20} color="black" />
              </Link>
            </li>
            <li>
              <Link to="/cart" target="_blank">
                <Icon icon="cart" size={20} color="black" />
                <span>{cart?.length ?? "0"}</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="btn-menu js-btn-menu">
          {[1, 2, 3].map((i) => (
            <span key={i}>&nbsp;</span>
          ))}
        </div>
      </div>
    </header>
  )
}
