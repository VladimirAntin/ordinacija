'use client';
import {caseStudies} from '../data/portfolio';
import ArrowIcon from '@icons/ArrowIcon';
import {memo} from 'react';
import Link from 'next/link';
import {useTranslation} from 'react-i18next';

const Portfolio = () => {
  const {t} = useTranslation();
  return (
    <section
      id={'galerija'}
      className={'bg-white py-24 dark:bg-gray-800'}>
      <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
        {/* Header */}
        <div
          className={
            'mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end'
          }>
          <div>
            <span
              className={
                'text-primary dark:text-accent-dark mb-2 inline-block text-sm font-semibold tracking-widest uppercase'
              }>
              {t('Pre & Posle')}
            </span>
            <h2 className={'text-4xl sm:text-5xl dark:text-white'}>{t('Galerija Tretmana')}</h2>
          </div>
          <Link
            href={'/gallery'}
            className={
              'group border-primary text-primary hover:bg-primary dark:border-accent-dark dark:text-accent-dark dark:hover:bg-primary inline-flex shrink-0 items-center gap-2 rounded-full border-2 px-6 py-2.5 text-sm font-medium transition hover:text-white dark:hover:text-white'
            }>
            {t('Cela Galerija')}
            <ArrowIcon
              className={'rotate-90 transition-transform group-hover:translate-x-1'}
              width={15}
              height={15}
            />
          </Link>
        </div>

        {/* Images-only grid */}
        <div className={'grid grid-cols-2 gap-3 lg:grid-cols-3'}>
          {caseStudies.map(study => (
            <Link
              key={study.id}
              href={'/gallery'}
              className={
                'group relative block overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-700'
              }
              style={{aspectRatio: '4/3'}}>
              <img
                src={study.thumbnail}
                alt={study.title}
                className={
                  'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                }
              />
              {/* Hover overlay */}
              <div
                className={
                  'absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/70 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                }>
                <span
                  className={'mb-0.5 text-xs font-medium tracking-wider text-white/70 uppercase'}>
                  {t(study.category)}
                </span>
                <p className={'text-sm font-semibold text-white'}>{t(study.title)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);
