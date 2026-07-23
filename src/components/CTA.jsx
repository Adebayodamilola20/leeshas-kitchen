import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, reveal } from '../anim'
import { Icon } from './Icons'

/*
  "Ready to eat?" — the closing full-bleed moment before the footer:
  a blurred warm scene, serif headline, order/contact CTAs, and a dotted
  line drifting down the right edge (dash offset animates).
*/

export default function CTA() {
  return (
    <section className="flowing" id="contact-preview">
      <video
        className="flowing-video"
        src="/videos/kitchen-2.mov"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div className="flowing-bg" aria-hidden />
      <div className="flowing-figure" aria-hidden />
      <div className="flowing-scrim" aria-hidden />

      <svg className="flowing-dots" viewBox="0 0 400 900" aria-hidden>
        <path
          d="M 320 -40 C 260 160, 200 260, 250 420 C 300 580, 380 640, 360 940"
          fill="none"
          stroke="#f6f4e0"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="0.1 26"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-261" dur="9s" repeatCount="indefinite" />
        </path>
      </svg>

      <motion.div className="flowing-inner" variants={stagger} {...reveal}>
        <motion.h2 className="serif" variants={fadeUp}>Ready to eat?</motion.h2>
        <motion.p variants={fadeUp}>
          Same-day delivery on weekday orders in before 5pm.<br />
          Trays and events open a day ahead — message the kitchen.
        </motion.p>
        <motion.div className="flowing-cta" variants={fadeUp}>
          <Link to="/order" className="btn btn-lav btn-lg"><Icon name="check" width={17} height={17} /> Start an order</Link>
          <Link to="/contact" className="btn btn-cream btn-lg"><Icon name="arrow" width={17} height={17} /> Contact the kitchen</Link>
        </motion.div>
        <motion.p className="flowing-note" variants={fadeUp}>
          Cooked to order · Delivered warm · Small · Family · Tray
        </motion.p>
      </motion.div>
    </section>
  )
}
