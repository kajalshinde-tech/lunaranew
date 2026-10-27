import Link from 'next/link';

export default function SafetyGuide() {
  return (
    <section className="safe-guide" id="safety-guide">
      <div className="safe-heading">
        <span className="dating-kicker">{'SMALL STEPS. MORE CONFIDENCE.'}</span>
        <h2>
          {'A little care'}
          <br />
          {'goes a '}
          <em>{'long way.'}</em>
        </h2>
        <p>
          {
            'You don’t owe anyone your personal information, your time, or a second date. Trust your instincts and take things at your own pace.'
          }
        </p>
      </div>
      <div className="safe-cards">
        <article id="online">
          <div className="safe-card-icon" aria-hidden="true">
            {'⌘'}
          </div>
          <span className="safe-label">{'01 / KEEP IT PERSONAL, NOT PRIVATE'}</span>
          <h3>
            {'Protect your'}
            <br />
            {'little world.'}
          </h3>
          <p>{'Let someone get to know you without handing over your private details.'}</p>
          <ul>
            <li>{'Keep your home address, workplace details, and passwords private.'}</li>
            <li>
              {'Never share an OTP, banking information, or identity documents with a match.'}
            </li>
            <li>{'Be cautious if someone rushes you to another app or sends unexpected links.'}</li>
          </ul>
        </article>
        <article id="meeting">
          <div className="safe-card-icon" aria-hidden="true">
            {'↗'}
          </div>
          <span className="safe-label">{'02 / MAKE A THOUGHTFUL PLAN'}</span>
          <h3>
            {'First dates.'}
            <br />
            {'Familiar ground.'}
          </h3>
          <p>{'A simple plan can help you feel more comfortable when meeting someone new.'}</p>
          <ul>
            <li>{'Choose a busy public place and arrange your own transport.'}</li>
            <li>{'Tell someone you trust where you’re going and when you’ll check in.'}</li>
            <li>{'Keep your belongings and drink with you. Leave whenever you want to.'}</li>
          </ul>
        </article>
        <article id="boundaries">
          <div className="safe-card-icon" aria-hidden="true">
            {'♡'}
          </div>
          <span className="safe-label">{'03 / YOUR COMFORT COMES FIRST'}</span>
          <h3>
            {'A yes is yours.'}
            <br />
            {'So is a no.'}
          </h3>
          <p>{'Respect is the foundation of a good connection, online and in person.'}</p>
          <ul>
            <li>{'Consent should be freely given and can be withdrawn at any time.'}</li>
            <li>{'Don’t pressure anyone to share photos, meet up, or move faster.'}</li>
            <li>{'End a conversation if it feels uncomfortable. You don’t need to justify it.'}</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
