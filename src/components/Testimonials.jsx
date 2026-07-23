import { motion } from 'framer-motion'
import { fadeUp, reveal } from '../anim'

/*
  "Guests keep coming back" — dark panel, serif headline with hand-drawn
  green dashes radiating out, and a continuously scrolling marquee of cream
  guest-quote cards.
*/

const letters = [
  {
    quote: 'The rooftop at sunset was cinema. Then the DJ eased in at 10 and nobody wanted to leave. Best Friday I’ve had in Abuja.',
    name: 'Amara Chen',
    role: 'Founder, Bridge Ventures',
    face: '👩🏻‍💼',
  },
  {
    quote: 'The jollof arancini alone is worth the trip. The tamarind margarita is a close second.',
    name: 'Rahul Vohra',
    role: 'Food critic',
    face: '👨🏽‍💼',
  },
  {
    quote: 'We booked the mezzanine for a birthday of 24 and it felt handled — menu, playlist, lighting, cake moment. Zero stress on my side.',
    name: 'Suzanne Xie',
    role: 'Event planner',
    face: '👩🏻',
  },
  {
    quote: 'The dry-aged ribeye reads international. The peppered snail reads exactly like Abuja. That balance is the whole point.',
    name: 'Shashank Vemuri',
    role: 'Regular',
    face: '👨🏾',
  },
  {
    quote: 'I bring every visiting client here on the first night. Nobody has ever left unimpressed.',
    name: 'Rich Pankey',
    role: 'Business host',
    face: '👨🏻‍🦳',
  },
  {
    quote: 'Late-night kitchen, real cocktails, and a view. Half the reason I moved back to Wuse II.',
    name: 'Priya Sundar',
    role: 'Neighbour',
    face: '👩🏽',
  },
]

function Rays() {
  const rays = Array.from({ length: 14 }, (_, i) => {
    const a = (i / 14) * Math.PI * 2
    const r1 = 150 + (i % 3) * 22
    const r2 = r1 + 34 + (i % 4) * 14
    return {
      x1: 250 + Math.cos(a) * r1,
      y1: 160 + Math.sin(a) * r1 * 0.62,
      x2: 250 + Math.cos(a) * r2,
      y2: 160 + Math.sin(a) * r2 * 0.62,
    }
  })
  return (
    <svg className="ll-rays" viewBox="0 0 500 320" aria-hidden>
      {rays.map((r, i) => (
        <line key={i} {...r} stroke="#1e6b4f" strokeWidth="4" strokeLinecap="round" />
      ))}
    </svg>
  )
}

export default function Testimonials() {
  const loop = [...letters, ...letters]
  return (
    <section className="ll" id="letters">
      <div className="ll-head">
        <Rays />
        <motion.h2 className="serif" variants={fadeUp} {...reveal}>
          Guests keep<br />coming back
        </motion.h2>
      </div>

      <div className="ll-marquee" aria-label="What guests say about Checkpoint">
        <div className="ll-track">
          {loop.map((t, i) => (
            <figure className="ll-card" key={i}>
              <span className="ll-avatar" aria-hidden>{t.face}</span>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <strong>{t.name},</strong> {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
