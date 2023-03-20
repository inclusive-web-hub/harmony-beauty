import React from "react"
import { Link } from "react-router-dom"

export const SingleProduct = ({ product, activeProduct }) => {
  const { name, price, image_link, id, price_sign, currency } = product
  return (
    <>
      <div
        className={
          activeProduct?.id === id
            ? "products-item text-center todo-add-css"
            : "products-item text-center"
        }
      >
        <Link to={`/product/${id}`}>
          <div className="products-item-img">
            <img src={image_link} className="js-img" alt={id} />
          </div>
          <div className="products-item-info">
            <span className="products-item-name">{name}</span>
            <span className="products-item-cost mt-3 text-success">
              {price_sign} {price} {currency}
            </span>
          </div>
        </Link>
      </div>
    </>
  )
}
