import Link from 'next/link';

export default function Hero() {
  return (
    <section className="story-hero" aria-labelledby="story-title">
      <div className="story-intro">
        <Link className="story-breadcrumb" href="/">
          {'Home'}
        </Link>
        <span className="story-breadcrumb">{' / Our story'}</span>
        <span className="dating-kicker">{'A LITTLE ABOUT US'}</span>
        <h1 id="story-title">
          {'About Lunara.'}
          <br />
          {'Born from the love'}
          <br />
          <em>{'of the night.'}</em>
          <span className="story-spark" aria-hidden="true">
            {'✳'}
          </span>
        </h1>
        <p>
          {'The story behind the ultimate nightlife platform.'}
          <br />
          {'Discover, book, and experience nightlife across India.'}
        </p>
        <a className="dating-button" href="#our-story">
          {'Get to know Lunara '}
          <span>{'↓'}</span>
        </a>
      </div>
      <div className="story-photo">
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1100&q=85"
          alt="Friends sharing a relaxed moment outdoors"
          fetchPriority="high"
        />
        <span className="photo-caption">{'Life happens between people.'}</span>
        <span className="story-photo-note">
          {'Made for'}
          <br />
          <em>{'real connection.'}</em>
          {' ♡'}
        </span>
        <span className="photo-corner" aria-hidden="true">
          {'↗'}
        </span>
      </div>
    </section>
  );
}
