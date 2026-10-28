import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="dating-cta">
      <span className="dating-kicker">{'THOUSANDS OF NIGHT OWLS TRUST LUNARA.'}</span>
      <h2>
        {'Join the Lunara'}
        <br />
        <em>{'movement.'}</em>
      </h2>
      <Link className="dating-button" href="/contact">
        {'Get started ↗'}
      </Link>
      <span className="cta-spark" aria-hidden="true">
        {'✳'}
      </span>
    </section>
  );
}
