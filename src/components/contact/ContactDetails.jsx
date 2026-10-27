import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export default function ContactDetails() {
  return (
    <section className="contact-layout" id="write-to-us">
      <div className="message-panel">
        <span className="dating-kicker">{'A NOTE FROM YOU'}</span>
        <h2>
          {'What’s on'}
          <br />
          <em>{'your mind?'}</em>
        </h2>
        <p className="form-intro">
          {'Tell us a little about it. We’ll help you prepare an email to the right team.'}
        </p>
        <ContactForm />
      </div>
      <aside className="contact-sidebar">
        <div className="reach-card">
          <span className="contact-icon" aria-hidden="true">
            {'↗'}
          </span>
          <span className="dating-kicker">{'THE DIRECT ROUTE'}</span>
          <h3>{'Prefer a simple hello?'}</h3>
          <p>{'Questions, feedback, or help with your Lunara experience.'}</p>
          <a href="mailto:support@lunara.buzz">{'support@lunara.buzz ↗'}</a>
        </div>
        <div className="reach-card partner-card">
          <span className="contact-icon" aria-hidden="true">
            {'✳'}
          </span>
          <span className="dating-kicker">{'GOOD THINGS, TOGETHER'}</span>
          <h3>{'Let’s make something happen.'}</h3>
          <p>{'For venue partnerships and ideas worth exploring.'}</p>
          <a href="mailto:partnerships@lunara.club">{'partnerships@lunara.club ↗'}</a>
          <Link className="small-route" href="/partners">
            {'Explore partnerships ↗'}
          </Link>
        </div>
        <div className="contact-details">
          <div>
            <span className="dating-kicker">{'GIVE US A RING'}</span>
            <a href="tel:+919067565606">{'+91 90675 65606'}</a>
            <a href="tel:+919421004137">{'+91 94210 04137'}</a>
          </div>
          <div>
            <span className="dating-kicker">{'FIND US IN PUNE'}</span>
            <p>
              {'Hinjewadi IT Park, Phase 1'}
              <br />
              {'Pune, Maharashtra, India'}
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
