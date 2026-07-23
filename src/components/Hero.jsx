import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger } from '../anim'
import { Icon } from './Icons'

/*
  Hero for Leesha's Kitchen.

  Layout is intentionally dense: a status pill, a large split display
  headline with a mint marker under the accented word, a real sub-paragraph,
  two CTAs, and a trust strip (rating · orders shipped · same-day cutoff).
  The right column stacks two real dish photos — a big lead shot with a
  polaroid-style secondary shot overlapping the bottom-left corner.
*/

const trust = [
  { value: '4.9★', label: 'from 200+ orders' },
  { value: '2,400+', label: 'plates delivered' },
  { value: '5pm', label: 'same-day cutoff' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <motion.div className="hero-split" variants={stagger} initial="hidden" animate="show">
          {/* LEFT — copy stack */}
          <div className="hero-copy">
            <motion.span className="loc-pill" variants={fadeUp}>
              <span className="dot" /> Home-cooked · Made to order · Delivered
            </motion.span>

            <motion.h1 className="display" variants={fadeUp}>
              Real food,<br />cooked <span className="mark">to order.</span>
            </motion.h1>

            <motion.p className="hero-sub" variants={fadeUp}>
              Leesha cooks every plate the day it goes out — small plates for
              one, family portions for the flat, or full trays for the office.
              No batch trays, no leftovers passed off as fresh.
            </motion.p>

            <motion.div className="hero-ctas" variants={fadeUp}>
              <Link to="/order" className="btn btn-lav btn-lg btn-pill">
                <Icon name="check" width={16} height={16} /> Start an order
              </Link>
              <Link to="/menu" className="btn btn-outline btn-lg btn-pill">
                See the menu <Icon name="arrow" width={16} height={16} />
              </Link>
            </motion.div>

            <motion.ul className="hero-trust" variants={fadeUp}>
              {trust.map((t) => (
                <li key={t.label}>
                  <span className="v serif">{t.value}</span>
                  <span className="l">{t.label}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT — image stack */}
          <div className="hero-visual">
            <motion.div
              className="hero-lead"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <img src="/dishes/dish-3.jpg" alt="Yam porridge with grilled fish and pepper sauce" fetchPriority="high" decoding="async" />
              <span className="hero-lead-tag">Today’s special · Yam porridge</span>
            </motion.div>

            <motion.div
              className="hero-secondary"
              initial={{ opacity: 0, x: -30, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            >
              <img src="/dishes/dish-2.jpg" alt="Efo riro with assorted meats" />
            </motion.div>

            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
            >
              <div>
                <span className="b-top">Ordered by 5pm</span>
                <span className="b-bot">Delivered tonight</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint below the fold */}
        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span>Scroll to see what’s cooking</span>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" aria-hidden>
            <rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" strokeWidth="1.5" />
            <motion.circle
              cx="10" cy="9" r="2.2" fill="currentColor"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
