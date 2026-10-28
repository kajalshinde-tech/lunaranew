import Link from 'next/link';

export default function Hero() {
  return (
    <section className="dating-hero">
      <div className="hero-intro">
        <span className="dating-kicker">{'●   REAL PEOPLE. REAL POSSIBILITIES.'}</span>
        <h1>
          {'A little spark.'}
          <br />
          {'A real '}
          <em>{'connection.'}</em>
        </h1>
        <p>
          {'For the unexpected hellos. The same-song people.'}
          <br />
          {'The “one more coffee?” kind of chemistry.'}
        </p>
        <div className="dating-actions">
          <Link className="dating-button" href="/contact">
            {'Find your kind of person '}
            <span>{'↗'}</span>
          </Link>
          <a href="#how-it-works" className="how-link">
            {'How it works   ↓'}
          </a>
        </div>
        <div className="hero-footnote">
          <span>{'♡'}</span>
          {' Less small talk. More real life. '}
          <small>{'18+ only'}</small>
        </div>
      </div>
      <div className="connection-collage">
        <div className="orbit"></div>
        <div className="orbit orbit-two"></div>
        <span className="drawn-star" aria-hidden="true">
          {'✳'}
        </span>
        <article className="person-card person-one">
          <img
            src="/images/generated/portrait-woman-v1.webp"
            alt="Illustrative portrait of a woman at a sunlit café"
            fetchPriority="high"
          />
          <div className="person-info">
            <span>{'Spontaneous plans person'}</span>
            <h2>
              {'Follow your '}
              <i>{'curiosity.'}</i>
            </h2>
            <div className="interest-tags">
              <span>{'☕ Coffee dates'}</span>
              <span>{'♫ Live music'}</span>
            </div>
          </div>
        </article>
        <article className="person-card person-two">
          <img
            src="/images/generated/portrait-man-v1.webp"
            alt="Illustrative portrait of a man at a sunlit café"
          />
          <div className="person-info">
            <span>{'Always up for an adventure'}</span>
            <h2>
              {'Meet your '}
              <i>{'kind.'}</i>
            </h2>
          </div>
        </article>
        <div className="floating-note note-top">
          <span>{'♫'}</span>
          {' Same playlist. Same wavelength.'}
        </div>
        <div className="floating-note note-bottom">
          <span>{'♡'}</span>
          <div>
            {'That feeling?'}
            <strong>{'It might be mutual.'}</strong>
          </div>
        </div>
        <span className="heart-doodle" aria-hidden="true">
          {'♡'}
        </span>
        <span className="sample-label">
          {'AI-generated images. Illustrative, not member profiles.'}
        </span>
      </div>
    </section>
  );
}
