import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
export const metadata = {
  title: 'Booking & Matching — Lunara',
  description:
    'Discover venues, plan outings, control your privacy, and turn online matches into real meetups with Lunara.',
};
const modes = [
  {
    letter: 'A',
    title: 'Full Public Visibility',
    label: 'High tracking risk',
    tone: 'public',
    text: 'The venue and exact time are visible to everyone. Not recommended for solo outings.',
  },
  {
    letter: 'B',
    title: 'Limited Public Discovery',
    label: 'Highly recommended',
    tone: 'limited',
    text: 'Only the general area and timeframe are shown. Exact venue details remain hidden until you personally approve a match request.',
  },
  {
    letter: 'C',
    title: 'Private / Invite-Only',
    label: 'Your invitation. Your choice.',
    tone: 'private',
    text: 'Ultimate privacy. Your trip is hidden from everyone. Manually browse and send encrypted invites only to users you trust.',
  },
];
const confirmations = [
  [
    '✓',
    'Trusted Match Badge',
    'Only allow meetups with verified users who have a high reliability score. Look for the trusted badge before confirming.',
  ],
  [
    '♡',
    'Double Confirmation',
    'Before finalizing, both users receive a pre-meet chat prompt: “Are you sure you will attend?” Both users must confirm.',
  ],
  [
    '✳',
    'Reliability Score',
    'Every user has a visible rating, such as 95% Reliable, based on attendance and authentic behaviour. Good behaviour is publicly rewarded.',
  ],
];
export default function Page() {
  return (
    <PageShell className="creative-home dating-home compact-dating reference-page">
      <main>
        <header className="ref-heading ref-safety-heading">
          <div>
            <Link className="cd-text-link" href="/">
              Home <span>/ Booking &amp; Matching</span>
            </Link>
            <span className="cd-eyebrow">DISCOVER. CONNECT. MAKE A PLAN.</span>
            <h1>
              Good conversations.
              <br />
              <em>Real meetups.</em>
            </h1>
            <p>Discover venues, plan outings, and turn online matches into real meetups safely.</p>
            <a className="cd-text-link" href="#plan-privacy">
              Explore your privacy choices ↓
            </a>
          </div>
          <figure>
            <img
              src="/images/generated/booking-plan-together-v1.webp"
              alt="Illustrative scene of two adults choosing a venue together on a phone"
              fetchPriority="high"
            />
          </figure>
        </header>
        <section className="cd-section booking-parts">
          <div className="cd-section-heading">
            <div>
              <span className="cd-eyebrow">HOW LUNARA WORKS</span>
              <h2>
                Lunara in <em>two parts.</em>
              </h2>
            </div>
            <p>
              We combine discovery with connection.
              <br />
              More than booking. More than matching.
            </p>
          </div>
          <div className="ref-values">
            <article className="ref-panel">
              <span className="cd-eyebrow">01 / LIKE ZOMATO, BUT SOCIAL</span>
              <h3>Venue Booking</h3>
              <p>
                Browse pubs, cafés, lounges, and rooftops. View fresh menus, transparent pricing,
                and secure your spot.
              </p>
              <ul>
                <li>Book tables for solo visits or groups.</li>
                <li>Get exclusive deals and discounts.</li>
                <li>Book instantly and directly through Lunara.</li>
              </ul>
              <Link className="cd-text-link" href="/partners">
                Explore partner venues ↗
              </Link>
            </article>
            <article className="ref-panel">
              <span className="cd-eyebrow">02 / OUR MAIN FEATURE</span>
              <h3>Venue-Based Matching</h3>
              <p>
                People don’t just chat — they plan and meet at a venue. Lunara turns online matches
                into real meetups.
              </p>
              <ul>
                <li>Create a profile and select a venue.</li>
                <li>Publish your plan or send personal invites.</li>
                <li>Match, confirm your table, split the payment, and meet.</li>
              </ul>
              <Link className="cd-text-link" href="/contact">
                Ask about getting started ↗
              </Link>
            </article>
          </div>
        </section>
        <section className="cd-section booking-privacy" id="plan-privacy">
          <div>
            <span className="cd-eyebrow">SAFETY FIRST</span>
            <h2>
              User-controlled
              <br />
              <em>plan privacy.</em>
            </h2>
            <p>
              Posting public plans online can be risky, especially for women. Lunara lets you decide
              what to show, to whom, and when.
            </p>
            <div className="booking-note">
              <strong>The problem</strong>
              <p>Fully public plans allow anyone to track you and show up uninvited.</p>
            </div>
            <div className="booking-note booking-solution">
              <strong>The solution</strong>
              <p>The “Request to View Plan” system.</p>
            </div>
            <Link className="cd-text-link" href="/safety-check">
              Visit the Safety Hub ↗
            </Link>
          </div>
          <div className="booking-modes">
            {modes.map((mode) => (
              <article className={`ref-panel booking-mode booking-${mode.tone}`} key={mode.letter}>
                <div className="booking-mode-label">
                  <span>OPTION {mode.letter}</span>
                  <small>{mode.label}</small>
                </div>
                <h3>{mode.title}</h3>
                <p>{mode.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="cd-section">
          <div className="cd-section-heading">
            <div>
              <span className="cd-eyebrow">A LITTLE MORE CERTAINTY</span>
              <h2>
                Confirmed <em>meetups only.</em>
              </h2>
            </div>
            <p>
              “Every meetup on Lunara is confirmed, tracked, and trusted.”
              <br />
              Say goodbye to casual flaking.
            </p>
          </div>
          <div className="cd-feature-grid">
            {confirmations.map(([icon, title, text]) => (
              <article className="cd-feature cd-lilac" key={title}>
                <span className="cd-feature-icon" aria-hidden="true">
                  {icon}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="ref-values booking-backup">
          <article className="ref-panel">
            <span className="cd-eyebrow">PLATFORM INTEGRITY</span>
            <h3>Penalties for no-shows</h3>
            <ul>
              <li>Immediate 24-hour search suspension.</li>
              <li>Public Reliability Score reduction.</li>
              <li>Discovery ranking penalty of 50%.</li>
            </ul>
          </article>
          <article className="ref-panel">
            <span className="cd-eyebrow">AUTOMATIC BACKUP</span>
            <h3>Solo Experience Mode</h3>
            <p>Premium backup for when plans change unexpectedly.</p>
            <h4>Priority Match</h4>
            <p>We push your profile to potential matches in the same area instantly.</p>
            <h4>Exclusive Perks</h4>
            <p>Unlock “Single Seat” deals and complimentary perks at verified venues.</p>
          </article>
        </section>
        <section className="ref-image-cta ref-connections">
          <div>
            <span className="cd-eyebrow">SECURE MATCHING. SAFE VENUES.</span>
            <h2>
              Experience the <em>future of nightlife.</em>
            </h2>
            <p>Secure matching, safe venues, and unforgettable nights. Join Lunara today.</p>
            <div className="cd-actions">
              <Link className="cd-button" href="/contact">
                Plan your next night ↗
              </Link>
              <Link className="cd-text-link" href="/partners">
                Explore partners ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
