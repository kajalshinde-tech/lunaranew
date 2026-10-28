import Link from 'next/link';

export default function OurStory() {
  return (
    <section id="our-story" className="story-origin">
      <div>
        <span className="dating-kicker">{'THE IDEA BEHIND LUNARA'}</span>
        <h2>
          {'Our story.'}
          <br />
          {'Born from the '}
          <em>{'love of the night.'}</em>
        </h2>
      </div>
      <div className="origin-copy">
        <p className="lead-copy">
          {
            'Lunara was born from a simple idea: the nightlife experience shouldn’t start at the door — it should start from your phone.'
          }
        </p>
        <p>
          {
            'We connect party lovers with the hottest clubs, premium bars, and exclusive events across India.'
          }
        </p>
        <p>
          {
            'Our platform empowers venues to reach new audiences and helps you discover, book, and experience the best nights of your life — all from one seamless app.'
          }
        </p>
        <Link className="text-link" href="/partners">
          {'Discover our partner venues ↗'}
        </Link>
      </div>
    </section>
  );
}
