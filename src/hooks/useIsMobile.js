import { useEffect, useState } from 'react'

// Simple viewport-width check that returns `null` on the first paint so
// consumers can bail out until it settles (matches the Elementis pattern).
export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])
  return isMobile
}
