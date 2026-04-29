import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Handles scroll behaviour on route + hash changes:
//   • No hash → reset to top.
//   • Hash present → scroll to the element with that id, retrying briefly
//     because the target section may render after this effect runs (React
//     mounts after navigation, so the native browser anchor jump misses).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.replace(/^#/, '')
    let attempts = 0
    let timeoutId: number | undefined

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      attempts += 1
      if (attempts < 20) {
        timeoutId = window.setTimeout(tryScroll, 50)
      }
    }

    tryScroll()
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [pathname, hash])

  return null
}
