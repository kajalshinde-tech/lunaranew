import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';

export const metadata = {
  title: 'About Us — Lunara',
  description:
    'The story, vision, and mission behind Lunara: connecting people, premium venues, and real-world experiences.',
};
const benefits = [
  [
    '⚡',
    'Lightning-Fast Booking',
    'Reserve your spot in under 60 seconds. No calls, no waiting — just tap and go.',
  ],
  [
    '✳',
    'Exclusive Access',
    'Unlock members-only events, VIP tables, and premium experiences not found anywhere else.',
  ],
  [
    '♡',
    'Curated by Experts',
    'Our nightlife experts handpick every venue to ensure top-tier quality and unforgettable vibes.',
  ],
  [
    '◷',
    '24/7 Concierge',
    'Our dedicated nightlife concierge team is always available to assist with your needs.',
  ],
  [
    '✓',
    'Secure Payments',
    'Bank-grade encryption protects every transaction. Instant refunds, zero hassle.',
  ],
  [
    '↗',
    'Venue Analytics',
    'Partner clubs get real-time insights, booking analytics, and growth tools to supercharge their brand.',
  ],
];
export default function Page() {
  return (
    <PageShell className="creative-home dating-home compact-dating reference-page">
      <main>
        <header className="about-intro-hero" aria-labelledby="about-intro-title">
          <div className="about-intro-copy">
            <span className="cd-eyebrow">
              <span /> A LITTLE ABOUT US
            </span>
            <h1 id="about-intro-title">
              About <em>Lunara.</em>
            </h1>
            <p className="about-intro-lead">
              The people. The places.
              <br />
              The possibilities.
            </p>
            <p className="about-intro-description">
              The story behind the ultimate nightlife platform — bringing people, premium venues,
              and real-world experiences together.
            </p>
            <a className="about-intro-link" href="#story-title">
              Get to know us <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="about-intro-visual">
            <img
              src="/images/generated/rooftop-experience-v1.webp"
              alt="Illustrative scene of two people connecting at a rooftop café"
              width="1100"
              height="733"
              fetchPriority="high"
            />
            <span className="about-intro-spark" aria-hidden="true">
              ✳
            </span>
            <div className="about-intro-note">
              <i className="bi bi-heart" aria-hidden="true" />
              <span>
                A little spark.<strong>A real possibility.</strong>
              </span>
            </div>
          </div>
        </header>
        <section className="ref-story" aria-labelledby="story-title">
          <figure>
            <img
              src="/images/generated/cafe-connection-v1.webp"
              alt="Illustrative scene of a connection over coffee"
              loading="lazy"
            />
            <figcaption>Shared moments. Real possibilities.</figcaption>
          </figure>
          <div>
            <span className="cd-eyebrow">OUR STORY</span>
            <h2 id="story-title">
              Born from the <em>love of the night.</em>
            </h2>
            <p>
              Lunara was born from a simple idea: the nightlife experience shouldn’t start at the
              door — it should start from your phone. We connect party lovers with the hottest
              clubs, premium bars, and exclusive events across India.
            </p>
            <p>
              Our platform empowers venues to reach new audiences and helps you discover, book, and
              experience the best nights of your life — all from one seamless app.
            </p>
            <div className="ref-stats">
              <div>
                <strong>250+</strong>
                <span>Partner venues</span>
              </div>
              <div>
                <strong>50,000+</strong>
                <span>Bookings made</span>
              </div>
              <div>
                <strong>15+</strong>
                <span>Cities</span>
              </div>
            </div>
          </div>
        </section>
        <section className="cd-section ref-values" aria-label="Our vision and mission">
          <article className="ref-panel">
            <span className="cd-eyebrow">WHERE WE’RE GOING</span>
            <h2>Our vision.</h2>
            <p>
              To become the world’s most trusted nightlife platform — where every night out is
              curated, premium, and unforgettable. We envision a future where discovering your next
              great night is as easy as a single tap.
            </p>
          </article>
          <article className="ref-panel">
            <span className="cd-eyebrow">WHY WE’RE HERE</span>
            <h2>Our mission.</h2>
            <p>
              To bridge the gap between nightlife seekers and premium venues through cutting-edge
              technology, seamless booking, and authentic experiences. We help clubs grow their
              brand and give guests the VIP treatment they deserve.
            </p>
          </article>
        </section>
        <section className="cd-section ref-benefits">
          <div className="cd-section-heading">
            <div>
              <span className="cd-eyebrow">EVERY DETAIL, CONSIDERED</span>
              <h2>
                Why choose <em>Lunara?</em>
              </h2>
            </div>
            <p>
              We bring the best of nightlife to your fingertips.
              <br />
              Sleek, fast, and premium.
            </p>
          </div>
          <div className="cd-feature-grid">
            {benefits.map(([icon, title, description]) => (
              <article className="cd-feature cd-lilac" key={title}>
                <span className="cd-feature-icon" aria-hidden="true">
                  {icon}
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="ref-image-cta ref-connections">
          <div>
            <span className="cd-eyebrow">THOUSANDS OF NIGHT OWLS TRUST LUNARA</span>
            <h2>
              Join the <em>Lunara movement.</em>
            </h2>
            <p>Be part of the revolution in nightlife discovery.</p>
            <div className="cd-actions">
              <Link className="cd-button" href="/contact">
                Get started ↗
              </Link>
              <Link className="cd-text-link" href="/booking">
                How it works ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
