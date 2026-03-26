import Link from 'next/link';
import Image from 'next/image';
import {caseStudies} from '@/components/data/portfolio';
import ArrowIcon from '@/icons/ArrowIcon';
import type {Metadata} from 'next';

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

const BASE_URL = 'https://ordinacija.hok.rs';

const categoryColors: Record<string, string> = {
  'Estetska Stomatologija': 'bg-accent text-primary dark:bg-primary/20 dark:text-accent-dark',
  'Oralna Hirurgija & Implantati': 'bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300',
  'Ortodoncija': 'bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
  'Protetika & Mostovi': 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  'Parodontologija': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
};

export default function GalleryPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {type: 'ListItem', position: 1, name: 'Home', item: BASE_URL},
      {type: 'ListItem', position: 2, name: 'Gallery', item: `${BASE_URL}/gallery`},
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24 dark:bg-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd)}}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-1 text-sm text-gray-500 transition hover:text-primary dark:text-gray-400 dark:hover:text-accent-dark">
            <ArrowIcon width={14} height={14} className="-rotate-90 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
          <span className="mb-3 block text-sm font-semibold uppercase tracking-widest text-primary dark:text-accent-dark">
            Before &amp; After
          </span>
          <h1 className="mb-4 text-5xl sm:text-6xl dark:text-white">Treatment Gallery</h1>
          <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            Real results from our patients. Each case study includes the treatment approach, timeline and outcome.
          </p>
        </div>

        {/* Case studies */}
        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Images */}
                <div className="relative h-72 w-full overflow-hidden lg:h-auto lg:w-5/12">
                  <Image
                    src={study.thumbnail}
                    alt={`${study.title} — ${study.category}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Before/After thumbnails */}
                  {study.images.length > 1 && (
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      {study.images.slice(0, 3).map((img, i) => (
                        <div key={i} className="relative h-12 w-16 overflow-hidden rounded-lg border-2 border-white shadow">
                          <Image src={img} alt="" fill sizes="64px" className="object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
                  {/* Category + meta */}
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${categoryColors[study.category] ?? 'bg-gray-100 text-gray-600'}`}>
                      {study.category}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{study.duration} · {study.year}</span>
                  </div>

                  <h2 className="mb-3 text-2xl font-semibold dark:text-white">{study.title}</h2>
                  <p className="mb-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{study.description}</p>

                  {/* Problem / Solution */}
                  <div className="mb-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-4 dark:bg-gray-700/50">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Izazov</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{study.problem}</p>
                    </div>
                    <div className="rounded-xl bg-accent/60 p-4 dark:bg-primary/10">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary dark:text-accent-dark">Rešenje</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Rezultati</p>
                    <ul className="space-y-1">
                      {study.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-accent-dark" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {study.technologies.map(tech => (
                      <span key={tech} className="rounded-full border border-primary/15 bg-accent/50 px-2.5 py-0.5 text-xs text-primary dark:border-primary/30 dark:bg-primary/10 dark:text-accent-dark">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consent note */}
        <div className="mt-12 flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <span className="shrink-0 text-2xl">✅</span>
          <div>
            <p className="mb-1 font-semibold text-gray-800 dark:text-white">All cases published with patient consent</p>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Photos are published exclusively with written patient consent. Patient identity remains strictly confidential. Contact us for more information about any specific treatment.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-gray-500 dark:text-gray-400">Interested in a similar treatment?</p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-white transition hover:bg-primary-dark">
            Book a Consultation
            <ArrowIcon width={18} height={18} className="rotate-90 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}

