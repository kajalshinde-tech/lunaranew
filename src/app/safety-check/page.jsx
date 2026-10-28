import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
export const metadata = {
  title: 'Safety Check — Lunara',
  description:
    'Explore Lunara’s core protections, digital safety, meetup etiquette, billing guidance, and safety support.',
};
const protections = [
  [
    '✓',
    'AI Verification',
    'Biometric photo matching ensures every user profile is 100% authentic before meeting.',
  ],
  [
    '◉',
    'Privacy Stealth',
    'Toggle your visibility on or off. Share your location only with confirmed matches you trust.',
  ],
  [
    '↗',
    'SOS Integration',
    'A one-tap emergency button connects directly to venue security and local authorities.',
  ],
  [
    '◇',
    'Smart Billing',
    'Transparent menu pricing and split-payment tools protect you from venue scams.',
  ],
];
const guides = [
  {
    title: 'Digital Safety First',
    text: 'Keep your private data out of chats. Use Lunara’s secure messaging for all coordination.',
    icon: '↗',
  },
  {
    title: 'Meetup Etiquette',
    text: 'Respect boundaries and always inform a trusted friend about your plans.',
    icon: '♡',
  },
  {
    title: 'Billing & Fraud Prevention',
    text: 'Lunara provides complete transparency and smart payment controls to protect you from unfair charges.',
    icon: '◇',
    items: [
      'View complete venue menus and pricing before you book.',
      'Use Split Payment to pay only for your share.',
      'Verify all applicable charges, including GST and service fees, in advance.',
    ],
  },
  {
    title: 'Digital Chat & Video Safety',
    text: 'Interacting safely in the digital space is vital. Keep your personal data secure.',
    icon: '✳',
    items: [
      'Keep conversations within Lunara until you fully trust the person.',
      'Watch for users who push for inappropriate video calls.',
      'Use our Block & Report tools if anything makes you uncomfortable.',
    ],
  },
];
export default function Page() {
  return (
    <PageShell className="creative-home dating-home compact-dating reference-page">
      <main>
        <header className="ref-heading ref-safety-heading">
          <div>
            <Link className="cd-text-link" href="/">
              Home <span> / Safety Check</span>
            </Link>
            <span className="cd-eyebrow">CONNECTION STARTS WITH CONFIDENCE</span>
            <h1>
              Your safety.
              <br />
              <em>Our priority.</em>
            </h1>
            <p>
              Explore our protections and practical safety guidance. Please share your experience.
            </p>
            <a className="cd-text-link" href="#safety-guidelines">
              Read the guidelines ↓
            </a>
          </div>
          <figure>
            <img
              src="/images/generated/safety-shield-v1.webp"
              alt="Soft lavender safety shield with a checkmark, heart, and privacy lock"
              fetchPriority="high"
            />
          </figure>
        </header>
        <section className="ref-status" aria-label="Lunara safety information">
          <div>
            <span className="ref-status-icon" aria-hidden="true">
              ✓
            </span>
            <div>
              <strong>Safety Shield Active</strong>
              <small>Lunara Secure Ecosystem v4.2</small>
            </div>
          </div>
          <div>
            <strong>100%</strong>
            <small>Verified venues</small>
          </div>
          <div>
            <strong>24/7</strong>
            <small>Active support</small>
          </div>
          <span className="ref-status-label">
            <span /> System Live &amp; Protected
          </span>
        </section>
        <section className="cd-section">
          <div className="cd-section-heading">
            <div>
              <span className="cd-eyebrow">BUILT INTO THE EXPERIENCE</span>
              <h2>
                Core <em>protections.</em>
              </h2>
            </div>
            <p>
              Enterprise-grade security tools
              <br />
              built into every booking.
            </p>
          </div>
          <div className="ref-protections">
            {protections.map(([icon, title, text]) => (
              <article className="ref-panel" key={title}>
                <span className="cd-feature-icon" aria-hidden="true">
                  {icon}
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="cd-section" id="safety-guidelines">
          <div className="cd-section-heading">
            <div>
              <span className="cd-eyebrow">A LITTLE CARE GOES A LONG WAY</span>
              <h2>
                Safety <em>guidelines.</em>
              </h2>
            </div>
            <p>
              Our community is built on trust.
              <br />
              Guidance for digital and physical safety.
            </p>
          </div>
          <div className="ref-guides">
            {guides.map((guide) => (
              <article className="ref-panel" key={guide.title}>
                <span className="cd-feature-icon" aria-hidden="true">
                  {guide.icon}
                </span>
                <h3>{guide.title}</h3>
                <p>{guide.text}</p>
                {guide.items && (
                  <ul>
                    {guide.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
          <article className="ref-etiquette ref-panel">
            <div>
              <span className="cd-eyebrow">FOR MEN · FOR WOMEN · FOR EVERYONE</span>
              <h3>Respect &amp; Etiquette</h3>
              <p>
                Our community thrives on mutual respect. Be honest, kind, and mindful of each
                other’s time. Avoid last-minute cancellations or disrespectful conduct.
              </p>
            </div>
            <Link className="cd-text-link" href="/community-guidelines">
              Community guidelines ↗
            </Link>
          </article>
        </section>
        <section className="cd-trust">
          <span className="cd-trust-icon" aria-hidden="true">
            ♡
          </span>
          <div>
            <span className="cd-eyebrow">WE’RE HERE TO HELP</span>
            <h2>Still have questions?</h2>
            <p>
              Our dedicated safety response team is available 24/7 to assist with any concerns
              regarding your Lunara experience.
            </p>
          </div>
          <Link className="cd-button" href="/contact">
            Talk to the safety team ↗
          </Link>
        </section>
        <section className="ref-image-cta ref-discovery">
          <div>
            <span className="cd-eyebrow">A SHARED RESPONSIBILITY</span>
            <h2>
              Secure <em>the night.</em>
            </h2>
            <p>
              Read our detailed community guidelines to understand how we keep our space safe for
              everyone.
            </p>
            <div className="cd-actions">
              <Link className="cd-button" href="/community-guidelines">
                Community guidelines ↗
              </Link>
              <Link className="cd-text-link" href="/">
                Back to home ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
