import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, reveal } from '../anim'

const occasions = {
  'Solo lunch': 'A small plate for one — a single portion of whatever is on the menu that day, cooked when the order lands.',
  'Date night': 'Two medium portions, one main and one side. Delivered warm, packaged neat enough to plate at home.',
  'Family Sunday': 'A large family portion, big enough to feed four to six around one table with leftovers for Monday.',
  'Flatmates': 'Two or three plates going different directions — mild for one, extra pepper for another, honest sizes for both.',
  'Office lunch': 'A tray for the desk. Order the day before; we send it warm in insulated packaging, ready to serve.',
  'Birthday at home': 'Party trays and small chops platters, timed to arrive before guests do.',
  'Late-night craving': 'Small plate, one-hour delivery slot, no fuss. Order by 8pm on weeknights.',
  'Meeting the parents': 'Family portion + puff-puff. The point is you look like you cooked. That is between us.',
}

// Hands-plating-a-dish doodle in the site's cream/green doodle style.
function LaptopDoodle() {
  return (
    <svg className="persona-illo" viewBox="0 0 420 300" fill="none" aria-hidden>
      <ellipse cx="210" cy="240" rx="150" ry="18" fill="#151310" />
      <ellipse cx="210" cy="232" rx="110" ry="30" fill="#7ee0b0" />
      <ellipse cx="210" cy="228" rx="100" ry="26" fill="#f6efe0" />

      <g fill="#e8623a">
        <circle cx="182" cy="222" r="8" />
        <circle cx="212" cy="216" r="10" />
        <circle cx="238" cy="224" r="7" />
      </g>
      <path d="M170 218c8-4 20-6 30-4 12 2 22 8 40 6" stroke="#151310" strokeWidth="3" fill="none" strokeLinecap="round" />

      <path d="M60 260c30-30 90-32 130-16" stroke="#7ee0b0" strokeWidth="26" strokeLinecap="round" />
      <path d="M360 260c-30-30-90-32-130-16" stroke="#7ee0b0" strokeWidth="26" strokeLinecap="round" />

      <path d="M40 130l30-30 20 24 34-40 28 24 40-34 30 30 40-24 30 24 44-30" stroke="#151310" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export default function PersonaSection() {
  const names = Object.keys(occasions)
  const [active, setActive] = useState('Solo lunch')

  return (
    <section className="persona" id="occasions">
      <div className="container persona-inner">
        <div className="persona-grid">
          <motion.div variants={stagger} {...reveal}>
            <motion.h2 className="serif" variants={fadeUp}>
              Order for the <br />occasion <em>you’re</em> in
            </motion.h2>
            <motion.p className="persona-sub" variants={fadeUp}>
              Pick a moment — we’ll suggest the portion and pairing.
            </motion.p>
            <motion.div className="persona-pills" variants={fadeUp}>
              {names.map((n) => (
                <button
                  key={n}
                  className={`persona-pill ${active === n ? 'active' : ''}`}
                  onClick={() => setActive(n)}
                >
                  {n}
                </button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="persona-right" variants={stagger} {...reveal}>
            <motion.div variants={fadeUp}><LaptopDoodle /></motion.div>
            <motion.h3 className="serif" variants={fadeUp}>One kitchen. Every craving.</motion.h3>
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {occasions[active]}
              </motion.p>
            </AnimatePresence>
            <motion.div variants={fadeUp}>
              <Link to="/order" className="btn btn-lav">
                Order for {active.toLowerCase()}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
