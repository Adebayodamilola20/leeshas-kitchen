import { motion } from 'framer-motion'
import { fadeUp, stagger, reveal } from '../anim'
import { pricing, commands } from '../data'
import { Icon } from './../components/Icons'
import PageHeader from '../components/PageHeader'

/*
  Order page — portion options, add-ons, and a simple call-to-action.
*/
export default function Order() {
  return (
    <>
      <PageHeader
        eyebrow="Order"
        title="Small, family, or an event tray"
        sub="Order by 5pm for same-day delivery. Trays and events open a day ahead — message Leesha and she will handle it."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div className="price-grid" variants={stagger} {...reveal}>
            {pricing.map((p) => (
              <motion.div
                key={p.name}
                className={`price-card ${p.featured ? 'featured' : ''}`}
                variants={fadeUp}
              >
                {p.featured && <span className="price-badge">Most ordered</span>}
                <h3>{p.name}</h3>
                <div className="price-amt">
                  <span className="amt">{p.price}</span>
                  <span className="cad">{p.cadence}</span>
                </div>
                <p className="blurb">{p.blurb}</p>
                <ul className="price-features">
                  {p.features.map((f) => (
                    <li key={f}>
                      <span className="tick"><Icon name="check" width={18} height={18} /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`btn ${p.featured ? 'btn-lav' : 'btn-outline'}`}>
                  {p.cta}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.h2 className="serif section-h2" variants={fadeUp} {...reveal}>Portion sizes & add-ons</motion.h2>
          <motion.div className="chips" variants={stagger} {...reveal} style={{ marginTop: 16 }}>
            {commands.map((c) => (
              <motion.span key={c} className="chip" variants={fadeUp}>{c}</motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
