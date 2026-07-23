import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, reveal } from '../anim'
import { Icon } from './Icons'

/*
  Home-page preview grid. One card per major page. Each card links to its
  full page instead of unrolling all the content on the home route.
*/

const cards = [
  {
    to: '/menu',
    tag: 'The Menu',
    title: 'What Leesha is cooking this week',
    body: 'The rotating menu — the everyday classics plus two or three specials she is loving right now.',
    icon: 'sparkles',
    accent: '#7ee0b0',
  },
  {
    to: '/gallery',
    tag: 'Gallery',
    title: 'Plates, pots, and finished trays',
    body: 'A look at what leaves the kitchen — dishes, portions, and past events.',
    icon: 'apps',
    accent: '#f4b25a',
  },
  {
    to: '/about',
    tag: 'About',
    title: 'The person behind the pot',
    body: 'Who Leesha is, how the kitchen runs, and why every plate is cooked to order.',
    icon: 'brain',
    accent: '#e8623a',
  },
  {
    to: '/order',
    tag: 'Order',
    title: 'Small, family, or an event tray',
    body: 'Portions honestly sized. Order by 5pm for same-day delivery; trays a day ahead.',
    icon: 'bolt',
    accent: '#c04b2b',
  },
  {
    to: '/contact',
    tag: 'Contact',
    title: 'Reach the kitchen',
    body: 'WhatsApp, phone, or a short message form — Leesha reads them herself.',
    icon: 'shield',
    accent: '#7db4d8',
  },
]

export default function PreviewGrid() {
  return (
    <section className="section previews">
      <div className="container">
        <motion.div className="section-head" variants={stagger} {...reveal}>
          <motion.span className="eyebrow" variants={fadeUp}>
            <span className="dot" /> Have a look around
          </motion.span>
          <motion.h2 className="serif" variants={fadeUp}>
            Everything you need to order — in one place
          </motion.h2>
        </motion.div>

        <motion.div className="preview-grid" variants={stagger} {...reveal}>
          {cards.map((c) => (
            <motion.article key={c.to} className="preview-card" variants={fadeUp}>
              <div className="preview-icon" style={{ background: c.accent }}>
                <Icon name={c.icon} width={22} height={22} />
              </div>
              <span className="preview-tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <Link to={c.to} className="preview-link">
                View more <Icon name="arrow" width={16} height={16} />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
