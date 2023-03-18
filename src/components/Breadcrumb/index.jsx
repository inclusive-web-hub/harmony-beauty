import { useLocation, Link } from "react-router-dom"

import React, { Fragment } from "react"

export const Breadcrumb = ({ breadcrumb, title, description }) => {
  const location = useLocation()

  return (
    <div className="detail-block detail-block-margin">
      <div className="wrapper">
        <div className="detail-block-content">
          <h1>{title}</h1>

          {breadcrumb && (
            <ul className="bread-crumbs">
              {breadcrumb?.map(({ path, label }, i) => {
                return (
                  <Fragment key={i}>
                    {path === location.pathname ? (
                      <li className="bread-crumbs-item">{label}</li>
                    ) : (
                      <li className="bread-crumbs-item">
                        <Link
                          to={path}
                          className="bread-crumbs-link"
                          target="_blank"
                        >
                          {label}
                        </Link>
                      </li>
                    )}
                  </Fragment>
                )
              })}
            </ul>
          )}
          {description && (
            <span className="error-description">{description}</span>
          )}
        </div>
      </div>
    </div>
  )
}
