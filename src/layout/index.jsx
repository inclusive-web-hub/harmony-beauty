import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import React from "react"

export const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="content">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}
