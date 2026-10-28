import Link from 'next/link';
import Brand from './Brand';
export default function Footer() {
  return (
    <footer className="creative-footer">
      <Brand />
      <p>A little spark. A real connection. Your kind of people.</p>
      <div className="footer-contact">
        <a href="mailto:support@lunara.buzz">
          <i className="bi bi-envelope" aria-hidden="true" />
          support@lunara.buzz
        </a>
        <a href="tel:+917823817313">
          <i className="bi bi-telephone" aria-hidden="true" />
          +91 78238 17313
        </a>
      </div>
      <div className="footer-downloads">
        <div className="footer-download-copy">
          <span className="dating-kicker">A LITTLE SPARK, WHEREVER YOU GO</span>
          <h2>
            Take Lunara <em>with you.</em>
          </h2>
          <p>Get in touch for app download details.</p>
        </div>
        <div className="footer-store-badges">
          <Link href="/contact" aria-label="Ask about downloading Lunara for iPhone">
            <img
              src="/images/badges/app-store.svg"
              alt="Download on the App Store"
              width="156"
              height="52"
              loading="lazy"
            />
          </Link>
          <Link href="/contact" aria-label="Ask about downloading Lunara for Android">
            <img
              src="/images/badges/google-play.svg"
              alt="Get it on Google Play"
              width="174"
              height="52"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
      <div>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/partners">Partners</Link>
        <Link href="/booking">Booking</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-conditions">Terms &amp; Conditions</Link>
        <Link href="/community-guidelines">Community Guidelines</Link>
      </div>
      <small>
        © {new Date().getFullYear()} Lunara. All rights reserved. Designed by{' '}
        <a href="https://micraft.co.in/" target="_blank" rel="noopener noreferrer">
          micraftsolutions
        </a>
        . 18+
      </small>
    </footer>
  );
}
