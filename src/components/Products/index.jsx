import React from "react"
import { SingleProduct } from "./SingleProduct"

export const Products = ({ products, activeProduct }) => {
  return (
    <>
      {products.map((product) => (
        <SingleProduct
          key={product.id}
          product={product}
          activeProduct={activeProduct}
        />
      ))}
    </>
  )
}
