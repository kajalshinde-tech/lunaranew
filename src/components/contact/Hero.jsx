import Link from 'next/link';

export default function Hero() {
  return (
    <section className="contact-hero">
      <div>
        <div className="contact-crumb">
          <Link href="/">{'Home'}</Link>
          {' / Get in touch'}
        </div>
        <span className="dating-kicker">{'EVERY GOOD CONNECTION STARTS SOMEWHERE'}</span>
        <h1>
          {'Big questions.'}
          <br />
          {'Little hellos.'}
          <br />
          <em>{'We’re listening.'}</em>
        </h1>
        <p>
          {'We’d love to hear from you.'}
          <br />
          {'Let’s start a conversation.'}
        </p>
        <a className="text-link" href="#write-to-us">
          {'Let’s talk '}
          <span>{'↓'}</span>
        </a>
      </div>
      <div className="hello-art" aria-hidden="true">
        <span className="hello-star">{'✳'}</span>
        <div className="hello-orbit"></div>
        <div className="hello-bubble">
          {'hello'}
          <span>{'♡'}</span>
        </div>
        <div className="reply-bubble">
          {'Hey, you. '}
          <em>{'Let’s talk.'}</em>
          <span>{'•••'}</span>
        </div>
        <span className="hello-caption">{'HUMANS ON BOTH SIDES OF THE CONVERSATION.'}</span>
      </div>
    </section>
  );
}
