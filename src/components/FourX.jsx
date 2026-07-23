import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, reveal } from '../anim'
import { Icon } from './Icons'

export default function FourX() {
  return (
    <section className="section fourx" id="cutoff">
      <motion.div className="container" variants={stagger} {...reveal}>
        <motion.h2 className="serif" variants={fadeUp}>
          Order by <span className="mark">5pm</span>
        </motion.h2>
        <motion.p variants={fadeUp}>
          Weekday orders in before 5pm land the same evening — small plate,
          family portion, or event tray. Weekend and tray orders open a day
          ahead.
        </motion.p>
        <motion.div className="cta" variants={fadeUp}>
          <Link to="/menu" className="btn btn-outline btn-lg">
            <Icon name="sparkles" width={17} height={17} /> See the menu
          </Link>
          <Link to="/order" className="btn btn-lav btn-lg">
            <Icon name="check" width={17} height={17} /> Start an order
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
