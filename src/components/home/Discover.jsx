import Link from 'next/link';

export default function Discover() {
  return (
    <section id="discover" className="dating-discover">
      <div className="dating-section-head">
        <div>
          <span className="dating-kicker">{'MORE THAN A PROFILE'}</span>
          <h2>
            {'Someone who gets'}
            <br />
            {'your '}
            <em>{'kind of weird.'}</em>
          </h2>
        </div>
        <p>
          {'A shared obsession. A different perspective.'}
          <br />
          {'A spark you didn’t see coming.'}
          <br />
          {'Start with what makes you, you.'}
        </p>
      </div>
      <div className="dating-features">
        <article className="feature-pink">
          <div className="feature-art interests-art">
            <span>{'♫ Indie on repeat'}</span>
            <span>{'☕ Coffee over everything'}</span>
            <span>{'✳ Spontaneous adventures'}</span>
            <b>{'It’s a vibe.'}</b>
          </div>
          <span className="feature-number">{'01 / FIND YOUR VIBE'}</span>
          <h3>
            {'Your interests.'}
            <br />
            {'Your kind of people.'}
          </h3>
          <p>
            {
              'Let the things you love do the talking. Connection starts with a little common ground.'
            }
          </p>
        </article>
        <article className="feature-photo">
          <img
            src="/images/generated/cafe-connection-v1.webp"
            alt="Illustrative scene of two adults laughing over coffee"
            loading="lazy"
          />
          <div>
            <span className="feature-number">{'02 / TAKE IT OFFLINE'}</span>
            <h3>
              {'Great chemistry'}
              <br />
              {'deserves a real plan.'}
            </h3>
            <p>{'From a first hello to “same time next week?” Make room for something real.'}</p>
          </div>
        </article>
        <article className="feature-lilac">
          <div className="feature-art message-art">
            <div>{'So… coffee or a spontaneous adventure? ☕'}</div>
            <div>{'Why not both? ✨'}</div>
            <span>{'Let the good conversations begin.'}</span>
          </div>
          <span className="feature-number">{'03 / BE YOURSELF'}</span>
          <h3>
            {'A little courage.'}
            <br />
            {'A whole lot of you.'}
          </h3>
          <p>
            {
              'No perfect opening line needed. Bring your personality. See where the conversation goes.'
            }
          </p>
        </article>
      </div>
    </section>
  );
}
