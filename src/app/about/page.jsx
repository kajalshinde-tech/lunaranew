import PageShell from '@/components/layout/PageShell';
import Hero from '@/components/about/Hero';
import ConnectionRibbon from '@/components/about/ConnectionRibbon';
import OurStory from '@/components/about/OurStory';
import Belief from '@/components/about/Belief';
import Values from '@/components/about/Values';
import Care from '@/components/about/Care';
import CallToAction from '@/components/about/CallToAction';

export const metadata = {
  title: 'Our story — Lunara',
  description:
    'Meet Lunara. We believe the best connections start when you can be yourself. Discover our story and what matters to us.',
};

export default function Page() {
  return (
    <PageShell className="creative-home dating-home about-page">
      <main>
        <Hero />
        <ConnectionRibbon />
        <OurStory />
        <Belief />
        <Values />
        <Care />
        <CallToAction />
      </main>
    </PageShell>
  );
}
