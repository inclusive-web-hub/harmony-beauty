import productData from "../../data/products.json"
import { useEffect, useState } from "react"
import React from "react"
import { Layout } from "../../layout"
import Icon from "../Icon"
import { Link } from "react-router-dom"

const ProductDetails = () => {
  const productID = window.location.pathname.split("/").pop()
  const products = [...productData]
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (productID) {
      const data = products.find((pd) => pd.id === Number(productID))
      setProduct(data)
    }
  }, [productID])

  if (!product) return <></>
  return (
    <Layout>
      <div className="product">
        <div className="wrapper">
          <div className="product-content">
            <img src={product.image_link} alt="product" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <span className="product-stock">{product.brand}</span>

              <span className="product-num">
                Created at: {product.created_at.split("T")[0]}
              </span>
              <span className="product-num">
                Update at: {product.updated_at.split("T")[0]}
              </span>

              <span className="product-price">
                Price: {product.price_sign} {product.price} {product.currency}
              </span>
              <p>{product.description}</p>
              <div className="product-buttons">
                <Link
                  className="checkout-btn btn btn-danger p-2"
                  to={product.product_link}
                  target="_blank"
                >
                  <Icon icon="cart" size={20} color="white" className="" /> Buy
                  Now
                </Link>
              </div>
            </div>
          </div>
          <div className="product-detail mb-6"></div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetails
