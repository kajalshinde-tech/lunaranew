import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
export default function NotFound() {
  return (
    <PageShell className="creative-home dating-home">
      <main className="dating-cta">
        <span className="dating-kicker">A LITTLE LOST?</span>
        <h1>Let’s reconnect.</h1>
        <p>We couldn’t find that page.</p>
        <Link className="dating-button" href="/">
          Back to Lunara ↗
        </Link>
      </main>
    </PageShell>
  );
}
