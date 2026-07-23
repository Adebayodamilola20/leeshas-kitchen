import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, reveal } from '../anim'
import { testimonials, stats } from '../data'
import { Icon } from '../components/Icons'
import PageHeader from '../components/PageHeader'

/*
  About page — a richer story of Leesha and the kitchen. Structure:
    1. PageHeader (eyebrow + title + sub)
    2. Story split — big photo left, lead + supporting paragraphs right
    3. Kitchen-at-work band with a real video background
    4. Principles — four values in a card grid
    5. Numbers — stat strip
    6. Photo strip — a horizontal peek at recent plates
    7. Testimonials
    8. Closing CTA card
*/

const principles = [
  {
    icon: 'sparkles',
    title: 'One pot at a time',
    body: 'Every order is cooked from scratch after you confirm. No holding trays, no reheat, no cutting corners.',
  },
  {
    icon: 'apps',
    title: 'Portion-honest',
    body: 'Small feeds one. Family portions really feed a family. Trays are counted, not eyeballed.',
  },
  {
    icon: 'bolt',
    title: 'A short menu',
    body: 'A rotating shortlist. Five to six plates each week — the ones Leesha can nail every single time.',
  },
  {
    icon: 'shield',
    title: 'Real ingredients',
    body: 'Fresh peppers, real stock, palm oil from a supplier we know. Nothing bought to hit a lower price.',
  },
]

const stripPhotos = [
  '/dishes/dish-1.jpg',
  '/dishes/dish-3.jpg',
  '/dishes/dish-10.jpg',
  '/dishes/dish-6.jpg',
  '/dishes/dish-12.jpg',
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A home kitchen, run like a proper one."
        sub="Leesha cooks for people the way she cooks for her own table — one pot at a time, only when someone is waiting for it."
      />

      {/* Story split */}
      <section className="section about-story-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div className="about-story-grid" variants={stagger} {...reveal}>
            <motion.div className="about-story-photo" variants={fadeUp}>
              <img src="/dishes/dish-10.jpg" alt="Peppered chicken over jollof rice" />
              <div className="about-story-tag">
                <span className="tag-top">On the menu this week</span>
                <span className="tag-bot">Peppered chicken jollof</span>
              </div>
            </motion.div>
            <div className="about-story-copy">
              <motion.p className="about-lead" variants={fadeUp}>
                It started with friends asking for one more plate to take home.
              </motion.p>
              <motion.p variants={fadeUp}>
                Leesha has been cooking her whole life — she just didn’t plan on it becoming a business. It began as extra portions for people who kept saying “can I take some?” after dinner. The list grew, an insulated bag showed up, and one day it was a proper kitchen.
              </motion.p>
              <motion.p variants={fadeUp}>
                Today there is no dining room and no walk-in trade. There is a kitchen, a short rotating menu, and a handful of insulated bags on their way to homes across the city each evening.
              </motion.p>
              <motion.div className="about-story-signature" variants={fadeUp}>
                <span className="sig-name serif">— Leesha</span>
                <span className="sig-role">Head cook · Owner</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kitchen at work — video band */}
      <section className="about-work">
        <video
          className="about-work-video"
          src="/videos/kitchen-3.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        <div className="about-work-scrim" aria-hidden />
        <motion.div className="about-work-inner container" variants={stagger} {...reveal}>
          <motion.span className="eyebrow eyebrow-light" variants={fadeUp}>
            <span className="dot" /> Inside the kitchen
          </motion.span>
          <motion.h2 className="serif" variants={fadeUp}>
            Cooked to order. Never before.
          </motion.h2>
          <motion.p variants={fadeUp}>
            The pot starts the moment your order is confirmed. Every plate that
            leaves the kitchen has been made that same day, for a specific
            person, in the portion they asked for.
          </motion.p>
        </motion.div>
      </section>

      {/* Principles */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div className="about-principles-head" variants={fadeUp} {...reveal}>
            <span className="eyebrow"><span className="dot" /> What we hold to</span>
            <h2 className="serif">Four things we don’t bend on.</h2>
          </motion.div>
          <motion.div className="about-principles" variants={stagger} {...reveal}>
            {principles.map((p) => (
              <motion.article key={p.title} className="about-principle" variants={fadeUp}>
                <div className="about-principle-icon">
                  <Icon name={p.icon} width={22} height={22} />
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section about-stats-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div className="about-stats" variants={stagger} {...reveal}>
            {stats.map((s) => (
              <motion.div key={s.label} className="about-stat" variants={fadeUp}>
                <span className="about-stat-value serif">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="about-strip" aria-hidden>
        <div className="about-strip-track">
          {[...stripPhotos, ...stripPhotos].map((src, i) => (
            <div className="about-strip-photo" key={i}>
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.h2 className="serif section-h2" variants={fadeUp} {...reveal}>
            What regulars say
          </motion.h2>
          <motion.div className="tst-grid" variants={stagger} {...reveal}>
            {testimonials.map((t) => (
              <motion.figure key={t.name} className="tst-card" variants={fadeUp}>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption><strong>{t.name}</strong> · {t.role}</figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div className="about-close" variants={stagger} {...reveal}>
            <motion.h3 className="serif" variants={fadeUp}>Come eat.</motion.h3>
            <motion.p variants={fadeUp}>
              A short menu, a real cook, a bag on its way to your door before dinner.
            </motion.p>
            <motion.div className="about-close-cta" variants={fadeUp}>
              <Link to="/menu" className="btn btn-lav btn-lg btn-pill">
                See this week’s menu <Icon name="arrow" width={16} height={16} />
              </Link>
              <Link to="/order" className="btn btn-outline btn-lg btn-pill">
                Start an order
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
