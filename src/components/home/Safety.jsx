import Link from 'next/link';

export default function Safety() {
  return (
    <section className="dating-safety">
      <div className="safety-heart" aria-hidden="true">
        {'♡'}
        <span>{'✓'}</span>
      </div>
      <div>
        <span className="dating-kicker">{'GOOD CONNECTIONS START WITH TRUST'}</span>
        <h2>
          {'Your comfort.'}
          <br />
          <em>{'Never a compromise.'}</em>
        </h2>
        <p>
          {
            'You set the pace. Explore privacy options, community guidelines, and safety resources so you can connect with confidence.'
          }
        </p>
        <Link className="text-link" href="/safety-check">
          {'Explore our Safety Hub ↗'}
        </Link>
      </div>
    </section>
  );
}
