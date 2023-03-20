// @ts-nocheck
import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { authUser } from "../../redux/authReducer/selectors"

export const Banner = () => {
  const currentUser = useSelector(authUser)
  return (
    <div className="main-block load-bg">
      <div className="wrapper">
        <div className="main-block-content">
          <span className="header-text">ATTAIN</span>
          <span className="main-text">Self Actualization </span>
          <p>
            Partake in the nourishment of your skin with our comprehensive range
            of cosmetic products that cater to all, without exception.
          </p>

          {!currentUser?.length > 0 ? (
            <Link to="/login" target="_self" className="btn">
              Get Started
            </Link>
          ) : (
            <Link to="/shop" target="_self" className="btn">
              Shop Now
            </Link>
          )}
        </div>
      </div>
      <img className="main-block-decor" src="/images/bottom-decor.png" alt="" />
    </div>
  )
}
