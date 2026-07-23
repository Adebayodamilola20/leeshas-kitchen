import { motion } from 'framer-motion'
import { fadeUp, reveal } from '../anim'

/*
  Side-by-side contrast — "Regular takeout" vs "Leesha's kitchen".

  Left is a small cream card describing what usually goes wrong with
  ordinary delivery, with a slow italic crawl at the bottom.

  Right is a cinematic panel with a real kitchen video behind. The copy is
  pinned to the top of the panel and the scrolling menu of dishes runs
  along the very bottom — the two never overlap.
*/

const REGULAR =
  'reheated batch tray · sat under a lamp · plastic cutlery · portion is a guess · one flavour · sauce dried out · rice went crunchy · '
const LEESHA =
  'small chops · efo riro · signature ofada · yam porridge · shrimp fried rice · peppered snail · grilled fish · Singapore noodles · party trays · '

export default function SpeedCompare() {
  return (
    <section className="section speed">
      <div className="container">
        <motion.div className="speed-head" variants={fadeUp} {...reveal}>
          <span className="eyebrow"><span className="dot" /> The difference</span>
          <h2 className="serif">Two ways your dinner shows up.</h2>
          <p>Most delivery kitchens batch-cook in the morning and reheat all night. Leesha starts the pot after you confirm.</p>
        </motion.div>

        <motion.div className="speed-grid" variants={fadeUp} {...reveal}>
          {/* Regular takeout — cream card */}
          <div className="speed-card">
            <div className="speed-label">Regular takeout</div>
            <div className="speed-wpm serif">Reheated.</div>
            <p className="speed-note">
              Whatever came off the tray in the morning, warmed back up when you order.
            </p>
            <div className="crawl" aria-hidden>
              <div className="crawl-track">
                <span>{REGULAR}</span>
                <span>{REGULAR}</span>
              </div>
            </div>
          </div>

          {/* Leesha's kitchen — cinematic panel with video bg */}
          <div className="speed-scene">
            <video
              className="speed-scene-video"
              src="/videos/kitchen-1.mov"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
            <div className="speed-scene-scrim" aria-hidden />

            <div className="speed-scene-body">
              <span className="speed-label light">Leesha’s kitchen</span>
              <h3 className="speed-wpm serif light">From the pot.</h3>
              <p className="speed-note light">
                Cooked the moment your order lands. Sealed hot, out the door same evening.
              </p>
            </div>

            <div className="speed-scene-strip" aria-hidden>
              <div className="speed-scene-strip-track">
                <span>{LEESHA}</span>
                <span>{LEESHA}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
