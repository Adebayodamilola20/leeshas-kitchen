import Hero from '../components/Hero'
import FoodShowcase from '../components/FoodShowcase'
import ScrollMarquee from '../components/ScrollMarquee'
import AppsSection from '../components/AppsSection'
import FourX from '../components/FourX'
import SpeedCompare from '../components/SpeedCompare'
import PersonaSection from '../components/PersonaSection'
import Features from '../components/Features'
import CommandMode from '../components/CommandMode'
import Languages from '../components/Languages'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'
import PreviewGrid from '../components/PreviewGrid'

// Marquee content — repeated food-mantra items rendered as small pill tags
// with a hollow-diamond divider between them. Smaller and calmer than the
// old giant-serif treatment.
function KitchenMantra({ tone = 'dark' }) {
  const items = [
    { icon: '◔', label: 'Cooked to order' }, // pot / clock feel
    { icon: '✻', label: 'Real, fresh ingredients' },
    { icon: '◆', label: 'Small · Family · Event' },
    { icon: '☀', label: 'Same-evening delivery' },
    { icon: '❤', label: 'From Leesha’s pot' },
    { icon: '✿', label: 'Cooked in Abuja' },
  ]
  const loop = [...items, ...items]
  return (
    <>
      {loop.map((t, i) => (
        <span key={i} className={`m-tag m-tag-${tone}`}>
          <span className="m-glyph" aria-hidden>{t.icon}</span>
          <span className="m-label">{t.label}</span>
        </span>
      ))}
    </>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <FoodShowcase />

      <div className="marquee-band">
        <ScrollMarquee factor={0.14}>
          <KitchenMantra tone="dark" />
        </ScrollMarquee>
      </div>

      <PreviewGrid />
      <AppsSection />
      <FourX />

      <div className="marquee-band cream">
        <ScrollMarquee factor={0.12}>
          <KitchenMantra tone="cream" />
        </ScrollMarquee>
      </div>

      <SpeedCompare />
      <Features />
      <PersonaSection />
      <CommandMode />
      <Languages />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  )
}
