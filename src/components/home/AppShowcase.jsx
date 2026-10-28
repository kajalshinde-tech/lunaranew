'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const screens = [
  {
    id: 'privacy',
    icon: 'bi-shield-lock',
    label: 'Venue privacy',
    title: 'A little mystery. More control.',
    description:
      'Turn on Secret Venue to keep the venue name and image hidden from the public feed until you approve a request.',
    image: '/images/app/secret-venue.png',
    alt: 'Lunara Plan Hub with Secret Venue enabled and a public visibility setting',
    note: 'Your venue. Your choice.',
    detail: 'Public, private, or both — choose how your plan is shared.',
    color: 'lilac',
  },
  {
    id: 'payments',
    icon: 'bi-wallet2',
    label: 'Split payments',
    title: 'Make the plan. Share the cost.',
    description:
      'Choose to pay for both tickets or split the payment. See your share before posting your plan to the live feed.',
    image: '/images/app/find-partner-split.png',
    alt: 'Post to Find Partner screen with Split it selected and an itemized ticket payment summary',
    note: 'Clear costs. Shared plans.',
    detail: 'Food and drink preferences help you find the right company.',
    color: 'pink',
  },
  {
    id: 'invites',
    icon: 'bi-person-plus',
    label: 'Private planning',
    title: 'Good company, by invitation.',
    description:
      'Keep a plan private, select food and drink preferences, and invite the people you want to spend time with.',
    image: '/images/app/plan-hub-private.png',
    alt: 'Private Plan Hub with split payment, food and drink preferences, and profile invitations',
    note: 'Your people. Your plan.',
    detail: 'Invite profiles directly, or make your plan public when you’re ready.',
    color: 'lilac',
  },
  {
    id: 'charges',
    icon: 'bi-ticket-perforated',
    label: 'Venue charges',
    title: 'Know the details before you go.',
    description:
      'See the venue entry and cover-charge notice before posting. Applicable cover charges are paid directly at the venue on arrival.',
    image: '/images/app/venue-cover-charges.png',
    alt: 'Plan Hub showing venue entry and cover-charge information above the post plan button',
    note: 'A little clarity goes a long way.',
    detail: 'Venue management sets cover charges; the app explains how they apply.',
    color: 'cream',
  },
];

export default function AppShowcase() {
  const [selected, setSelected] = useState(0);
  const dialog = useRef(null);
  const section = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(false);
  const running = playing && inView && pageVisible && !previewOpen;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(section.current);
    const syncVisibility = () => setPageVisible(!document.hidden);
    syncVisibility();
    document.addEventListener('visibilitychange', syncVisibility);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncVisibility);
    };
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(
      () => setSelected((current) => (current + 1) % screens.length),
      4500,
    );
    return () => window.clearTimeout(timer);
  }, [selected, running]);

  function openPreview() {
    setPreviewOpen(true);
    dialog.current.showModal();
  }
  const screen = screens[selected];
  return (
    <section
      ref={section}
      className="app-showcase"
      id="app-features"
      aria-labelledby="app-showcase-title"
      aria-roledescription="carousel"
    >
      <div className="app-showcase-heading">
        <div>
          <span className="dating-kicker">LUNARA, IN YOUR HANDS</span>
          <h2 id="app-showcase-title">
            Real plans.
            <br />
            <em>Your kind of control.</em>
          </h2>
        </div>
        <p>
          Privacy, payments, and your people.
          <br />
          The little details that make a good plan feel easy.
        </p>
      </div>
      <div className={`app-showcase-stage app-stage-${screen.color}`}>
        <div className="app-feature-options">
          <span className="app-section-label">MOBILE APP EXCLUSIVES</span>
          <div className="app-feature-buttons" aria-label="Choose an app feature">
            {screens.map((item, index) => (
              <button
                type="button"
                className={`app-feature-option ${index === selected ? 'is-selected' : ''}`}
                key={item.id}
                aria-pressed={index === selected}
                aria-controls="app-screen-preview"
                onClick={() => setSelected(index)}
              >
                <span className="app-option-icon">
                  <i className={`bi ${item.icon}`} aria-hidden="true" />
                </span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{index === selected ? item.description : item.title}</small>
                </span>
                <span className="app-option-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            ))}
          </div>
          <div className="app-mobile-caption" aria-live={playing ? 'off' : 'polite'}>
            <div key={screen.id} className="app-caption-content">
              <strong>{screen.title}</strong>
              <p>{screen.description}</p>
            </div>
          </div>
          <button
            type="button"
            className="app-carousel-a11y-pause"
            onClick={() => setPlaying((current) => !current)}
          >
            {playing ? 'Pause feature slideshow' : 'Play feature slideshow'}
          </button>
          <Link className="text-link app-booking-link" href="/booking">
            Explore booking &amp; matching ↗
          </Link>
        </div>
        <div className="app-preview-area" id="app-screen-preview">
          <span className="app-orbit app-orbit-one" aria-hidden="true" />
          <span className="app-orbit app-orbit-two" aria-hidden="true" />
          <span className="app-preview-star" aria-hidden="true">
            ✳
          </span>
          <div className="app-device">
            <div className="app-device-top">
              <span />
              <small>LUNARA / PLAN HUB</small>
              <span />
            </div>
            <button
              type="button"
              className="app-screen-button"
              onClick={openPreview}
              aria-label={`Enlarge ${screen.label} screenshot`}
            >
              <span className="app-screen-stack">
                {screens.map((item, index) => (
                  <img
                    key={item.id}
                    className={`app-screen-image ${index === selected ? 'is-active' : ''}`}
                    src={item.image}
                    alt={index === selected ? item.alt : ''}
                    aria-hidden={index !== selected}
                    width="438"
                    height="889"
                    loading="lazy"
                  />
                ))}
              </span>
            </button>
            <div className="app-device-bottom">
              <span />
            </div>
          </div>
          <div className="app-preview-note">
            <span aria-hidden="true">♡</span>
            <span key={screen.id} className="app-note-content">
              {screen.note}
            </span>
          </div>
          <button type="button" className="app-enlarge" onClick={openPreview}>
            <i className="bi bi-arrows-angle-expand" aria-hidden="true" /> View full screen
          </button>
        </div>
      </div>
      <div className="app-showcase-foot">
        <p>
          <i className="bi bi-patch-check" aria-hidden="true" />
          <span>
            <strong>AI Image Check</strong> Advanced AI validation helps detect fake, AI-generated,
            or inappropriate content.
          </span>
        </p>
        <small>App screens supplied by Lunara. Prices shown are examples from these screens.</small>
      </div>
      <dialog
        ref={dialog}
        onClose={() => setPreviewOpen(false)}
        className="app-screen-dialog"
        aria-labelledby="app-dialog-title"
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close();
        }}
      >
        <div className="app-dialog-header">
          <h3 id="app-dialog-title">{screen.label}</h3>
          <button
            type="button"
            onClick={() => dialog.current.close()}
            aria-label="Close screenshot"
          >
            ×
          </button>
        </div>
        <img src={screen.image} alt={screen.alt} width="438" height="889" />
        <p>{screen.detail}</p>
      </dialog>
    </section>
  );
}
