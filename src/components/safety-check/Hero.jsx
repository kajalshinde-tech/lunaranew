import Link from 'next/link';

export default function Hero() {
  return (
    <section className="safe-hero">
      <div>
        <div className="safe-breadcrumb">
          <Link href="/">{'Home'}</Link>
          {' / Safety Hub'}
        </div>
        <span className="dating-kicker">{'SAFETY CHECK'}</span>
        <h1>
          {'Your pace.'}
          <br />
          {'Your space.'}
          <br />
          <em>{'Your peace of mind.'}</em>
        </h1>
        <p>{'Your safety is our priority. Please share your experience.'}</p>
        <a className="dating-button" href="#safety-guide">
          {'Find your safety guide '}
          <span>{'↓'}</span>
        </a>
      </div>
      <div className="safe-art" aria-hidden="true">
        <span className="art-spark">{'✳'}</span>
        <div className="safe-orbit"></div>
        <div className="shield">
          <svg viewBox="0 0 240 280">
            <path d="M120 12 L222 52 V132 Q218 220 120 266 Q22 220 18 132 V52 Z"></path>
            <path className="shield-check" d="M76 137 L106 166 L164 106"></path>
          </svg>
        </div>
        <div className="art-note note-respect">{'♡   Respect is a good look.'}</div>
        <div className="art-note note-comfort">
          {'You set the boundaries.'}
          <br />
          <strong>{'Always.'}</strong>
        </div>
        <span className="art-caption">{'GOOD CONNECTIONS. THOUGHTFUL CHOICES.'}</span>
      </div>
    </section>
  );
}
