import Link from 'next/link';

export default function Care() {
  return (
    <section className="story-care">
      <div className="care-illustration" aria-hidden="true">
        <span>{'♡'}</span>
        <div>
          {'YOUR PACE.'}
          <br />
          {'YOUR SPACE.'}
          <br />
          <em>{'Always.'}</em>
        </div>
        <b>{'✓'}</b>
      </div>
      <div>
        <span className="dating-kicker">{'TRUST IS WHERE IT STARTS'}</span>
        <h2>
          {'A little spark.'}
          <br />
          {'A lot of '}
          <em>{'care.'}</em>
        </h2>
        <p>
          {
            'Feeling comfortable comes first. Learn about privacy choices, respectful interactions, and ways to get support in our Safety Hub.'
          }
        </p>
        <Link className="text-link" href="/safety-check">
          {'Your safety matters ↗'}
        </Link>
        <Link className="care-community" href="/community-guidelines">
          {'Read our community guidelines ↗'}
        </Link>
      </div>
    </section>
  );
}
