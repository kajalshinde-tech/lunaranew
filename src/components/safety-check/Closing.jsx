import Link from 'next/link';

export default function Closing() {
  return (
    <section className="safe-closing">
      <span className="dating-kicker">{'KINDNESS IS A SHARED RESPONSIBILITY.'}</span>
      <h2>
        {'Good people.'}
        <br />
        <em>{'Better together.'}</em>
      </h2>
      <p>{'Help make room for respectful, authentic connections.'}</p>
      <Link className="text-link" href="/community-guidelines">
        {'Read our community guidelines ↗'}
      </Link>
    </section>
  );
}
