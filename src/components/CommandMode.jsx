import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { commands } from '../data'
import { fadeUp, stagger, reveal } from '../anim'
import { Icon } from './Icons'

export default function CommandMode() {
  return (
    <section className="section command" id="order-preview">
      <div className="container command-split">
        <motion.div variants={stagger} {...reveal}>
          <motion.span className="eyebrow" variants={fadeUp}>
            <span className="dot" /> Ordering
          </motion.span>
          <motion.h2 variants={fadeUp}>
            Tell us the portion, <span className="grad-text">we handle the rest</span>
          </motion.h2>
          <motion.p className="lead" variants={fadeUp}>
            Pick a dish, pick a size, pick a delivery window. Same-day cutoff
            is 5pm; trays open a day ahead. Everything is cooked from scratch
            after you order.
          </motion.p>
          <motion.div className="chips" variants={stagger}>
            {commands.map((c) => (
              <motion.span key={c} className="chip" variants={fadeUp}>{c}</motion.span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} style={{ marginTop: 24 }}>
            <Link to="/order" className="btn btn-lav">
              Start an order <Icon name="arrow" width={16} height={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="command-panel"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="doc">
            <strong>Order confirmed.</strong> One <span className="hl">family portion</span> of jollof + peppered
            chicken, delivery to Ada · 7:30pm today. Extra plantain on the
            house (order over ₦15k) — packed <span className="hl">warm and sealed</span>.
          </div>
          <div className="chips">
            <span className="chip">Add zobo</span>
            <span className="chip">Message the kitchen</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
