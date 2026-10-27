import PageShell from '@/components/layout/PageShell';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | LUNARA',
  description: 'Privacy Policy for LUNARA — Learn how we protect your data and privacy.',
};

export default function Page() {
  return (
    <PageShell className="legacy-page">
      <main>
        <section className="page-header">
          <div className="container text-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-3">
                <li className="breadcrumb-item">
                  <Link href="/">{'Home'}</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {'Privacy Policy'}
                </li>
              </ol>
            </nav>
            <h1 className="animate-on-scroll">
              {'Privacy '}
              <span className="text-hollow">{'Policy'}</span>
            </h1>
            <p className="animate-on-scroll">{'Last Updated: April 2026'}</p>
          </div>
        </section>
        <main
          className="legal-content container mt-0 pt-5"
          style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '80px' }}
        >
          <div
            className="legal-card animate-on-scroll"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '24px',
              padding: '3rem',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div className="legal-section">
              <h3>{'1. Information We Collect'}</h3>
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
            </div>
            <div className="legal-section">
              <h3>{'2. How We Use Information'}</h3>
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
            </div>
            <div className="legal-section">
              <h3>{'3. Data Security'}</h3>
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
            </div>
            <div className="legal-section">
              <h3>{'4. Information We Share'}</h3>
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
            </div>
            <div className="legal-section">
              <h3>{'5. Contact Us'}</h3>
              <p>
                {'If you have any questions about this Privacy Policy, please contact us at '}
                <a href="mailto:privacy@lunara.buzz" className="text-neon-pink">
                  {'privacy@lunara.buzz'}
                </a>
                {'.'}
              </p>
            </div>
          </div>
        </main>
      </main>
    </PageShell>
  );
}
