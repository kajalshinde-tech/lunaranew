import PageShell from '@/components/layout/PageShell';
import SourceSections from '@/components/content/SourceSections';
import referenceContent from '@/content/index.json';
import Hero from '@/components/home/Hero';
import AppShowcase from '@/components/home/AppShowcase';
import PremiumTiers from '@/components/home/PremiumTiers';
import ExploreDetails from '@/components/home/ExploreDetails';
import ConnectionRibbon from '@/components/home/ConnectionRibbon';
import Discover from '@/components/home/Discover';
import HowItWorks from '@/components/home/HowItWorks';
import Safety from '@/components/home/Safety';

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
        <div className="home-reference-content compact-dating">
          <section className="ref-home-content" aria-label="Featured venues and app features">
            <SourceSections sections={[referenceContent[3]]} />
            <AppShowcase />
            <PremiumTiers />
          </section>
          <ExploreDetails />
        </div>
      </main>
    </PageShell>
  );
}
