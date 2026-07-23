import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../anim'

/*
  Shared header for the sub-pages. Sits under the fixed navbar and gives
  each page a consistent hero without ballooning into its own huge scene.
*/
export default function PageHeader({ eyebrow, title, sub }) {
  return (
    <section className="page-header">
      <motion.div className="container" variants={stagger} initial="hidden" animate="show">
        {eyebrow && (
          <motion.span className="eyebrow" variants={fadeUp}>
            <span className="dot" /> {eyebrow}
          </motion.span>
        )}
        <motion.h1 className="serif" variants={fadeUp}>{title}</motion.h1>
        {sub && <motion.p variants={fadeUp}>{sub}</motion.p>}
      </motion.div>
    </section>
  )
}
