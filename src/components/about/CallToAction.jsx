import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="dating-cta">
      <span className="dating-kicker">{'YOUR STORY IS STILL BEING WRITTEN.'}</span>
      <h2>
        {'Make room for'}
        <br />
        <em>{'someone new.'}</em>
      </h2>
      <Link className="dating-button" href="/contact">
        {'Say hello to Lunara ↗'}
      </Link>
      <span className="cta-spark" aria-hidden="true">
        {'✳'}
      </span>
    </section>
  );
}
