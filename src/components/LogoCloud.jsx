import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, reveal } from '../anim'
import { Icon } from './Icons'

/*
  Forest-green "how ordering works" band. Sits under the "Inside the
  kitchen" preview. Three numbered steps + a single call to action —
  short, warm, and immediately useful for a first-time visitor.
*/

const steps = [
  {
    n: '01',
    title: 'Pick a plate',
    body: 'Browse this week’s menu — small plate for one, family portion for the flat, or a full event tray.',
  },
  {
    n: '02',
    title: 'Order by 5pm',
    body: 'Send your order through WhatsApp or the form. Nothing is pre-cooked — the pot starts after you confirm.',
  },
  {
    n: '03',
    title: 'Delivered warm',
    body: 'Same-evening delivery across Abuja. It arrives sealed, labelled, and still steaming.',
  },
]

export default function LogoCloud() {
  return (
    <section className="how-band" id="how-it-works">
      <div className="container">
        <motion.div className="how-band-head" variants={stagger} {...reveal}>
          <motion.span className="eyebrow eyebrow-light" variants={fadeUp}>
            <span className="dot" /> How it works
          </motion.span>
          <motion.h2 className="serif" variants={fadeUp}>
            Three steps between craving and dinner.
          </motion.h2>
          <motion.p className="how-band-lead" variants={fadeUp}>
            No apps, no queues, no cold food. Order in the afternoon, eat it hot the same night.
          </motion.p>
        </motion.div>

        <motion.div className="how-steps" variants={stagger} {...reveal}>
          {steps.map((s) => (
            <motion.div key={s.n} className="how-step" variants={fadeUp}>
              <span className="how-step-num">{s.n}</span>
              <h3 className="how-step-title">{s.title}</h3>
              <p className="how-step-body">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="how-band-cta" variants={fadeUp} {...reveal}>
          <Link to="/order" className="btn btn-primary btn-pill">
            Start an order <Icon name="arrow" width={16} height={16} />
          </Link>
          <Link to="/menu" className="how-band-link">
            See the full menu <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
