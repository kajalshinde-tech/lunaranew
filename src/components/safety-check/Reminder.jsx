import Link from 'next/link';

export default function Reminder() {
  return (
    <section className="safe-reminder">
      <span aria-hidden="true">{'✳'}</span>
      <div>
        <span className="dating-kicker">{'A REMINDER WORTH KEEPING'}</span>
        <h2>
          {'Butterflies? Lovely.'}
          <br />
          {'Pressure? '}
          <em>{'Never.'}</em>
        </h2>
        <p>{'The right connection makes room for your boundaries.'}</p>
      </div>
      <span aria-hidden="true">{'♡'}</span>
    </section>
  );
}
