import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, reveal } from '../anim'
import { Icon } from './Icons'

/*
  Dark "Inside the kitchen" panel. Small and horizontal:
  short copy on the left, a staggered trio of real dish thumbnails on the
  right, and a "See gallery" button routing to /gallery.
*/

const previewDishes = [
  { src: '/dishes/dish-5.jpg', label: 'Shrimp fried rice' },
  { src: '/dishes/dish-2.jpg', label: 'Efo riro' },
  { src: '/dishes/dish-1.jpg', label: 'Small chops platter' },
]

export default function AppsSection() {
  return (
    <section className="apps apps-compact" id="inside-kitchen">
      <div className="apps-inner container">
        <div className="apps-grid">
          <motion.div className="apps-copy" variants={stagger} {...reveal}>
            <motion.span className="eyebrow eyebrow-light" variants={fadeUp}>
              <span className="dot" /> Inside the kitchen
            </motion.span>
            <motion.h2 className="serif" variants={fadeUp}>A quick look at what leaves the pot</motion.h2>
            <motion.p variants={fadeUp}>
              A few of this week’s plates. The full gallery has trays, pots,
              and finished orders — see the rest whenever you like.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/gallery" className="btn btn-watch btn-pill">
                See gallery <Icon name="arrow" width={16} height={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div className="dish-preview" variants={stagger} {...reveal}>
            {previewDishes.map((d, i) => (
              <motion.figure
                key={d.src}
                className={`dish-thumb dish-thumb-${i}`}
                variants={fadeUp}
              >
                <div className="dish-swatch">
                  <img src={d.src} alt={d.label} loading="lazy" />
                </div>
                <figcaption>{d.label}</figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
