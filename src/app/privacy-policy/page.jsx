import PageShell from '@/components/layout/PageShell';
import Link from 'next/link';
export const metadata = {
  title: 'Privacy Policy — Lunara',
  description: 'Learn how Lunara collects, uses, protects, and shares your information.',
};
const contents = [
  ['information-collected', 'Information we collect', 'bi-person-vcard'],
  ['information-use', 'How we use information', 'bi-sliders'],
  ['data-security', 'Data security', 'bi-shield-lock'],
  ['information-sharing', 'Information we share', 'bi-people'],
  ['privacy-contact', 'Contact us', 'bi-envelope'],
];
export default function Page() {
  return (
    <PageShell className="creative-home dating-home compact-dating privacy-page">
      <main>
        <header className="privacy-hero">
          <div>
            <span className="dating-kicker">YOUR INFORMATION. YOUR PEACE OF MIND.</span>
            <h1>
              Privacy <em>Policy.</em>
            </h1>
            <p>How we collect, use, protect, and share your information.</p>
            <span className="privacy-updated">
              <i className="bi bi-calendar3" aria-hidden="true" />
              Last updated: April 2026
            </span>
          </div>
          <div className="privacy-hero-art" aria-hidden="true">
            <span className="privacy-orbit" />
            <span className="privacy-shield">
              <i className="bi bi-shield-lock" />
            </span>
            <span className="privacy-heart">
              <i className="bi bi-heart" />
            </span>
            <span className="privacy-spark">✳</span>
          </div>
        </header>
        <div className="privacy-layout">
          <aside className="privacy-sidebar">
            <nav aria-label="Privacy policy sections">
              <span className="dating-kicker">ON THIS PAGE</span>
              {contents.map(([id, label, icon], index) => (
                <a href={'#' + id} key={id}>
                  <i className={'bi ' + icon} aria-hidden="true" />
                  <span>{label}</span>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                </a>
              ))}
            </nav>
            <div className="privacy-help">
              <i className="bi bi-chat-heart" aria-hidden="true" />
              <h2>Questions about privacy?</h2>
              <p>We’re here to help you understand this policy.</p>
              <a href="mailto:support@lunara.buzz">
                support@lunara.buzz <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>
          <article className="privacy-document" aria-label="Privacy policy">
            <section className="privacy-section" id="information-collected">
              <h2>{'1. Information We Collect'}</h2>
              <p>
                {
                  'LUNARA collects information to provide better services to all our users. We collect information in the\n          following ways:'
                }
              </p>
              <ul>
                <li>
                  <strong>{'Information you give us:'}</strong>
                  {
                    ' When you sign up for an account, we ask for personal information\n            like your name, email address, telephone number, and payment details.'
                  }
                </li>
                <li>
                  <strong>{'Information we get from your use of our services:'}</strong>
                  {
                    ' We collect information about the\n            services that you use and how you use them, like when you visit a venue or interact with our content.'
                  }
                </li>
              </ul>
            </section>
            <section className="privacy-section" id="information-use">
              <h2>{'2. How We Use Information'}</h2>
              <p>
                {
                  'We use the information we collect from all our services to provide, maintain, protect and improve them, to\n          develop new ones, and to protect LUNARA and our users.'
                }
              </p>
              <p>
                {
                  'We also use this information to offer you tailored content – like giving you more relevant search results and\n          ads.'
                }
              </p>
            </section>
            <section className="privacy-section" id="data-security">
              <h2>{'3. Data Security'}</h2>
              <p>
                {
                  'We work hard to protect LUNARA and our users from unauthorized access to or unauthorized alteration,\n          disclosure or destruction of information we hold.'
                }
              </p>
              <ul>
                <li>{'We encrypt many of our services using SSL.'}</li>
                <li>
                  {
                    'We review our information collection, storage and processing practices, including physical security\n            measures, to guard against unauthorized access to systems.'
                  }
                </li>
              </ul>
            </section>
            <section className="privacy-section" id="information-sharing">
              <h2>{'4. Information We Share'}</h2>
              <p>
                {
                  'We do not share personal information with companies, organizations and individuals outside of LUNARA unless\n          one of the following circumstances applies:'
                }
              </p>
              <ul>
                <li>{'With your consent.'}</li>
                <li>{'For external processing.'}</li>
                <li>{'For legal reasons.'}</li>
              </ul>
            </section>
            <section className="privacy-section" id="privacy-contact">
              <h2>{'5. Contact Us'}</h2>
              <p>
                {'If you have any questions about this Privacy Policy, please contact us at '}
                <a href="mailto:support@lunara.buzz">{'support@lunara.buzz'}</a>
                {'.'}
              </p>
            </section>
          </article>
        </div>
        <div className="privacy-bottom">
          <span>
            <i className="bi bi-journal-text" aria-hidden="true" />
            More about using Lunara
          </span>
          <div>
            <Link href="/terms-conditions">Terms &amp; Conditions ↗</Link>
            <Link href="/community-guidelines">Community Guidelines ↗</Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
