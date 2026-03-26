'use client';
import {memo} from 'react';
import {servicesItems} from '@components/data/services';
import Icon from '@icons/Icon';
import {useTranslation} from 'react-i18next';
import {cn} from '@utils/CN';

const Services = () => {
  const {t} = useTranslation();
  return (
    <section
      id="services"
      className="bg-slate-50 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-primary dark:text-accent-dark mb-3 inline-block text-sm font-semibold tracking-widest uppercase">
            {t('Usluge')}
          </span>
          <h2 className="mb-4 text-4xl sm:text-5xl dark:text-white">{t('Naše Usluge')}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            {t('Kompletan spektar stomatoloških usluga za celu porodicu')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {servicesItems.map((service, index) => (
            <div
              key={index}
              className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
              {/* Icon */}
              <div
                className={cn(
                  `flex h-12 w-12 shrink-0 items-center justify-center rounded-xl`,
                  service.iconContainerClassName,
                )}>
                <Icon
                  name={service.iconName!}
                  width={24}
                  height={24}
                  className="fill-current"
                />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className={cn(`mb-1.5 text-lg font-semibold`, service.textClassName)}>
                  {t(service.title)}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {t(service.description)}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-gray-50 px-2.5 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                      {t(feature)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
