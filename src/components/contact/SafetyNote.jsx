import Link from 'next/link';

export default function SafetyNote() {
  return (
    <section className="contact-safety-note">
      <span aria-hidden="true">{'♡'}</span>
      <div>
        <h3>{'Your comfort matters.'}</h3>
        <p>
          {
            'Have a safety concern? Visit our Safety Hub for guidance. If you’re in immediate danger, contact local emergency services.'
          }
        </p>
      </div>
      <Link href="/safety-check">{'Visit the Safety Hub ↗'}</Link>
    </section>
  );
}
