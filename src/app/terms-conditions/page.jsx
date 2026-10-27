import PageShell from '@/components/layout/PageShell';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | LUNARA',
  description: 'Terms & Conditions for LUNARA — Understand the rules of using our platform.',
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
                  {'Terms & Conditions'}
                </li>
              </ol>
            </nav>
            <h1 className="animate-on-scroll">
              {'Terms & '}
              <span className="text-hollow">{'Conditions'}</span>
            </h1>
            <p className="animate-on-scroll">{'Effective Date: April 2026'}</p>
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
              <h3>{'1. Acceptance of Terms'}</h3>
              <p>
                {
                  'By accessing or using LUNARA, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.'
                }
              </p>
            </div>
            <div className="legal-section">
              <h3>{'2. Use of Services'}</h3>
              <p>
                {
                  'You may use our services only as permitted by law. We may suspend or stop providing our services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.'
                }
              </p>
            </div>
            <div className="legal-section">
              <h3>{'3. User Accounts'}</h3>
              <p>
                {
                  'You may need a LUNARA account to use some of our services. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.'
                }
              </p>
            </div>
            <div className="legal-section">
              <h3>{'4. Booking and Payments'}</h3>
              <p>
                {
                  'All bookings made through LUNARA are subject to availability. Prices for our services are subject to change without notice. We reserve the right at any time to modify or discontinue the service without notice.'
                }
              </p>
            </div>
            <div className="legal-section">
              <h3>{'5. Limitation of Liability'}</h3>
              <p>
                {
                  'LUNARA will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.'
                }
              </p>
            </div>
            <div className="legal-section">
              <h3>{'6. Changes to Terms'}</h3>
              <p>
                {
                  'We may modify these terms or any additional terms that apply to a service to, for example, reflect changes to the law or changes to our services. You should look at the terms regularly.'
                }
              </p>
            </div>
          </div>
        </main>
      </main>
    </PageShell>
  );
}
