import Link from 'next/link';

export default function Belief() {
  return (
    <section className="story-belief">
      <span className="dating-kicker">{'OUR VISION'}</span>
      <h2>
        {'Curated. Premium.'}
        <br />
        {'Every night '}
        <em>{'unforgettable.'}</em>
      </h2>
      <p>
        {
          'To become the world’s most trusted nightlife platform, where discovering your next great night is as easy as a single tap.'
        }
      </p>
      <span aria-hidden="true" className="belief-heart">
        {'♡'}
      </span>
    </section>
  );
}
