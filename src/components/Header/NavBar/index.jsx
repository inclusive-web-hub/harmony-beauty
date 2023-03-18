import React from "react"
import { useLocation, Link } from "react-router-dom"

export const NavBar = ({ navBarItem }) => {
  const location = useLocation()

  return (
    <ul className="header-nav">
      {navBarItem.map(
        (
          /** @type {{ id: React.Key | null | undefined; link: import("react-router-dom").To; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }} */ navBar
        ) => (
          <li key={navBar.id}>
            <Link
              className={navBar.link === location.pathname ? "active" : ""}
              to={navBar.link}
            >
              {navBar.name}
            </Link>
          </li>
        )
      )}
    </ul>
  )
}
