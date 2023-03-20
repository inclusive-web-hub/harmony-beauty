import { Products } from "../../components/Products"
import { PagingList } from "../../components/PagingList"
import { usePagination } from "../../components/Pagination"
import productData from "../../data/products.json"
import { useEffect, useState } from "react"
import React from "react"
import { Layout } from "../../layout"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import Icon from "../../components/Icon"
import alanBtn from "@alan-ai/alan-sdk-web"
import { useNavigate } from "react-router-dom"

const Shop = () => {
  const allProducts = [...productData]
  const [productOrder, setProductOrder] = useState(
    allProducts.sort((a, b) => (a.price < b.price ? 1 : -1))
  )
  const navigate = useNavigate()
  const authResult = new URLSearchParams(window.location.search)
  const productType = authResult.get("product_type")
  const [products, setProducts] = useState([...productOrder])
  const [searchText, setSearchText] = useState()
  const [activeProduct, setActiveProduct] = useState()
  const mapIndexes = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
    fifth: 4,
    sixth: 5,
    seventh: 6,
    eighth: 7,
    nineth: 8,
    last: 8,
  }

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_AI_KEY,
      onCommand: (commandData) => {
        switch (commandData.command) {
          case "allProducts":
            setProducts([...commandData.products])
            break
          case "highlight":
            setActiveProduct(commandData.product)
            break
          case "open":
            navigate(`/product/${products[mapIndexes[commandData.index]].id}`)
            break
          case "goBack":
            navigate(`/shop`)
            break
        }
      },
    })
    productOrder.filter((product) => product.product_type === "blush")
  }, [productOrder, productType])

  const paginate = usePagination(products, 9)

  const handleSort = (value) => {
    if (value === "highToMin") {
      const newOrder = allProducts.sort((a, b) => (a.price < b.price ? 1 : -1))
      setProductOrder(newOrder)
    }
    if (value === "minToHigh") {
      const newOrder = allProducts.sort((a, b) => (a.price > b.price ? 1 : -1))
      setProductOrder(newOrder)
    }
  }

  const onSearch = (e) => {
    setSearchText(e.target.value)
    if (
      e.target.value === "" ||
      e.target.value === null ||
      e.target.value === undefined
    ) {
      setProducts(productOrder)
    }
    setProducts(
      productOrder.filter((product) =>
        product.name.toLowerCase().includes(searchText)
      )
    )
  }

  return (
    <Layout>
      <div>
        <div className="shop">
          <div className="wrapper">
            <div className="shop-content">
              <div className="shop-aside">
                <div className="box-field box-field-search">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    value={searchText}
                    onChange={onSearch}
                  />
                </div>
                <div className="shop-aside-item">
                  <span className="shop-aside-item-title">Categories</span>
                  <ul>
                    <li>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() =>
                          setProducts(
                            productOrder.filter(
                              (product) => product.product_type === "blush"
                            )
                          )
                        }
                      >
                        Blush (
                        <span>
                          {
                            productOrder.filter(
                              (product) => product.product_type === "blush"
                            ).length
                          }
                        </span>
                        )
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() =>
                          setProducts(
                            productOrder.filter(
                              (product) => product.product_type === "bronzer"
                            )
                          )
                        }
                      >
                        Bronzer (
                        <span>
                          {
                            productOrder.filter(
                              (product) => product.product_type === "bronzer"
                            ).length
                          }
                        </span>
                        )
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() =>
                          setProducts(
                            productOrder.filter(
                              (product) => product.product_type === "eyebrow"
                            )
                          )
                        }
                      >
                        Eyebrow (
                        <span>
                          {
                            productOrder.filter(
                              (product) => product.product_type === "eyebrow"
                            ).length
                          }
                        </span>
                        )
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() =>
                          setProducts(
                            productOrder.filter(
                              (product) => product.product_type === "eyeliner"
                            )
                          )
                        }
                      >
                        Eyeliner (
                        <span>
                          {
                            productOrder.filter(
                              (product) => product.product_type === "eyeliner"
                            ).length
                          }
                        </span>
                        )
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() =>
                          setProducts(
                            productOrder.filter(
                              (product) => product.product_type === "eyeshadow"
                            )
                          )
                        }
                      >
                        Eyeshadow (
                        <span>
                          {
                            productOrder.filter(
                              (product) => product.product_type === "eyeshadow"
                            ).length
                          }
                        </span>
                        )
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() =>
                          setProducts(
                            productOrder.filter(
                              (product) => product.product_type === "foundation"
                            )
                          )
                        }
                      >
                        Foundation (
                        <span>
                          {
                            productOrder.filter(
                              (product) => product.product_type === "foundation"
                            ).length
                          }
                        </span>
                        )
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() =>
                          setProducts(
                            productOrder.filter(
                              (product) => product.product_type === "lip_liner"
                            )
                          )
                        }
                      >
                        Lip liner (
                        <span>
                          {
                            productOrder.filter(
                              (product) => product.product_type === "lip_liner"
                            ).length
                          }
                        </span>
                        )
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() =>
                          setProducts(
                            productOrder.filter(
                              (product) => product.product_type === "lipstick"
                            )
                          )
                        }
                      >
                        Lipstick (
                        <span>
                          {
                            productOrder.filter(
                              (product) => product.product_type === "lipstick"
                            ).length
                          }
                        </span>
                        )
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() =>
                          setProducts(
                            productOrder.filter(
                              (product) => product.product_type === "mascara"
                            )
                          )
                        }
                      >
                        Mascara (
                        <span>
                          {
                            productOrder.filter(
                              (product) => product.product_type === "mascara"
                            ).length
                          }
                        </span>
                        )
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() =>
                          setProducts(
                            productOrder.filter(
                              (product) =>
                                product.product_type === "nail_polish"
                            )
                          )
                        }
                      >
                        Nail polish (
                        <span>
                          {
                            productOrder.filter(
                              (product) =>
                                product.product_type === "nail_polish"
                            ).length
                          }
                        </span>
                        )
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shop-main">
                <div className="shop-main-filter">
                  <div className="shop-main-checkboxes"></div>
                  <div className="shop-main-select">
                    <DropdownButton
                      key="Danger"
                      variant="danger"
                      className="react-dropdown"
                      title={
                        <Icon icon="sort-alpha-asc" size={30} color="white" />
                      }
                    >
                      <Dropdown.Item
                        eventKey="1"
                        onClick={() => {
                          handleSort("minToHigh")
                        }}
                      >
                        <Icon
                          icon="sort-amount-asc"
                          size={30}
                          color="black"
                          className="me-3  mb-2 mt-2"
                        />
                        From cheap to expensive
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey="2"
                        onClick={() => {
                          handleSort("highToMin")
                        }}
                      >
                        <Icon
                          icon="sort-amount-desc"
                          size={30}
                          color="black"
                          className="me-3  mb-2 mt-2"
                        />
                        From expensive to cheap
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
                <div className="shop-main-items">
                  <Products
                    products={paginate?.currentData()}
                    activeProduct={activeProduct}
                  />
                  <PagingList paginate={paginate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Shop
