import Link from 'next/link';

export default function SocialLinks() {
  return (
    <section className="contact-social">
      <span className="dating-kicker">{'KEEP THE CONVERSATION GOING'}</span>
      <h2>
        {'A little more '}
        <em>{'Lunara.'}</em>
      </h2>
      <p>{'Find us in your feed. Say hello along the way.'}</p>
      <div>
        <a href="https://www.instagram.com/lunaraforyou/" target="_blank" rel="noopener noreferrer">
          {'Instagram ↗'}
        </a>
        <a
          href="https://www.facebook.com/share/1HppJ7xLnS/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'Facebook ↗'}
        </a>
        <a href="https://x.com/lunaraforyou" target="_blank" rel="noopener noreferrer">
          {'X ↗'}
        </a>
      </div>
    </section>
  );
}
