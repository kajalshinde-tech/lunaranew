import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
export const metadata = {
  title: 'Our Partners — Lunara',
  description:
    'Explore Lunara partner clubs and lounges in Pune and Mumbai, or join the venue network.',
};
const venues = [
  ['Spice Factory', 'Pune, Hinjewadi', 'Bar & Kitchen', 'spice_factory'],
  ['Cherry', 'Pune, Hinjewadi', 'Lounge & Nightclub', 'cherry'],
  ['Penthouze', 'Pune, KP', 'Rooftop Lounge', 'penthouze'],
  ['Waters', 'Pune, Mundhwa', 'Bar & Grill', 'waters'],
  ['Dragonfly', 'Mumbai, Sahar', 'Luxury Lounge', 'dragonfly'],
  ['Tryst', 'Mumbai, Parel', 'Nightclub', 'tryst'],
  ['Public Q', 'Pune, Hinjewadi', 'Gastro Pub', 'public_q'],
  ['Thikana', 'Pune, Hinjewadi', 'Lounge & Bar', 'thikana'],
];
export default function Page() {
  return (
    <PageShell className="creative-home dating-home compact-dating reference-page">
      <main>
        <header className="ref-heading ref-safety-heading">
          <div>
            <Link className="cd-text-link" href="/">
              Home <span>/ Partners</span>
            </Link>
            <span className="cd-eyebrow">GOOD PLACES. GREAT POSSIBILITIES.</span>
            <h1>
              Our places.
              <br />
              <em>Your next plan.</em>
            </h1>
            <p>Premium venues that trust Lunara for bookings and growth.</p>
            <a className="cd-text-link" href="#partner-venues">
              Meet our partners ↓
            </a>
          </div>
          <figure>
            <img
              src="/images/generated/partners-welcome-v1.webp"
              alt="Illustrative scene of a venue host welcoming guests to a rooftop lounge"
              fetchPriority="high"
            />
          </figure>
        </header>
        <section className="cd-section" id="partner-venues">
          <div className="cd-section-heading">
            <div>
              <span className="cd-eyebrow">OUR PARTNER VENUES</span>
              <h2>
                Find your kind <em>of place.</em>
              </h2>
            </div>
            <p>
              Premium clubs and lounges in Pune and Mumbai.
              <br />
              Trusted and verified by Lunara.
            </p>
          </div>
          <div className="partner-grid">
            {venues.map(([name, location, category, image]) => (
              <article className="partner-venue" key={name}>
                <div className="partner-logo">
                  <img src={`/images/partners/${image}.png`} alt={`${name} venue`} loading="lazy" />
                </div>
                <div className="partner-venue-copy">
                  <span className="cd-eyebrow">{category}</span>
                  <h3>{name}</h3>
                  <p>
                    <span aria-hidden="true">↗</span> {location}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="partner-more">
            <p>More partner venues coming soon.</p>
            <Link className="cd-text-link" href="/contact">
              Apply to join our network ↗
            </Link>
          </div>
        </section>
        <section className="ref-image-cta ref-connections">
          <div>
            <span className="cd-eyebrow">GROW WITH LUNARA</span>
            <h2>
              Become a <em>Lunara partner.</em>
            </h2>
            <p>
              Join the fastest-growing nightlife network. List your club or bar on Lunara and get
              access to thousands of premium customers, powerful booking tools, and real-time
              analytics.
            </p>
            <div className="cd-actions">
              <Link className="cd-button" href="/contact">
                Apply now ↗
              </Link>
              <Link className="cd-text-link" href="/about">
                Learn more ↗
              </Link>
            </div>
          </div>
        </section>
        <section className="partner-benefits" aria-label="Partnership benefits">
          {[
            'Free onboarding',
            'Real-time dashboard',
            'Dedicated support',
            'Marketing exposure',
            'Revenue analytics',
            'Zero setup fees',
          ].map((benefit) => (
            <span key={benefit}>
              <b aria-hidden="true">✓</b>
              {benefit}
            </span>
          ))}
        </section>
        <section className="cd-trust partner-contact">
          <span className="cd-trust-icon" aria-hidden="true">
            ↗
          </span>
          <div>
            <span className="cd-eyebrow">LUNARA OFFICE CONTACT NUMBER</span>
            <h2>Let’s build something together.</h2>
            <p>Are you a venue looking to partner with us? Give us a call directly.</p>
          </div>
          <a className="cd-button" href="tel:+917823817313">
            +91 78238 17313 ↗
          </a>
        </section>
        <section className="cd-section">
          <Link className="cd-text-link" href="/booking">
            See how booking and matching work ↗
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
