import Hero from '@components/home/Hero';
import Services from '@components/home/Services';
import Portfolio from '@components/home/Portfolio';
import Contact from '@/components/Contact';
import Packages from '@components/home/Packages';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'DentaVita — Stomatološka Ordinacija | Beograd, Srbija',
  description:
    'Moderna stomatološka ordinacija u Beogradu sa 15+ godina iskustva. Estetska stomatologija, dentalni implanti, oralna hirurgija i dečja stomatologija. Zakažite pregled online.',
  alternates: {canonical: 'https://ordinacija.hok.rs'},
  openGraph: {
    title: 'DentaVita — Stomatološka Ordinacija | Beograd',
    description:
      'Moderna stomatološka ordinacija u Beogradu. Estetska stomatologija, dentalni implanti, oralna hirurgija i dečja stomatologija.',
    url: 'https://ordinacija.hok.rs',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Packages />
      <Contact />
    </>
  );
}
