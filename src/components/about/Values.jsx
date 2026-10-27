import Link from 'next/link';

export default function Values() {
  return (
    <section className="story-values">
      <div className="values-heading">
        <span className="dating-kicker">{'WHAT MATTERS TO US'}</span>
        <h2>
          {'Good connections.'}
          <br />
          <em>{'Better intentions.'}</em>
        </h2>
      </div>
      <div className="values-grid">
        <article>
          <span className="value-symbol" aria-hidden="true">
            {'✳'}
          </span>
          <span className="value-number">{'01 / AUTHENTICITY'}</span>
          <h3>{'Come as you are.'}</h3>
          <p>
            {
              'Your quirks, your passions, your actual personality. The best thing you can bring to a connection is yourself.'
            }
          </p>
        </article>
        <article>
          <span className="value-symbol" aria-hidden="true">
            {'♡'}
          </span>
          <span className="value-number">{'02 / RESPECT'}</span>
          <h3>{'Kindness is chemistry.'}</h3>
          <p>
            {
              'Every person deserves to feel welcome and respected. Good conversations start with listening and respecting boundaries.'
            }
          </p>
        </article>
        <article>
          <span className="value-symbol" aria-hidden="true">
            {'↗'}
          </span>
          <span className="value-number">{'03 / POSSIBILITY'}</span>
          <h3>{'Leave room for surprise.'}</h3>
          <p>
            {
              'Someone outside your usual circle. A new favourite place. There’s something wonderful about not knowing what’s next.'
            }
          </p>
        </article>
      </div>
    </section>
  );
}
