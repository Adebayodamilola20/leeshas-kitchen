import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionTemplate,
  useSpring,
  cubicBezier,
} from 'framer-motion'
import useIsMobile from '../hooks/useIsMobile'
import useMaskImage from '../hooks/useMaskImage'
import { Icon } from './Icons'

/*
  Scrollytelling food showcase — direct port of the Elementis "Innovation"
  pattern with two synced layers of motion:

  1) BACKGROUND — a tall (400vh) wrapper is scrolled through. Inside, a sticky
     pane holds four dish photos. Each is masked with a 28-band linear-gradient
     that reveals horizontal strips one after another as the parent scroll
     crosses that dish's slice. The parent scroll progress is fed through a
     spring first, so the reveal feels buttery instead of frame-locked.

  2) INNER CARD IMAGE — a smaller image inside the center card. This one uses
     a simple top→bottom clip-path so the next dish slides down over the
     current one, on its own transition curve.

  The center-card title/subtitle/body use per-line mask-slide reveals.
*/

const dishes = [
  {
    number: '01',
    title: 'Small Chops Platter',
    subtitle: 'For the whole room',
    body: 'Puff-puff, chin chin, samosa, spring rolls, peppered gizzard, and salad — the party trays that keep a room full and happy.',
    src: '/dishes/dish-1.jpg',
  },
  {
    number: '02',
    title: 'Efo Riro',
    subtitle: 'Sunday, delivered',
    body: 'A deep, red-hot pot of vegetable soup with assorted meats, cooked low so the leaves keep every bit of colour.',
    src: '/dishes/dish-2.jpg',
  },
  {
    number: '03',
    title: 'Yam Porridge',
    subtitle: 'Warm and generous',
    body: 'Cubed yam simmered in a pepper base with grilled fish and greens — one bowl that eats like the whole meal.',
    src: '/dishes/dish-3.jpg',
  },
  {
    number: '04',
    title: 'Signature Ofada',
    subtitle: 'The house special',
    body: 'Ofada rice with the assorted ayamase, packed by the container. Small for one, family portion for the flat.',
    src: '/dishes/dish-4.jpg',
  },
]

// One full-viewport masked background layer. Its `localScrollYProgress`
// (the parent scroll rescaled to this dish's slice) is fed into the strip
// mask, plus a small counter-scale so the image "breathes" as it reveals.
function BackgroundLayer({ index, total, scrollYProgress, dish, isMobile }) {
  const step = 1 / total
  const localScrollYProgress = useTransform(
    scrollYProgress,
    [index * step, (index + 1) * step],
    [0, 1],
    { ease: cubicBezier(0, 0, 1, 1) },
  )
  const maskImage = useMaskImage(localScrollYProgress, isMobile)
  const scaleProgress = useTransform(
    scrollYProgress,
    [(index - 1) * step, (index + 1) * step],
    [1.08, 1],
  )

  return (
    <motion.div
      className="showcase-layer"
      style={{
        zIndex: -index,
        maskImage,
        WebkitMaskImage: maskImage,
        scale: scaleProgress,
      }}
    >
      <img src={dish.src} alt={dish.title} className="showcase-photo" />
      <div className="showcase-layer-shade" />
    </motion.div>
  )
}

// One inner-card thumbnail. Clip-path animates bottom inset from 0% → 100%
// across this dish's slice, so as we scroll, the next image slides "down"
// over the previous one at the bottom of the stack.
function CardImage({ index, total, scrollYProgress, dish }) {
  const step = 1 / total
  const bottom = useTransform(
    scrollYProgress,
    [index * step, (index + 1) * step],
    ['0%', '100%'],
  )
  const scale = useTransform(
    scrollYProgress,
    [(index - 1) * step, (index + 1) * step],
    [1.0, 1.06],
  )
  const clipPath = useMotionTemplate`inset(0px 0px ${bottom} 0px)`

  return (
    <motion.div
      className="showcase-card-image"
      style={{ clipPath, zIndex: total - index, scale }}
    >
      <img src={dish.src} alt="" />
    </motion.div>
  )
}

export default function FoodShowcase() {
  const isMobile = useIsMobile()
  const ref = useRef(null)
  const [state, setState] = useState(0)

  const { scrollYProgress: rawProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Smooth the scroll signal — this is what makes the motion feel "buttery"
  // instead of following every wheel-tick.
  const scrollYProgress = useSpring(rawProgress, {
    mass: 0.35,
    damping: 30,
    stiffness: 140,
    restDelta: 0.001,
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(dishes.length - 1, Math.max(0, Math.floor(latest * dishes.length)))
    if (idx !== state) setState(idx)
  })

  const active = dishes[state]

  return (
    <section
      ref={ref}
      className="showcase"
      style={{ height: `${dishes.length * 100}vh` }}
      aria-label="What Leesha is cooking"
    >
      <div className="showcase-pin">
        {/* Only render current + next full-screen backgrounds (Elementis). */}
        {Array.from({ length: 2 }, (_, i) => state + i)
          .filter((i) => i < dishes.length)
          .map((validIndex) => (
            <BackgroundLayer
              key={`bg-${validIndex}`}
              index={validIndex}
              total={dishes.length}
              scrollYProgress={scrollYProgress}
              dish={dishes[validIndex]}
              isMobile={isMobile}
            />
          ))}

        <div className="showcase-overlay">
          <span className="showcase-eyebrow">Leesha’s Kitchen · This week</span>

          <div className="showcase-card">
            <div className="showcase-count">
              <span className="num">{active.number}</span>
              <span className="sep">—</span>
              <span className="total">0{dishes.length}</span>
            </div>

            <div className="showcase-card-image-frame">
              {dishes.map((d, i) => (
                <CardImage
                  key={`ci-${i}`}
                  index={i}
                  total={dishes.length}
                  scrollYProgress={scrollYProgress}
                  dish={d}
                />
              ))}
            </div>

            <motion.h3
              key={`t-${state}`}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: [0.24, 0.43, 0.15, 0.97] }}
              className="serif showcase-title"
            >
              {active.title}
            </motion.h3>

            <motion.p
              key={`s-${state}`}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: [0.24, 0.43, 0.15, 0.97], delay: 0.06 }}
              className="showcase-sub"
            >
              {active.subtitle}
            </motion.p>

            <motion.p
              key={`b-${state}`}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: [0.24, 0.43, 0.15, 0.97], delay: 0.14 }}
              className="showcase-body"
            >
              {active.body}
            </motion.p>

            <div className="showcase-dots">
              {dishes.map((_, i) => (
                <span key={i} className={`dot ${i === state ? 'is-active' : ''}`} />
              ))}
            </div>

            <Link to="/gallery" className="showcase-card-cta">
              View full gallery <Icon name="arrow" width={14} height={14} />
            </Link>
          </div>

          <span className="showcase-hint">( Keep scrolling )</span>
        </div>
      </div>
    </section>
  )
}
