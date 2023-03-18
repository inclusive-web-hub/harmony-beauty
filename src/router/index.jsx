import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "../pages/Landing"
import PageNotFound from "../pages/PageNotFound"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
