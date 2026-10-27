import Link from 'next/link';

export default function Support() {
  return (
    <section id="support" className="safe-support">
      <div className="support-symbol" aria-hidden="true">
        {'♡'}
      </div>
      <div>
        <span className="dating-kicker">{'YOU DON’T HAVE TO FIGURE IT OUT ALONE'}</span>
        <h2>
          {'Something feel off?'}
          <br />
          <em>{'Let’s talk.'}</em>
        </h2>
        <p>
          {
            'For questions or concerns about your Lunara experience, get in touch with us. If you’re in immediate danger, move to a safer place if you can and contact local emergency services. This website is not an emergency response service.'
          }
        </p>
        <Link className="dating-button" href="/contact">
          {'Contact Lunara '}
          <span>{'↗'}</span>
        </Link>
      </div>
    </section>
  );
}
