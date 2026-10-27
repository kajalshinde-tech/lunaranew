import Link from 'next/link';

export default function OurStory() {
  return (
    <section id="our-story" className="story-origin">
      <div>
        <span className="dating-kicker">{'THE IDEA BEHIND LUNARA'}</span>
        <h2>
          {'A world of people.'}
          <br />
          {'One '}
          <em>{'real hello.'}</em>
        </h2>
      </div>
      <div className="origin-copy">
        <p className="lead-copy">
          {'Some of life’s best moments start with someone you haven’t met yet.'}
        </p>
        <p>
          {
            'A shared favourite song. A conversation that runs a little longer. Someone who makes an ordinary evening feel different. We believe those moments deserve more room in our lives.'
          }
        </p>
        <p>
          {
            'That’s the idea behind Lunara: a place to explore connections, express what makes you unique, and turn a little curiosity into a real-world plan.'
          }
        </p>
        <Link className="text-link" href="/#discover">
          {'Discover your kind of connection ↗'}
        </Link>
      </div>
    </section>
  );
}
