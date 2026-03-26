import Contact from '@/components/Contact';
import type {Metadata} from 'next';
import AboutSection from '@components/about/AboutSection';
import Team from '@components/about/Team';

export const metadata: Metadata = {
  title: 'About Us — DentaVita Dental Practice | Belgrade',
  description:
    'Meet the DentaVita team — a modern dental practice in Belgrade with 15+ years of experience. Learn about our doctors and approach to dental care.',
  alternates: {canonical: 'https://ordinacija.hok.rs/about'},
  openGraph: {
    title: 'About Us — DentaVita | Dental Practice Belgrade',
    description: 'Meet the DentaVita dental team — specialists committed to your health and smile.',
    url: 'https://ordinacija.hok.rs/about',
  },
};

const About = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <AboutSection />
      <Team />
      <Contact />
    </main>
  );
};

export default About;
