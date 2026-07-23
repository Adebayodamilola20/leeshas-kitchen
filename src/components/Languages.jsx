import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { languages } from '../data'
import { fadeUp, stagger, reveal } from '../anim'
import { Icon } from './Icons'

export default function Languages() {
  return (
    <section className="section" id="menu-preview">
      <div className="container">
        <motion.div className="section-head" variants={stagger} {...reveal}>
          <motion.span className="eyebrow" variants={fadeUp}>
            <span className="dot" /> On the menu
          </motion.span>
          <motion.h2 variants={fadeUp}>
            Home classics, <span className="grad-text">honestly cooked</span>
          </motion.h2>
          <motion.p variants={fadeUp}>
            A short rotating menu of the everyday dishes regulars keep coming
            back for. The full list — with sizes and spice — lives on the menu
            page.
          </motion.p>
        </motion.div>

        <motion.div className="lang-cloud" variants={stagger} {...reveal}>
          {languages.map((l) => (
            <motion.span key={l} className="lang-pill" variants={fadeUp}>{l}</motion.span>
          ))}
        </motion.div>

        <motion.div className="section-cta" variants={fadeUp} {...reveal}>
          <Link to="/menu" className="btn btn-outline btn-lg">
            See full menu <Icon name="arrow" width={16} height={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
