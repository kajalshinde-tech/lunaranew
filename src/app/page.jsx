import PageShell from '@/components/layout/PageShell';
import Hero from '@/components/home/Hero';
import ConnectionRibbon from '@/components/home/ConnectionRibbon';
import Discover from '@/components/home/Discover';
import HowItWorks from '@/components/home/HowItWorks';
import Safety from '@/components/home/Safety';
import CallToAction from '@/components/home/CallToAction';

export const metadata = {
  title: 'Lunara — A little spark. A real connection.',
  description:
    'Lunara. A little spark. A real connection. Meet your kind of people and turn a hello into something real.',
};

export default function Page() {
  return (
    <PageShell className="creative-home dating-home ">
      <main>
        <Hero />
        <ConnectionRibbon />
        <Discover />
        <HowItWorks />
        <Safety />
        <CallToAction />
      </main>
    </PageShell>
  );
}
