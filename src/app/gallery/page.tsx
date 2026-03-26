import type {Metadata} from 'next';
import GalleryContent from '@components/gallery/GalleryContent';

export const metadata: Metadata = {
  title: 'Gallery — Before & After Treatments | DentaVita',
  description:
    'Browse real patient results — before and after dental treatments at DentaVita clinic in Belgrade. Aesthetic dentistry, implants, orthodontics and more.',
  alternates: {canonical: 'https://ordinacija.hok.rs/gallery'},
  openGraph: {
    title: 'Treatment Gallery — Before & After | DentaVita',
    description: 'Real patient results before and after dental treatments at DentaVita Belgrade.',
    url: 'https://ordinacija.hok.rs/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
