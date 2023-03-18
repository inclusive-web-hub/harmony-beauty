import { useState, useEffect } from "react"
import useIsMounted from "./useIsMounted"

const useReactPath = () => {
  const isMounted = useIsMounted()
  const [path, setPath] = useState(
    isMounted ? window.location.pathname : undefined
  )

  useEffect(() => {
    if (!isMounted) return

    const setPathName = () => {
      setPath(window.location.pathname)
    }

    if (!path) {
      setPathName()
    }

    window.addEventListener("popstate", setPathName)

    return () => {
      window.removeEventListener("popstate", setPathName)
    }
  }, [isMounted, path])

  return path
}

export default useReactPath
