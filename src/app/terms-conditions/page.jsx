import PageShell from '@/components/layout/PageShell';
import Link from 'next/link';
import document from '@/content/terms-document.json';
export const metadata = {
  title: 'Terms & Conditions — Lunara',
  description:
    'The complete Terms & Conditions governing Lunara, powered by SSKL WORLD, including platform use, safety, bookings, payments, and jurisdiction.',
};
function Blocks({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === 'list') {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag key={index} type={block.ordered ? block.style : undefined}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </Tag>
      );
    }
    return (
      <p key={index} className={block.emphasis ? 'terms-emphasis' : undefined}>
        {block.text === 'Email: support@lunara.buzz' ? (
          <>
            Email: <a href="mailto:support@lunara.buzz">support@lunara.buzz</a>
          </>
        ) : block.text === 'Support: +91 78238 17313' ? (
          <>
            Support: <a href="tel:+917823817313">+91 78238 17313</a>
          </>
        ) : (
          block.text
        )}
      </p>
    );
  });
}
export default function TermsPage() {
  return (
    <PageShell className="creative-home dating-home compact-dating privacy-page terms-page">
      <main>
        <header className="privacy-hero">
          <div>
            <span className="dating-kicker">LUNARA · POWERED BY SSKL WORLD</span>
            <h1>
              Terms &amp; <em>Conditions.</em>
            </h1>
            <p>The terms governing access to and use of the Lunara platform.</p>
            <span className="privacy-updated">
              <i className="bi bi-geo-alt" aria-hidden="true" />
              Pune, Maharashtra, India
            </span>
          </div>
          <div className="privacy-hero-art" aria-hidden="true">
            <span className="privacy-orbit" />
            <span className="privacy-shield">
              <i className="bi bi-journal-check" />
            </span>
            <span className="privacy-heart">
              <i className="bi bi-check2" />
            </span>
            <span className="privacy-spark">✳</span>
          </div>
        </header>
        <div className="privacy-layout">
          <aside className="privacy-sidebar">
            <nav aria-label="Terms and conditions sections">
              <span className="dating-kicker">
                ON THIS PAGE · {document.sections.length} SECTIONS
              </span>
              <a href="#terms-introduction">
                <i className="bi bi-file-earmark-text" aria-hidden="true" />
                <span>Introduction</span>
              </a>
              {document.sections.map((section, index) => (
                <a key={section.id} href={'#' + section.id}>
                  <span className="terms-nav-number">{String(index + 1).padStart(2, '0')}</span>
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </aside>
          <article className="privacy-document" aria-label="Complete Terms and Conditions">
            <section className="privacy-section" id="terms-introduction">
              <h2>{document.title}</h2>
              <div className="terms-source-metadata">
                {document.metadata.map((line, index) => (
                  <p key={index}>{line.text}</p>
                ))}
              </div>
              <Blocks blocks={document.introduction} />
            </section>
            {document.sections.map((section, index) => (
              <section className="privacy-section" id={section.id} key={section.id}>
                <h2>
                  <span className="terms-heading-number">{index + 1}.</span> {section.title}
                </h2>
                <Blocks blocks={section.blocks} />
              </section>
            ))}
          </article>
        </div>
        <div className="privacy-bottom">
          <span>
            <i className="bi bi-journal-text" aria-hidden="true" />
            Related Lunara policies
          </span>
          <div>
            <Link href="/privacy-policy">Privacy Policy ↗</Link>
            <Link href="/community-guidelines">Community Guidelines ↗</Link>
            <Link href="/contact">Contact us ↗</Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
