import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { features } from '../data'
import { fadeUp, stagger, reveal } from '../anim'
import { Icon } from './Icons'

export default function Features() {
  return (
    <section className="section" id="about-preview">
      <div className="container">
        <motion.div className="section-head" variants={stagger} {...reveal}>
          <motion.span className="eyebrow" variants={fadeUp}>
            <span className="dot" /> How the kitchen works
          </motion.span>
          <motion.h2 variants={fadeUp}>
            Six reasons regulars <span className="grad-text">keep ordering</span>
          </motion.h2>
          <motion.p variants={fadeUp}>
            Cooked to order, honestly portioned, delivered warm. The small
            things that make the difference between a takeaway and a
            home-cooked meal.
          </motion.p>
        </motion.div>

        <motion.div className="feature-grid" variants={stagger} {...reveal}>
          {features.map((f) => (
            <motion.article key={f.title} className="feature-card" variants={fadeUp}>
              <div className="feature-icon"><Icon name={f.icon} width={22} height={22} /></div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="section-cta" variants={fadeUp} {...reveal}>
          <Link to="/about" className="btn btn-outline btn-lg">
            More about Leesha <Icon name="arrow" width={16} height={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
