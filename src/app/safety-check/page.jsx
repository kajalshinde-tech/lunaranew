import PageShell from '@/components/layout/PageShell';
import Hero from '@/components/safety-check/Hero';
import TopicNavigation from '@/components/safety-check/TopicNavigation';
import SafetyGuide from '@/components/safety-check/SafetyGuide';
import Reminder from '@/components/safety-check/Reminder';
import Questions from '@/components/safety-check/Questions';
import Support from '@/components/safety-check/Support';
import Closing from '@/components/safety-check/Closing';

export const metadata = {
  title: 'Your safety, your pace — Lunara',
  description:
    'The Lunara Safety Hub. Practical tips for protecting your privacy, respecting boundaries, and meeting with confidence.',
};

export default function Page() {
  return (
    <PageShell className="creative-home dating-home safety-page">
      <main>
        <Hero />
        <TopicNavigation />
        <SafetyGuide />
        <Reminder />
        <Questions />
        <Support />
        <Closing />
      </main>
    </PageShell>
  );
}
