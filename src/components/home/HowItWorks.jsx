import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="dating-how">
      <div>
        <span className="dating-kicker">{'YOUR NEXT CHAPTER STARTS HERE'}</span>
        <h2>
          {'From '}
          <em>{'hello'}</em>
          <br />
          {'to '}
          <em>{'let’s go.'}</em>
        </h2>
        <Link className="dating-button" href="/contact">
          {'Say hello to Lunara ↗'}
        </Link>
      </div>
      <div className="dating-steps">
        <article>
          <span>{'01'}</span>
          <div>
            <h3>{'Show up as you.'}</h3>
            <p>{'Your interests, your energy, your story. There’s no one else quite like you.'}</p>
          </div>
        </article>
        <article>
          <span>{'02'}</span>
          <div>
            <h3>{'Find a little chemistry.'}</h3>
            <p>{'Explore new connections and discover people who share your wavelength.'}</p>
          </div>
        </article>
        <article>
          <span>{'03'}</span>
          <div>
            <h3>{'Make it a real-world moment.'}</h3>
            <p>
              {'Pick somewhere you both love. Turn a good conversation into a great first date.'}
            </p>
            <Link href="/booking">{'Explore places to meet ↗'}</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
