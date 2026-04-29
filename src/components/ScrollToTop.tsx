import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets the scroll position to the top whenever the route changes —
// except when navigating to an in-page anchor (#section), where we let
// the browser handle smooth-scrolling to the target instead.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
