// Content model for Leesha's Kitchen — a home-cook delivery vendor.
// Meals cooked to order in small or large portions and delivered.

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Order', to: '/order' },
  { label: 'Contact', to: '/contact' },
]

// Words people use to describe Leesha's cooking — used in the LogoCloud marquee.
export const brands = [
  'Home-cooked', 'Made to order', 'Small · Medium · Large',
  'Delivered fresh', 'Family recipes', 'No shortcuts', 'Real spice',
  'From my kitchen to yours', 'By Leesha',
]

export const features = [
  {
    icon: 'sparkles',
    title: 'Cooked to order, never sat under a heat lamp',
    body: 'Every plate is started when you place the order. No batch trays, no leftovers passed off as fresh — it leaves the kitchen minutes before it reaches you.',
  },
  {
    icon: 'brain',
    title: 'Small, medium, or family-size',
    body: 'A plate for one, a bowl for the flatmates, or a full tray for Sunday. Pick the portion; the recipe stays the same.',
  },
  {
    icon: 'bolt',
    title: 'Order by 5pm for same-day delivery',
    body: 'Weekday orders in before 5pm land the same evening. Weekend and tray orders open a day ahead.',
  },
  {
    icon: 'globe',
    title: 'A menu that changes with the week',
    body: 'A short rotating menu — the classics are always on, and Leesha adds two or three specials each week based on what she is loving.',
  },
  {
    icon: 'shield',
    title: 'Real ingredients, honestly listed',
    body: 'No mystery seasonings, no dyes. Allergens and spice level are written next to every dish so you can order without guessing.',
  },
  {
    icon: 'apps',
    title: 'Trays for meetings, birthdays, and family Sundays',
    body: 'Feeding 8 to 30 people? Order a tray or two. Message Leesha the headcount and she will handle the rest.',
  },
]

// Order add-ons — chips shown on the Order page.
export const commands = [
  'Small (1 person)',
  'Medium (2–3)',
  'Large (4–6)',
  'Family tray (8–12)',
  'Extra spice',
  'No pepper',
]

// Signature dishes — pills used on the Menu page.
export const languages = [
  'Jollof rice', 'Fried rice', 'Ofada rice & ayamase', 'Egusi & pounded yam',
  'Efo riro', 'Okra soup', 'Peppered chicken', 'Peppered snail',
  'Grilled tilapia', 'Nkwobi', 'Small chops platter', 'Puff-puff',
  'Chin chin', 'Zobo', 'Chapman', 'Meat pie',
]

export const testimonials = [
  {
    quote:
      'I ordered a family tray for Sunday lunch and everyone kept asking for the recipe. It tasted like my aunt made it.',
    name: 'Amara C.',
    role: 'Sunday regular',
  },
  {
    quote:
      'The peppered chicken and jollof combo has become my Friday ritual. Delivery is always on time and still hot.',
    name: 'David L.',
    role: 'Weekly customer',
  },
  {
    quote:
      'We used Leesha for a work lunch of 20 people. Cleanest packaging I have seen from a home vendor — no leaks, still warm.',
    name: 'Priya S.',
    role: 'Office manager',
  },
  {
    quote:
      'The egusi tastes exactly like home. Portion sizes are honest — the large actually feeds four.',
    name: 'Tomás V.',
    role: 'First-time customer',
  },
]

export const stats = [
  { value: '20+', label: 'dishes on rotation' },
  { value: '4', label: 'portion sizes' },
  { value: '5pm', label: 'same-day cutoff' },
  { value: '4.9★', label: 'customer rating' },
]

// Delivery / order options — replaces the pricing tiers.
export const pricing = [
  {
    name: 'Small plate',
    price: '₦3,500',
    cadence: 'per plate',
    blurb: 'One plate, one person. Perfect for a solo lunch or a quiet evening in.',
    features: [
      'Any dish on the menu',
      'Cooked to order',
      'Sealed container, no leaks',
      'Same-day delivery (order by 5pm)',
    ],
    cta: 'Order a plate',
    featured: false,
  },
  {
    name: 'Family portion',
    price: '₦12,000',
    cadence: 'feeds 4–6',
    blurb: 'A shared bowl big enough for the flat, the family, or Sunday dinner.',
    features: [
      'Choose one main + one side',
      'Cooked fresh the same day',
      'Insulated packaging',
      'Priority delivery slot',
      'Free plantain on orders over ₦15k',
    ],
    cta: 'Order for the table',
    featured: true,
  },
  {
    name: 'Event tray',
    price: 'From ₦45k',
    cadence: 'feeds 12+',
    blurb: 'Full trays for offices, birthdays, and small events. Book a day ahead.',
    features: [
      'Trays for 12, 20, or 30',
      'Custom menu with Leesha',
      'Chafing dishes on request',
      'Delivery + setup available',
      'Invoice-friendly for offices',
    ],
    cta: 'Enquire',
    featured: false,
  },
]

export const footerColumns = [
  {
    title: 'Order',
    links: ['Small plate', 'Family portion', 'Event tray', 'Delivery zones'],
  },
  {
    title: 'The Kitchen',
    links: ['Menu', 'This week’s specials', 'Allergens', 'FAQ'],
  },
  {
    title: 'Events',
    links: ['Office lunches', 'Birthdays', 'Family Sundays', 'Custom trays'],
  },
  {
    title: 'Leesha’s',
    links: ['About', 'Gallery', 'Press', 'Contact'],
  },
]
