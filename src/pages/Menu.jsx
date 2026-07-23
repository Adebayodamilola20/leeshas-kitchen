import { motion } from 'framer-motion'
import { fadeUp, stagger, reveal } from '../anim'
import { languages, features } from '../data'
import { Icon } from './../components/Icons'
import PageHeader from '../components/PageHeader'

/*
  Menu page — the rotating menu of dishes, plus a short read on how
  the kitchen chooses what runs each week.
*/
export default function Menu() {
  return (
    <>
      <PageHeader
        eyebrow="The Menu"
        title="What Leesha is cooking this week"
        sub="A short rotating menu — the everyday classics are always on, and Leesha adds two or three specials each week."
      />

      <section className="section">
        <div className="container">
          <motion.div className="lang-cloud" variants={stagger} {...reveal}>
            {languages.map((l) => (
              <motion.span key={l} className="lang-pill" variants={fadeUp}>{l}</motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div className="section-head" variants={stagger} {...reveal}>
            <motion.h2 className="serif" variants={fadeUp}>How the menu is put together</motion.h2>
          </motion.div>
          <motion.div className="feature-grid" variants={stagger} {...reveal}>
            {features.slice(0, 3).map((f) => (
              <motion.article key={f.title} className="feature-card" variants={fadeUp}>
                <div className="feature-icon"><Icon name={f.icon} width={22} height={22} /></div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
