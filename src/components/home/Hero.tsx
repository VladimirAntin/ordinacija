'use client';
import {FC, Fragment, memo, ReactNode} from 'react';
import ArrowIcon from '@icons/ArrowIcon';
import Link from 'next/link';
import {heroElements} from '@components/data/hero';
import {Trans, useTranslation} from 'react-i18next';

const Highlight: FC<{children?: ReactNode}> = ({children}) => (
  <span className="text-accent-dark">{children}</span>
);

const Hero = () => {
  const {t} = useTranslation();
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Full-screen background */}
      <div className="absolute inset-0">
        <img
          src="/doctor.jpg"
          alt=""
          className="h-full w-full object-cover object-top"
        />
        <div className="via-primary-dark/75 absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-8 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="bg-accent-dark h-2 w-2 animate-pulse rounded-full" />
          <span className="text-sm font-medium text-white/90">{t('Stomatološka Ordinacija')}</span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-4xl leading-tight font-light text-white sm:text-5xl lg:text-7xl">
          <Trans
            i18nKey="Vaš osmeh je naša <0>strast i briga</0>"
            components={[<Highlight key="h" />]}
          />
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
          {t(
            'Moderna stomatološka ordinacija sa dugogodišnjom tradicijom i najnovijim tehnologijama. Pružamo vrhunsku negu za vaše zube i osmeh koji traje.',
          )}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#contact"
            className="group text-primary hover:bg-accent hover:text-primary-dark flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium shadow-lg transition">
            {t('Zakažite Pregled')}
            <ArrowIcon
              height={20}
              width={20}
              className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="tel:+381111234567"
            className="group flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/20">
            {t('Pozovite Nas')}
            <ArrowIcon
              height={20}
              width={20}
              className="rotate-90 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Stats bar at the bottom */}
      <div className="relative z-10 mt-auto w-full border-t border-white/10 bg-slate-900/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-0 divide-x divide-white/10 px-4">
          {heroElements.map((element, index) => (
            <Fragment key={'hero-stat-' + index}>
              <div className="flex-1 px-6 py-6 text-center">
                <div className="text-accent-dark mb-1 text-3xl font-light">{element.value}</div>
                <div className="text-sm text-white/60">{t(element.description)}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
