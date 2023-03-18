import React from "react"
import { Link } from "react-router-dom"
import Icon from "../../Icon"
export const NavColumn = ({ nav }) => {
  return (
    <div className="footer-nav-col">
      <span className="footer-nav-col-title">{nav.title}</span>
      <ul>
        {nav?.links?.map((/** @type {any} */ link) => (
          <li key={link.name}>
            <Icon icon={link.icon} size={20} color="white" />
            <Link to={link.path} target="_blank">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
