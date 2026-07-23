import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pricing } from '../data'
import { fadeUp, stagger, reveal } from '../anim'
import { Icon } from './Icons'

export default function Pricing() {
  return (
    <section className="section" id="portions">
      <div className="container">
        <motion.div className="section-head" variants={stagger} {...reveal}>
          <motion.span className="eyebrow" variants={fadeUp}>
            <span className="dot" /> Ways to order
          </motion.span>
          <motion.h2 variants={fadeUp}>
            Small plate, family portion, <span className="grad-text">or a full tray</span>
          </motion.h2>
          <motion.p variants={fadeUp}>
            Three honest portion sizes. Any dish on the menu, cooked to order,
            delivered warm.
          </motion.p>
        </motion.div>

        <motion.div className="price-grid" variants={stagger} {...reveal}>
          {pricing.map((p) => (
            <motion.div
              key={p.name}
              className={`price-card ${p.featured ? 'featured' : ''}`}
              variants={fadeUp}
            >
              {p.featured && <span className="price-badge">Most ordered</span>}
              <h3>{p.name}</h3>
              <div className="price-amt">
                <span className="amt">{p.price}</span>
                <span className="cad">{p.cadence}</span>
              </div>
              <p className="blurb">{p.blurb}</p>
              <ul className="price-features">
                {p.features.map((f) => (
                  <li key={f}>
                    <span className="tick"><Icon name="check" width={18} height={18} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/order" className={`btn ${p.featured ? 'btn-lav' : 'btn-outline'}`}>
                {p.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="section-cta" variants={fadeUp} {...reveal}>
          <Link to="/order" className="btn btn-outline btn-lg">
            See all portion options <Icon name="arrow" width={16} height={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
