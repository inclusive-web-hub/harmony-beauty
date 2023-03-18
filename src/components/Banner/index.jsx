import React from "react"
import { Link } from "react-router-dom"

export const Banner = () => {
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

          <Link to="/shop" target="_blank" className="btn">
            Shop now
          </Link>
        </div>
      </div>
      <img className="main-block-decor" src="/images/bottom-decor.png" alt="" />
    </div>
  )
}
