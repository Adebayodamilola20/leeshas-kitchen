import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, reveal } from '../anim'
import { Icon } from '../components/Icons'
import PageHeader from '../components/PageHeader'

/*
  Contact page — redesigned around a two-column split:
    Left  · Warm intro + big WhatsApp/phone/email cards + kitchen info strip
    Right · Short order-brief form in a cream card
  Followed by a "quick answers" FAQ and a closing WhatsApp CTA.
*/

const channels = [
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    value: '+234 000 000 0000',
    note: 'Fastest way to place a same-day order · 8am – 8pm',
    href: 'https://wa.me/234',
    primary: true,
  },
  {
    key: 'phone',
    label: 'Phone',
    value: '+234 000 000 0000',
    note: 'For trays, events, anything easier to explain out loud',
    href: 'tel:+234',
  },
  {
    key: 'email',
    label: 'Email',
    value: 'hello@leeshaskitchen.com',
    note: 'Invoices, office lunches, press. Replies within a day.',
    href: 'mailto:hello@leeshaskitchen.com',
  },
]

const facts = [
  { title: 'Kitchen hours', body: 'Tuesday – Sunday · 10am – 9pm' },
  { title: 'Order cutoff', body: 'Same-day: 5pm · Trays: 24hrs notice' },
  { title: 'Delivery area', body: 'Wuse · Maitama · Asokoro · Jabi · Gwarinpa · Katampe' },
  { title: 'Reply time', body: 'WhatsApp under 15 min · Email under a day' },
]

const faqs = [
  { q: 'How do I actually order?', a: 'Message us on WhatsApp with what you want, the portion size, and where it’s going. We confirm within 15 minutes.' },
  { q: 'How far ahead do I need to book?', a: 'Same-day plates before 5pm. Family trays and event orders need 24 hours; large events a couple of days.' },
  { q: 'Can you handle diet requests?', a: 'Yes — call out heat level, seed oils, dairy, or shellfish and we cook to it. Ask before you order.' },
  { q: 'Do you deliver yourselves?', a: 'We use our own driver for anything within Abuja and a trusted courier for the outskirts.' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Reach the kitchen."
        sub="WhatsApp is fastest during service hours. Or drop a message below — Leesha reads them herself."
      />

      {/* Split: channels + form */}
      <section className="section contact-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div className="contact-split" variants={stagger} {...reveal}>
            {/* LEFT */}
            <div className="contact-left">
              <motion.div className="contact-intro" variants={fadeUp}>
                <span className="eyebrow"><span className="dot" /> Three ways in</span>
                <h2 className="serif">Pick whichever is easier for you.</h2>
                <p>WhatsApp gets you a person in minutes. Phone works for anything you would rather say out loud. Email is fine for invoices and press.</p>
              </motion.div>

              <div className="contact-channels">
                {channels.map((c) => (
                  <motion.a
                    key={c.key}
                    href={c.href}
                    className={`contact-channel ${c.primary ? 'is-primary' : ''}`}
                    variants={fadeUp}
                  >
                    <div className="contact-channel-head">
                      <span className="contact-channel-tag">{c.label}</span>
                      <span className="contact-channel-arrow" aria-hidden>→</span>
                    </div>
                    <span className="contact-channel-value">{c.value}</span>
                    <span className="contact-channel-note">{c.note}</span>
                  </motion.a>
                ))}
              </div>

              <motion.div className="contact-facts" variants={fadeUp}>
                {facts.map((f) => (
                  <div key={f.title} className="contact-fact">
                    <span className="fact-title">{f.title}</span>
                    <span className="fact-body">{f.body}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — form card */}
            <motion.div className="contact-right" variants={fadeUp}>
              <div className="contact-form-card">
                <span className="eyebrow"><span className="dot" /> Send a brief</span>
                <h3 className="serif">Tell us what you need.</h3>
                <p className="contact-form-lead">Rough details are fine — we come back with a confirmation and the price.</p>

                <form
                  className="contact-form-fields"
                  onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                >
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input id="name" name="name" placeholder="Ada" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone or WhatsApp</label>
                    <input id="phone" name="phone" placeholder="+234 …" required />
                  </div>
                  <div className="field field-wide">
                    <label htmlFor="occasion">What is it for?</label>
                    <select id="occasion" name="occasion" defaultValue="Dinner tonight">
                      <option>Dinner tonight</option>
                      <option>Family Sunday</option>
                      <option>Office lunch</option>
                      <option>Birthday / small event</option>
                      <option>Large event / catering</option>
                    </select>
                  </div>
                  <div className="field field-wide">
                    <label htmlFor="msg">The order</label>
                    <textarea
                      id="msg" name="msg" rows={4}
                      placeholder="A large jollof + peppered chicken for six, delivered to Wuse around 7pm…"
                      required
                    />
                  </div>
                  <div className="field field-wide contact-form-submit">
                    <button className="btn btn-lav btn-lg btn-pill" type="submit">
                      <Icon name="check" width={16} height={16} />
                      {sent ? 'Sent — Leesha will reply shortly' : 'Send the brief'}
                    </button>
                    <a href="https://wa.me/234" className="contact-form-whats">
                      or WhatsApp us instead <span aria-hidden>→</span>
                    </a>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick answers */}
      <section className="section contact-faq-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div className="contact-faq-head" variants={fadeUp} {...reveal}>
            <span className="eyebrow"><span className="dot" /> Quick answers</span>
            <h2 className="serif">Before you message.</h2>
          </motion.div>
          <motion.div className="contact-faq-grid" variants={stagger} {...reveal}>
            {faqs.map((f) => (
              <motion.div key={f.q} className="contact-faq-card" variants={fadeUp}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing WhatsApp CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.a
            href="https://wa.me/234"
            className="contact-close"
            variants={fadeUp} {...reveal}
          >
            <div>
              <span className="eyebrow eyebrow-light"><span className="dot" /> Ready now?</span>
              <h3 className="serif">Message the kitchen on WhatsApp.</h3>
              <p>Under 15 minutes to a confirmation. Same-evening delivery for anything booked before 5pm.</p>
            </div>
            <span className="contact-close-btn">
              Open WhatsApp <Icon name="arrow" width={16} height={16} />
            </span>
          </motion.a>
        </div>
      </section>
    </>
  )
}
