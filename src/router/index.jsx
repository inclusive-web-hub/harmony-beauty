// @ts-nocheck
import React, { useEffect, useState } from "react"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setAuthUser } from "../redux/authReducer/actions"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Landing from "../pages/Landing"
import ResetPassword from "../pages/ResetPassword"
import EditProfile from "../pages/EditProfile"
import PageNotFound from "../pages/PageNotFound"
import Profile from "../pages/Profile"
import ProductDetails from "../components/ProductDetails"
import Shop from "../pages/Shop"

const Router = () => {
  const [currentAuthUser] = useState(localStorage.getItem("user"))
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = localStorage.getItem("user")
      dispatch(setAuthUser(user))
      //dispatch(setCartList());
    }
  }, [dispatch, localStorage.getItem("user")])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/register"
          element={
            currentAuthUser ? <Navigate to={"/"} replace /> : <Register />
          }
        />
        <Route
          path="/login"
          element={currentAuthUser ? <Navigate to={"/"} replace /> : <Login />}
        />
        <Route
          path="/reset-password"
          element={
            !currentAuthUser ? <Navigate to={"/"} replace /> : <ResetPassword />
          }
        />
        <Route
          path="/edit-profile"
          element={
            !currentAuthUser ? <Navigate to={"/"} replace /> : <EditProfile />
          }
        />
        <Route
          path="/profile"
          element={
            !currentAuthUser ? <Navigate to={"/"} replace /> : <Profile />
          }
        />
        <Route
          path="/shop"
          element={!currentAuthUser ? <Navigate to={"/"} replace /> : <Shop />}
        />
        <Route
          path="/product/:uuid"
          element={
            !currentAuthUser ? (
              <Navigate to={"/"} replace />
            ) : (
              <ProductDetails />
            )
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
