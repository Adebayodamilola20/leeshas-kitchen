import { motion } from 'framer-motion'

/*
  The signature Wispr Flow hero visual: rambling raw speech (gray, looping in
  from the left) flows into a microphone capsule and comes back out as clean,
  polished text on a black ribbon curving off to the right.

  Built as a single SVG. The gray text and the black ribbon each ride a curved
  <path> via <textPath>. The ribbon "draws in" on load and the mic waveform
  pulses continuously.
*/

const RAW =
  "handle the first part of the project, but I'm not totally sure. also I told the team the the new timeline should be ready by friday, although it's"
const CLEAN =
  "the new timeline should be ready by Friday — although it might slip. There's been a small delay with the vendor."

const rawPath =
  'M -60 250 C 120 150, 250 205, 205 300 C 172 372, 55 360, 92 275 C 118 214, 300 250, 388 322 C 470 388, 560 402, 648 400'
const cleanPath =
  'M 792 400 C 940 402, 1120 372, 1300 292 C 1400 248, 1470 214, 1560 150'

export default function SpeechRibbon() {
  const waveBars = [14, 26, 40, 30, 50, 22, 44, 34, 54, 24, 38, 18]
  return (
    <div className="ribbon-wrap" aria-hidden>
      <svg className="ribbon-svg" viewBox="0 0 1500 470" preserveAspectRatio="xMidYMid meet">
        <defs>
          <path id="rawPath" d={rawPath} />
          <path id="cleanPath" d={cleanPath} />
        </defs>

        {/* black ribbon, drawn in on load */}
        <motion.use
          href="#cleanPath"
          fill="none"
          stroke="#151310"
          strokeWidth="52"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />

        {/* raw gray transcript, crawling toward the mic */}
        <motion.text
          className="ribbon-raw"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <textPath href="#rawPath" startOffset="0%">
            {RAW + ' ' + RAW}
            <animate attributeName="startOffset" from="-100%" to="0%" dur="40s" repeatCount="indefinite" />
          </textPath>
        </motion.text>

        {/* polished text streaming out along the black ribbon */}
        <motion.text
          className="ribbon-clean"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <textPath href="#cleanPath" startOffset="0%">
            {CLEAN + ' ' + CLEAN}
            <animate attributeName="startOffset" from="-100%" to="0%" dur="28s" repeatCount="indefinite" />
          </textPath>
        </motion.text>

        {/* microphone capsule at the junction */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'backOut' }}
        >
          <rect x="648" y="352" width="148" height="96" rx="48" fill="#faf9ec" stroke="#151310" strokeWidth="4" />
          {waveBars.map((h, i) => (
            <motion.rect
              key={i}
              x={668 + i * 9}
              y={400 - h / 2}
              width="4"
              height={h}
              rx="2"
              fill="#151310"
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              animate={{ scaleY: [0.35, 1, 0.35] }}
              transition={{ duration: 0.9 + (i % 4) * 0.16, repeat: Infinity, ease: 'easeInOut', delay: i * 0.05 }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  )
}
