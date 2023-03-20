// @ts-nocheck
import React, { useEffect } from "react"
import Router from "./router"
import useReactPath from "./hooks/useReactPath"

function initTiledesk() {
  window.tiledeskSettings = {
    projectid:
      process.env.REACT_APP_TILEDESK_PROJECT_ID,
  }
  ;(function (d, s, id) {
    var w = window
    var d = document
    class i {
      constructor() {
        i.c(arguments)
      }
      static c(args) {
        i.q.push(args)
      }
    }
    i.q = []
    w.Tiledesk = i
    var js,
      fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) return
    js = d.createElement(s)
    js.id = id
    js.async = true
    js.src = "https://widget.tiledesk.com/v6/launch.js"
    fjs.parentNode.insertBefore(js, fjs)
  })(document, "script", "tiledesk-jssdk")
}

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

  initTiledesk()

  useEffect(() => {
    showLoader()
    sleep(1000).then(() => {
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
