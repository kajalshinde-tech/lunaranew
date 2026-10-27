import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="dating-cta">
      <span className="dating-kicker">{'SOME THINGS ARE BETTER TOGETHER.'}</span>
      <h2>
        {'Your next great story'}
        <br />
        {'starts with a '}
        <em>{'hello.'}</em>
      </h2>
      <Link className="dating-button" href="/contact">
        {'Let’s find your connection ↗'}
      </Link>
      <span className="cta-spark" aria-hidden="true">
        {'✳'}
      </span>
    </section>
  );
}
