'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function ContactForm() {
  const [draft, setDraft] = useState(null);
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const recipient =
      data.get('subject') === 'Partnership' ? 'partnerships@lunara.club' : 'support@lunara.buzz';
    let body = `Name: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}`;
    if (data.get('phone').trim()) body += `\nPhone: ${data.get('phone').trim()}`;
    body += `\n\n${data.get('message').trim()}`;
    const href = `mailto:${recipient}?subject=${encodeURIComponent('Lunara — ' + data.get('subject'))}&body=${encodeURIComponent(body)}`;
    setDraft({ href, recipient });
    window.location.href = href;
  }
  return (
    <form id="contact-form" onSubmit={submit}>
      <div className="row g-3 field-grid">
        <div className="contact-field col-md-6">
          <label htmlFor="contactName" className="form-label">
            Your name <span>*</span>
          </label>
          <input
            className="form-control"
            id="contactName"
            name="name"
            autoComplete="name"
            placeholder="What should we call you?"
            required
            maxLength={100}
          />
        </div>
        <div className="contact-field col-md-6">
          <label htmlFor="contactEmail" className="form-label">
            Email address <span>*</span>
          </label>
          <input
            className="form-control"
            id="contactEmail"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
          />
        </div>
        <div className="contact-field col-md-6">
          <label htmlFor="contactPhone" className="form-label">
            Phone number <small>(optional)</small>
          </label>
          <input
            className="form-control"
            id="contactPhone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your contact number"
            maxLength={30}
          />
        </div>
        <div className="contact-field col-md-6">
          <label htmlFor="contactSubject" className="form-label">
            What’s it about? <span>*</span>
          </label>
          <select
            className="form-select"
            id="contactSubject"
            name="subject"
            required
            defaultValue=""
          >
            <option value="">Choose a topic</option>
            {[
              'General inquiry',
              'Booking support',
              'Safety concern',
              'Partnership',
              'Feedback',
            ].map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </div>
        <div className="contact-field full-field col-12">
          <label htmlFor="contactMessage" className="form-label">
            Your message <span>*</span>
          </label>
          <textarea
            className="form-control"
            id="contactMessage"
            name="message"
            placeholder="Start wherever you like…"
            rows={5}
            required
            maxLength={4000}
            aria-describedby="message-hint"
          />
          <small id="message-hint">
            Please leave out passwords, payment details, and sensitive personal information.
          </small>
        </div>
      </div>
      <p className="email-explainer">
        This opens a draft in your email app. Review it and press send there.
      </p>
      <button className="dating-button btn" type="submit">
        Prepare my email <span>↗</span>
      </button>
      <div role="status" aria-live="polite">
        {draft && (
          <>
            <p id="contact-status">
              Your email draft is ready. Send it from your email app to complete your message. If
              your app does not open, use the draft link below or email {draft.recipient} directly.
            </p>
            <a id="email-fallback" href={draft.href}>
              Open email draft again ↗
            </a>
          </>
        )}
      </div>
      <p className="privacy-note">
        Your message stays in your browser until you send it from your email app. Read our{' '}
        <Link href="/privacy-policy">privacy policy</Link>.
      </p>
    </form>
  );
}
