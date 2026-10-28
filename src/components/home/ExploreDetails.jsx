import Link from 'next/link';
const experiences = [
  [
    'bi-stars',
    'Experience the Night Like Never Before',
    'Discover the hottest clubs, book premium tables, and unlock exclusive nightlife experiences — all in one place.',
    '/images/generated/rooftop-experience-v1.webp',
    'Illustrative rooftop café meetup at twilight',
    '/#featured-clubs',
    'Explore clubs',
  ],
  [
    'bi-music-note-beamed',
    'Where Music Meets the Soul',
    'Unleash the energy of the night with the world’s most renowned DJs and immersive sound systems.',
    '/images/generated/live-music-v1.webp',
    'Illustrative singer and guitarist performing in a warm intimate lounge',
    '/about',
    'Learn more',
  ],
  [
    'bi-gem',
    'Unlock Exclusive VIP Access',
    'From private tables to express entry, experience the ultimate luxury in nightlife booking.',
    '/images/generated/vip-lounge-v1.webp',
    'Illustrative private lounge booth overlooking the city at twilight',
    '/contact',
    'Ask about VIP access',
  ],
];
const benefits = [
  [
    'bi-compass',
    'Discover',
    'Browse curated nightclubs and bars near you with real-time availability and exclusive deals.',
  ],
  [
    'bi-calendar2-check',
    'Booking',
    'Reserve tables, VIP areas, and event passes instantly with secure online booking.',
  ],
  [
    'bi-gem',
    'VIP Access',
    'Unlock premium bottle service, backstage passes, and members-only perks.',
  ],
  [
    'bi-shield-check',
    'Secure',
    'Verified venues and an integrated Safety Check with active safety guidelines for your peace of mind.',
  ],
];
const steps = [
  ['bi-search', 'Search & Explore', 'Browse clubs by location, music, vibe, or event type.'],
  ['bi-geo-alt', 'Choose Your Spot', 'Pick your table, VIP section, or event pass.'],
  ['bi-credit-card', 'Book & Pay', 'Confirm your reservation with secure payment.'],
  ['bi-stars', 'Enjoy the Night', 'Show up, skip the line, and own the night!'],
];
const protections = [
  [
    'bi-patch-check',
    'AI Image Check',
    'Know that the people you’re meeting are exactly who they say they are, with advanced AI validation blocking AI-generated content.',
    '/images/safety/ai-verify.png',
    'Illustration of AI image verification',
    'Verified',
  ],
  [
    'bi-eye-slash',
    'Venue Privacy',
    'If you want to keep your location quiet, just toggle the Hidden Venue option. You always control who sees you.',
    '/images/safety/privacy-mode.png',
    'Illustration of private location discovery',
    'Your choice',
  ],
  [
    'bi-shield-exclamation',
    'Block and Report',
    'If anyone makes you feel unsafe or uncomfortable, report it quickly. We’ll handle the situation with immediate care.',
    '/images/safety/report-alert.png',
    'Illustration of a digital security shield',
    'Here for you',
  ],
];
function GroupHeading({ icon, title, description, number }) {
  return (
    <header className="explore-group-heading">
      <span className="explore-summary-icon">
        <i className={`bi ${icon}`} aria-hidden="true" />
      </span>
      <div className="explore-summary-copy">
        <h2 id={`explore-group-${number}`}>{title}</h2>
        <p>{description}</p>
      </div>
    </header>
  );
}
export default function ExploreDetails() {
  return (
    <section className="explore-details" id="explore-details" aria-labelledby="explore-title">
      <header className="explore-heading">
        <div>
          <span className="dating-kicker">MORE FROM LUNARA</span>
          <h2 id="explore-title">
            The details,
            <br />
            <em>made simple.</em>
          </h2>
        </div>
        <p>
          Good places. Thoughtful features.
          <br />A little more confidence in every plan.
        </p>
      </header>
      <div className="explore-sections">
        <section className="explore-group" aria-labelledby="explore-group-01">
          <GroupHeading
            icon="bi-music-note-beamed"
            title="Music, venues, and VIP experiences"
            description="Find the setting for your next great story."
            number="01"
          />
          <div className="explore-group-body">
            <div className="explore-image-grid">
              {experiences.map(([icon, title, text, image, alt, href, label]) => (
                <article className="explore-image-card" key={title}>
                  <div className="explore-card-image">
                    <img src={image} alt={alt} loading="lazy" width="600" height="360" />
                    <span className="explore-image-icon">
                      <i className={`bi ${icon}`} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="explore-card-copy">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Link href={href}>
                      {label}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="explore-group" aria-labelledby="explore-group-02">
          <GroupHeading
            icon="bi-compass"
            title="Discovery, booking, and VIP access"
            description="Four reasons to make it a Lunara night."
            number="02"
          />
          <div className="explore-group-body">
            <div className="explore-subheading">
              <span className="dating-kicker">WHY LUNARA?</span>
              <h3>
                Your gateway to <em>premium nightlife.</em>
              </h3>
              <p>Seamless discovery, effortless booking, unforgettable nights.</p>
            </div>
            <div className="explore-benefit-grid">
              {benefits.map(([icon, title, text], index) => (
                <article className={`explore-benefit explore-tone-${index}`} key={title}>
                  <span className="explore-benefit-icon">
                    <i className={`bi ${icon}`} aria-hidden="true" />
                  </span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                  {title === 'Secure' && <Link href="/safety-check">Safety Check ↗</Link>}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="explore-group" aria-labelledby="explore-group-03">
          <GroupHeading
            icon="bi-calendar2-heart"
            title="How venue booking works"
            description="From finding a place to making a plan."
            number="03"
          />
          <div className="explore-group-body">
            <div className="explore-journey">
              <figure>
                <img
                  src="/images/generated/cafe-connection-v1.webp"
                  alt="Illustrative scene of two adults enjoying a café meetup"
                  loading="lazy"
                  width="1200"
                  height="900"
                />
                <figcaption>
                  <span>LESS PLANNING. MORE LIVING.</span>
                  <strong>
                    Make room for
                    <br />
                    <em>something real.</em>
                  </strong>
                </figcaption>
              </figure>
              <div className="explore-journey-copy">
                <span className="dating-kicker">HOW IT WORKS</span>
                <h3>
                  Your next night,
                  <br />
                  <em>in four simple steps.</em>
                </h3>
                <p>
                  Booking your perfect night out takes just four simple steps. No hassle, no
                  waiting.
                </p>
                <ol>
                  {steps.map(([icon, title, text], index) => (
                    <li key={title}>
                      <span className="explore-step-icon">
                        <i className={`bi ${icon}`} aria-hidden="true" />
                        <small>{index + 1}</small>
                      </span>
                      <div>
                        <h4>{title}</h4>
                        <p>{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Link className="cd-text-link" href="/booking">
                  Explore booking & matching ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="explore-group" aria-labelledby="explore-group-04">
          <GroupHeading
            icon="bi-shield-check"
            title="Privacy, verification, and reporting"
            description="Your comfort is part of every connection."
            number="04"
          />
          <div className="explore-group-body">
            <div className="explore-subheading">
              <span className="dating-kicker">YOUR SAFETY, FIRST.</span>
              <h3>
                A little spark.
                <br />
                <em>A lot of care.</em>
              </h3>
              <p>
                We’ve built a suite of tools designed to keep you secure throughout your nightlife
                journey.
              </p>
            </div>
            <div className="explore-image-grid explore-safety-grid">
              {protections.map(([icon, title, text, image, alt, badge]) => (
                <article className="explore-image-card" key={title}>
                  <div className="explore-card-image">
                    <img src={image} alt={alt} loading="lazy" width="600" height="360" />
                    <span className="explore-safety-badge">
                      <i className={`bi ${icon}`} aria-hidden="true" />
                      {badge}
                    </span>
                  </div>
                  <div className="explore-card-copy">
                    <span className="explore-mini-icon">
                      <i className={`bi ${icon}`} aria-hidden="true" />
                    </span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link className="explore-safety-link" href="/safety-check">
              <i className="bi bi-shield-heart" aria-hidden="true" />
              Visit our Safety Hub<span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
        <section className="explore-group" aria-labelledby="explore-group-05">
          <GroupHeading
            icon="bi-arrow-up-right-circle"
            title="Start planning your next night"
            description="Your people. Your place. Your possibilities."
            number="05"
          />
          <div className="explore-group-body">
            <div className="explore-closing">
              <div className="explore-closing-copy">
                <span className="explore-closing-icon">
                  <i className="bi bi-stars" aria-hidden="true" />
                </span>
                <span className="dating-kicker">PREMIUM CLUBS. VERIFIED EXPERIENCES.</span>
                <h3>
                  Ready to <em>own the night?</em>
                </h3>
                <p>
                  Join thousands who book their perfect night through Lunara. Premium clubs,
                  verified experiences, zero hassle.
                </p>
                <Link className="dating-button" href="/contact">
                  Get started now <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <figure>
                <img
                  src="/images/generated/vip-lounge-v1.webp"
                  alt="An inviting lounge for your next night out"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <span className="explore-closing-stamp">
                  <i className="bi bi-heart" aria-hidden="true" />
                  See where the night takes you.
                </span>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
