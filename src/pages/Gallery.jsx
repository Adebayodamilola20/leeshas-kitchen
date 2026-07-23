import { useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import { Link } from 'react-router-dom'
import useIsMobile from '../hooks/useIsMobile'
import useMaskImage from '../hooks/useMaskImage'
import { Icon } from '../components/Icons'

/*
  Gallery — Elementis "Destinations" pattern, second pass.

  The new dish is placed on the BOTTOM layer immediately (so the meta and
  the visible image are always in sync), and the OLD dish is painted on top
  and slowly strip-masked AWAY (progress 1 → 0). Result: the moment you
  click "02", the meta reads "02" and dish 02 is what you'll increasingly
  see through the disappearing dish 01.

  Auto-advance every 6s. Transition is 1.6s with a slow, soft ease.
*/

const shots = [
  { src: '/dishes/dish-1.jpg',  name: 'Small chops',            subtitle: 'Party trays',       body: 'Puff-puff, chin chin, spring rolls, gizzard, samosa — the trays that keep a room full.' },
  { src: '/dishes/dish-2.jpg',  name: 'Efo riro',               subtitle: 'Sunday soup',       body: 'A deep red pot of vegetable soup with assorted meats, cooked low so every leaf keeps its colour.' },
  { src: '/dishes/dish-3.jpg',  name: 'Yam porridge',           subtitle: 'Warm and generous', body: 'Cubed yam simmered in a pepper base with grilled fish and greens.' },
  { src: '/dishes/dish-4.jpg',  name: 'Ofada',                  subtitle: 'The house special', body: 'Ofada rice with the assorted ayamase, packed by the container.' },
  { src: '/dishes/dish-5.jpg',  name: 'Shrimp fried rice',      subtitle: 'Wok-fresh',         body: 'Long-grain fried rice with big shrimp, egg, and a hit of soy.' },
  { src: '/dishes/dish-6.jpg',  name: 'Peppered snail',         subtitle: 'For the brave',     body: 'Slow-simmered snail in a proper pepper sauce, with fried plantain.' },
  { src: '/dishes/dish-9.jpg',  name: 'Bee hoon',               subtitle: 'Party bowl',        body: 'Thin rice noodles tossed with sweet carrots, corn, and scallions.' },
  { src: '/dishes/dish-7.jpg',  name: 'Peppered fish',          subtitle: 'Twin portion',      body: 'Whole grilled fish under a fresh scotch-bonnet marinade, with plantain and slaw.' },
  { src: '/dishes/dish-10.jpg', name: 'Chicken jollof',         subtitle: 'Everyday winner',   body: 'Fried peppered chicken piled over party-style jollof with peppers and sweetcorn.' },
  { src: '/dishes/dish-8.jpg',  name: 'Singapore noodles',      subtitle: 'Party tray',        body: 'Curry-tinged rice noodles with prawns and vegetables — plated in party trays.' },
  { src: '/dishes/dish-11.jpg', name: 'Coleslaw',               subtitle: 'Fresh, always',     body: 'Carrot and sweetcorn coleslaw dressed lightly — the side everyone quietly finishes.' },
  { src: '/dishes/dish-12.jpg', name: 'Pounded yam trays',      subtitle: 'Packed to travel',  body: 'Pounded yam packs with efo riro and coconut rice, sealed for the drive home.' },
]

const AUTO_MS = 5000
// Shorter total time, softer per-band motion — the cut still reads but
// doesn't sit on screen for a full second and a half.
const TRANSITION_S = 0.95

export default function Gallery() {
  const isMobile = useIsMobile()
  const [index, setIndex] = useState(0)
  // The previous index is the OLD image that fades out via strip mask on
  // top of the new image. `null` when idle.
  const [previous, setPrevious] = useState(null)

  // Mask progress runs 1 → 0 on each transition (fully-visible OLD →
  // fully-hidden OLD, revealing the NEW beneath).
  const progress = useMotionValue(1)
  // Fewer, softer bands so each cut fades rather than snaps — smoother
  // and slightly slower feel per-band even though total time is shorter.
  const maskImage = useMaskImage(progress, isMobile, { divisions: 14, gap: 0.8, vh: 100 })
  const timerRef = useRef(null)
  const prevIndexRef = useRef(0)

  // Auto-advance. Resets whenever `index` changes.
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % shots.length)
    }, AUTO_MS)
    return () => clearTimeout(timerRef.current)
  }, [index])

  useEffect(() => {
    if (index === prevIndexRef.current) return
    setPrevious(prevIndexRef.current)
    prevIndexRef.current = index
    progress.set(1)
    const controls = animate(progress, 0, {
      duration: TRANSITION_S,
      ease: [0.6, 0, 0.15, 1], // slow, soft — no hard cut
      onComplete: () => setPrevious(null),
    })
    return () => controls.stop()
  }, [index, progress])

  const total = String(shots.length).padStart(2, '0')
  const num = String(index + 1).padStart(2, '0')
  const next = () => setIndex((i) => (i + 1) % shots.length)
  const prev = () => setIndex((i) => (i - 1 + shots.length) % shots.length)
  const jump = (i) => { if (i !== index) setIndex(i) }

  const current = shots[index]

  return (
    <section className="destgal" aria-label="Kitchen gallery">
      {/* Photo stack — BOTTOM is the current dish, TOP is the outgoing one
          being stripped away. Both ken-burns zoom slowly. */}
      <div className="destgal-photo">
        <motion.img
          key={`u-${index}`}
          src={current.src}
          alt=""
          className="destgal-img"
          initial={{ scale: 1.04 }}
          animate={{ scale: 1.12 }}
          transition={{ duration: (AUTO_MS + TRANSITION_S * 1000) / 1000, ease: 'linear' }}
        />
        {previous !== null && (
          <motion.div
            className="destgal-img destgal-img-over"
            style={{ maskImage, WebkitMaskImage: maskImage }}
          >
            <motion.img
              key={`o-${previous}`}
              src={shots[previous].src}
              alt=""
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: TRANSITION_S * 1.2, ease: 'linear' }}
            />
          </motion.div>
        )}
        <div className="destgal-shade" aria-hidden />
      </div>

      {/* Top-right small badge */}
      <div className="destgal-tag">Explore</div>

      {/* Centered stack — dish name sits directly on top of the meta line */}
      <div className="destgal-center">
        <motion.h1
          key={`t-${current.src}`}
          className="serif destgal-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {current.name}
        </motion.h1>

        <div className="destgal-meta-line" aria-hidden />

        <div className="destgal-meta-row">
          <span className="destgal-crumb">
            <span className="destgal-crumb-icon" aria-hidden>≡</span> Explore Dishes
          </span>
          <motion.span
            key={`s-${current.src}`}
            className="destgal-subtitle"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {current.subtitle}
          </motion.span>
          <span className="destgal-count">
            <span className="n">{num}</span>
            <span className="s">—</span>
            <span className="t">{total}</span>
          </span>
        </div>
      </div>

      {/* Bottom-left description */}
      <motion.div
        key={`b-${current.src}`}
        className="destgal-desc"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>{current.body}</p>
        <div className="destgal-desc-cta">
          <Link to="/order" className="destgal-order">
            Order this plate <Icon name="arrow" width={14} height={14} />
          </Link>
        </div>
      </motion.div>

      {/* Bottom-right thumbnail rail + prev/next */}
      <div className="destgal-rail">
        <button className="destgal-nav" onClick={prev} aria-label="Previous dish">
          <span aria-hidden>←</span>
        </button>
        <div className="destgal-thumbs">
          {shots.map((s, i) => (
            <button
              key={s.src}
              className={`destgal-thumb ${i === index ? 'is-active' : ''}`}
              onClick={() => jump(i)}
              aria-label={`Show ${s.name}`}
            >
              <span className="destgal-thumb-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="destgal-thumb-photo">
                <img src={s.src} alt="" loading="lazy" />
                <span className="destgal-thumb-bar" aria-hidden>
                  <span className="destgal-thumb-fill" />
                </span>
              </span>
            </button>
          ))}
        </div>
        <button className="destgal-nav" onClick={next} aria-label="Next dish">
          <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  )
}
