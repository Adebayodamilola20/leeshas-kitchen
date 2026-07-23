import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import { navLinks } from '../data'
import { Icon, BrandLogo } from './Icons'

/*
  Elementis-style navigation:
   · A slim floating navbar. On click of the hamburger, the whole viewport
     is covered by a full-screen dark overlay. Nav links slide up in a big
     serif stack, staggered one after another with a subtle mask reveal.
   · An extras column on the right holds the contact/CTA/socials so the
     menu feels like a landing panel rather than an accordion.
   · Escape closes it. Body scroll is locked while it is open.
*/

const overlayEase = [0.7, 0, 0.2, 1]

const overlayVariants = {
  hidden: { clipPath: 'inset(0% 0% 100% 0%)' },
  show: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.65, ease: overlayEase, when: 'beforeChildren', staggerChildren: 0.06 },
  },
  exit: {
    clipPath: 'inset(100% 0% 0% 0%)',
    transition: { duration: 0.5, ease: overlayEase, when: 'afterChildren', staggerChildren: 0.02, staggerDirection: -1 },
  },
}

const linkRowVariants = {
  hidden: { y: '110%' },
  show:   { y: '0%',   transition: { duration: 0.7, ease: overlayEase } },
  exit:   { y: '110%', transition: { duration: 0.4, ease: overlayEase } },
}

const fadeChild = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: overlayEase } },
  exit:   { opacity: 0, y: 8, transition: { duration: 0.25 } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock scroll + listen for Escape while open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'is-open' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container">
          <div className="nav-inner">
            <Link to="/" className="brand" onClick={close}>
              <span className="brand-mark"><BrandLogo size={30} /></span>
              Leesha’s Kitchen
            </Link>

            <nav className="nav-links">
              {navLinks.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => isActive ? 'is-active' : undefined}
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="nav-right">
              <Link to="/order" className="btn btn-lav btn-pill btn-desktop">
                Order now
              </Link>
              <button
                className={`nav-toggle ${open ? 'is-open' : ''}`}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span className="nav-toggle-bar" />
                <span className="nav-toggle-bar" />
                <span className="nav-toggle-label">{open ? 'Close' : 'Menu'}</span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-screen overlay panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-panel"
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="nav-panel-inner">
              <div className="nav-panel-links">
                {navLinks.map((l, i) => (
                  <div className="nav-panel-line" key={l.label}>
                    <motion.div className="nav-panel-line-inner" variants={linkRowVariants}>
                      <NavLink
                        to={l.to}
                        end={l.to === '/'}
                        onClick={close}
                        className={({ isActive }) => `nav-panel-link ${isActive ? 'is-active' : ''}`}
                      >
                        <span className="nav-panel-num">0{i + 1}</span>
                        <span className="nav-panel-word">{l.label}</span>
                        <span className="nav-panel-arrow" aria-hidden>→</span>
                      </NavLink>
                    </motion.div>
                  </div>
                ))}
              </div>

              <motion.aside className="nav-panel-side" variants={fadeChild}>
                <div className="nav-panel-side-block">
                  <span className="nav-panel-eyebrow">Get in touch</span>
                  <a href="https://wa.me/234" className="nav-panel-contact">WhatsApp the kitchen →</a>
                  <a href="mailto:hello@leeshaskitchen.com" className="nav-panel-contact-sub">hello@leeshaskitchen.com</a>
                </div>
                <div className="nav-panel-side-block">
                  <span className="nav-panel-eyebrow">Kitchen hours</span>
                  <p>Tue – Sun · 10am – 9pm<br />Same-day cutoff at 5pm</p>
                </div>
                <div className="nav-panel-side-block">
                  <Link to="/order" onClick={close} className="btn btn-lav btn-lg btn-pill">
                    <Icon name="check" width={16} height={16} /> Start an order
                  </Link>
                </div>
                <div className="nav-panel-social">
                  <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
                  <a href="https://tiktok.com" aria-label="TikTok">TikTok</a>
                  <a href="https://wa.me/234" aria-label="WhatsApp">WhatsApp</a>
                </div>
              </motion.aside>
            </div>

            <motion.div className="nav-panel-foot" variants={fadeChild}>
              <span>Leesha’s Kitchen · Abuja, Nigeria</span>
              <span>Home-cooked · Made to order · Delivered warm</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
