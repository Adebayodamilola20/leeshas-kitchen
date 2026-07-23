import { useEffect, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  wrap,
} from 'framer-motion'

/*
  Scroll-driven marquee. No autoplay. The row is completely still when the
  user is still. When you scroll DOWN, the row drifts left; scroll UP, it
  drifts right.

  The raw scroll delta runs through a heavy spring so aggressive flicks
  don't translate 1:1 — the row eases into new movement instead of jumping.
  Combined with a small `factor`, that gives a slow, calm drift no matter
  how hard the user scrolls.
*/

export default function ScrollMarquee({
  children,
  factor = 0.14,
  max = '-50%',
  className = '',
}) {
  const value = parseFloat(max)
  const unit = max.slice(value.toString().length)

  const { scrollY } = useScroll()
  // Heavy spring on the raw scroll signal. High damping + low stiffness
  // → strong smoothing, so scroll-up flicks don't rocket the row.
  const smoothScrollY = useSpring(scrollY, {
    mass: 1.2, damping: 42, stiffness: 120, restDelta: 0.5,
  })

  const baseX = useMotionValue(0)
  const lastScroll = useRef(0)
  useEffect(() => {
    lastScroll.current = scrollY.get()
  }, [scrollY])

  useMotionValueEvent(smoothScrollY, 'change', (latest) => {
    const delta = latest - lastScroll.current
    lastScroll.current = latest
    baseX.set(baseX.get() - delta * factor)
  })

  const x = useTransform(baseX, (v) => `${wrap(0, value, v)}${unit}`)

  return (
    <div className="scroll-marquee">
      <motion.div className={`scroll-marquee-track ${className}`} style={{ x }}>
        {children}
      </motion.div>
    </div>
  )
}
