import React, { useEffect } from "react"
import Router from "./router"
import useReactPath from "./hooks/useReactPath"

function App() {
  const loader = document.querySelector(".preloader")
  const root = document.getElementById("root")

  const showLoader = () => {
    loader?.classList.remove("d-none")
    if (!root?.classList.contains("d-none")) {
      root?.classList.add("d-none")
    }
  }

  const hideLoader = () => {
    root?.classList.remove("d-none")
    if (root?.classList.contains("d-none")) {
      root?.classList.remove("d-none")
    }
    loader?.classList.add("d-none")
  }

  /**
   * @param {number | undefined} ms
   */
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const path = useReactPath()

  useEffect(() => {
    showLoader()
    sleep(2000).then(() => {
      hideLoader()
    })
    // eslint-disable-next-line
  }, [path])

  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
