import PageShell from '@/components/layout/PageShell';
import Hero from '@/components/contact/Hero';
import ContactDetails from '@/components/contact/ContactDetails';
import SafetyNote from '@/components/contact/SafetyNote';
import SocialLinks from '@/components/contact/SocialLinks';

export const metadata = {
  title: 'Say hello — Lunara',
  description:
    'Say hello to Lunara. Contact us for support, feedback, booking questions, and partnerships.',
};

export default function Page() {
  return (
    <PageShell className="creative-home dating-home contact-page">
      <main>
        <Hero />
        <ContactDetails />
        <SafetyNote />
        <SocialLinks />
      </main>
    </PageShell>
  );
}
