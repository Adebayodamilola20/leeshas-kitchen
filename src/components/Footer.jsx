import { Link } from 'react-router-dom'
import { footerColumns } from '../data'
import { BrandLogo } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-mark"><BrandLogo size={30} /></span>
              Leesha’s Kitchen
            </Link>
            <p>
              Home-cooked food, made to order and delivered. Small plates for
              one, family portions for the flat, and trays for the whole room.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                <a key={l} href="#">{l}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Leesha’s Kitchen · Home-cook delivery</span>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="TikTok">♪</a>
            <a href="#" aria-label="WhatsApp">✆</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
