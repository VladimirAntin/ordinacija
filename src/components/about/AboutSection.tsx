'use client';
import {Trans, useTranslation} from 'react-i18next';
import Link from 'next/link';
import ArrowIcon from '@icons/ArrowIcon';
import {heroElements} from '@components/data/hero';
import {Fragment} from 'react';

const AboutSection = () => {
  const {t} = useTranslation();

  return (
    <section className="mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-4/5 max-w-sm overflow-hidden rounded-3xl shadow-2xl lg:mx-0">
            <img
              src="/doctor.jpg"
              alt="Dr. u DentaVita ordinaciji"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -right-4 -bottom-4 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-lg lg:right-auto lg:-left-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-0.5 text-xs text-gray-500 dark:text-gray-400">
              {t('Primamo pacijente')}
            </p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              <span className="text-sm font-semibold dark:text-white">{t('Pon–Sub ✦')}</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 space-y-6 lg:order-2">
          <div className="inline-block rounded-full border border-primary/20 bg-accent px-4 py-2 dark:border-primary/30 dark:bg-primary/10">
            <span className="text-sm font-medium text-primary dark:text-accent-dark">
              {t('O Ordinaciji')}
            </span>
          </div>

          <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl dark:text-white">
            <Trans
              i18nKey="Vaš osmeh je naša <0>misija</0> 🦷"
              components={[
                <span
                  key="name"
                  className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
                />,
              ]}
            />
          </h1>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <Trans
              i18nKey="DentaVita je moderna stomatološka ordinacija sa <0>15+ godina iskustva</0> u pružanju vrhunske stomatološke nege za celu porodicu."
              components={[
                <span
                  key="bold"
                  className="font-semibold text-gray-900 dark:text-white"
                />,
              ]}
            />
          </p>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <Trans
              i18nKey="Koristimo najsavremenije tehnologije i materijale kako bismo svakom pacijentu pružili <0>bezbolan, efikasan i dugotrajan</0> tretman prilagođen njegovim potrebama."
              components={[
                <span
                  key="bold"
                  className="font-semibold text-gray-900 dark:text-white"
                />,
              ]}
            />
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-white transition hover:bg-primary-dark">
              {t('Zakažite Pregled')}
              <ArrowIcon
                width={18}
                height={18}
                className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3.5 font-medium text-gray-700 transition hover:border-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-400">
              {t('Pogledaj Galeriju')}
              <ArrowIcon
                width={18}
                height={18}
                className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-gray-600 dark:text-gray-400">
        {heroElements.map((element, index) => (
          <Fragment key={'hero-elements-' + index}>
            <div className="text-center">
              <p className="mb-1 text-3xl dark:text-white">{element.value}</p>
              <div>{t(element.description)}</div>
            </div>
            {element?.pipe ? (
              <div className="hidden h-12 w-px bg-gray-300 sm:block dark:bg-gray-600" />
            ) : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
