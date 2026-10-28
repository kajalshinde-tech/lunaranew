import Link from 'next/link';

export default function Values() {
  return (
    <section className="story-values">
      <div className="values-heading">
        <span className="dating-kicker">{'WHY CHOOSE LUNARA?'}</span>
        <h2>
          {'Premium experiences.'}
          <br />
          <em>{'Seamless booking.'}</em>
        </h2>
      </div>
      <div className="values-grid">
        <article>
          <span className="value-symbol" aria-hidden="true">
            {'✳'}
          </span>
          <span className="value-number">{'01 / BOOKING'}</span>
          <h3>{'Lightning-Fast Booking'}</h3>
          <p>{'Reserve your spot in under 60 seconds. No calls, no waiting — just tap and go.'}</p>
        </article>
        <article>
          <span className="value-symbol" aria-hidden="true">
            {'♡'}
          </span>
          <span className="value-number">{'02 / ACCESS'}</span>
          <h3>{'Exclusive Access'}</h3>
          <p>{'Unlock members-only events, VIP tables, and premium experiences.'}</p>
        </article>
        <article>
          <span className="value-symbol" aria-hidden="true">
            {'↗'}
          </span>
          <span className="value-number">{'03 / CURATION'}</span>
          <h3>{'Curated by Experts'}</h3>
          <p>
            {
              'Our nightlife experts handpick every venue for top-tier quality and unforgettable vibes.'
            }
          </p>
        </article>
      </div>
    </section>
  );
}
