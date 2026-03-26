'use client';
import {memo} from 'react';
import Link from 'next/link';
import {cn} from '@utils/CN';
import {packages} from '@components/data/packages';
import Icon from '@icons/Icon';
import ArrowIcon from '@icons/ArrowIcon';
import {useTranslation} from 'react-i18next';

const Packages = () => {
  const {t} = useTranslation();
  return (
    <section
      id="packages"
      className="bg-slate-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-primary dark:text-accent-dark mb-3 inline-block text-sm font-semibold tracking-widest uppercase">
            {t('Tretmani')}
          </span>
          <h2 className="mb-4 text-4xl sm:text-5xl dark:text-white">{t('Paketi & Cene')}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            {t(
              'Transparentne cene bez skrivenih troškova — izaberi paket koji odgovara vašim potrebama',
            )}
          </p>
        </div>

        {/* Horizontal rows */}
        <div className="space-y-4">
          {packages.map((pkg, index) => (
            <Link
              key={index}
              href={{hash: 'contact', query: {package: pkg.title}}}
              className={cn(
                'group relative flex flex-col gap-6 rounded-2xl border-2 p-6 transition-all duration-300 sm:flex-row sm:items-center',
                pkg.highlighted
                  ? 'border-primary bg-primary shadow-primary/20 shadow-lg'
                  : 'hover:border-primary/40 border-gray-100 bg-white hover:shadow-md dark:border-gray-700 dark:bg-gray-800',
              )}>
              {/* Badge */}
              {pkg.priceNote && (
                <div className="absolute -top-3 right-6">
                  <span className="rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold text-amber-900 shadow-sm">
                    ⭐ {t(pkg.priceNote)}
                  </span>
                </div>
              )}

              {/* Icon + title */}
              <div className="flex shrink-0 items-center gap-4 sm:w-52">
                {pkg.iconName && (
                  <div
                    className={cn('flex h-10 w-10 items-center justify-center rounded-xl', {
                      'bg-white/20': pkg.highlighted,
                      'bg-accent dark:bg-primary/20': !pkg.highlighted,
                    })}>
                    <Icon
                      name={pkg.iconName}
                      width={20}
                      height={20}
                      className={
                        pkg.highlighted ? 'fill-white' : 'fill-primary dark:fill-accent-dark'
                      }
                    />
                  </div>
                )}
                <div>
                  <p
                    className={cn('leading-tight font-semibold', {
                      'text-white': pkg.highlighted,
                      'text-gray-900 dark:text-white': !pkg.highlighted,
                    })}>
                    {t(pkg.title)}
                  </p>
                  <p
                    className={cn('text-xs', {
                      'text-white/70': pkg.highlighted,
                      'text-gray-400 dark:text-gray-500': !pkg.highlighted,
                    })}>
                    {t(pkg.subtitle)}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div
                className={cn('hidden h-12 w-px sm:block', {
                  'bg-white/20': pkg.highlighted,
                  'bg-gray-100 dark:bg-gray-700': !pkg.highlighted,
                })}
              />

              {/* Features */}
              <ul className="flex flex-1 flex-wrap gap-x-6 gap-y-1">
                {pkg.features.slice(0, 4).map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-1.5 text-xs">
                    <span
                      className={cn('h-1 w-1 rounded-full', {
                        'bg-accent-dark': pkg.highlighted,
                        'bg-primary dark:bg-accent-dark': !pkg.highlighted,
                      })}
                    />
                    <span
                      className={cn({
                        'text-white/80': pkg.highlighted,
                        'text-gray-500 dark:text-gray-400': !pkg.highlighted,
                      })}>
                      {t(f)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end">
                <span
                  className={cn('text-2xl font-light', {
                    'text-white': pkg.highlighted,
                    'text-gray-900 dark:text-white': !pkg.highlighted,
                  })}>
                  {t(pkg.price)}
                </span>
                <div
                  className={cn(
                    'flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all',
                    {
                      'text-primary group-hover:bg-accent bg-white': pkg.highlighted,
                      'bg-primary group-hover:bg-primary-dark text-white': !pkg.highlighted,
                    },
                  )}>
                  {t(pkg.cta)}
                  <ArrowIcon
                    width={14}
                    height={14}
                    className="rotate-90 transition-transform group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Packages);
