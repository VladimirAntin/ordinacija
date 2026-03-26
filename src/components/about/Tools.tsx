'use client';
import {memo} from 'react';
import {toolItems} from '@components/data/tools';
import Icon from '@icons/Icon';
import {useTranslation} from 'react-i18next';

const Tools = () => {
  const {t} = useTranslation();
  return (
    <div className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-800">
      <h3 className="mb-8 text-center text-2xl dark:text-white">{t('Alati & Tehnologije')}</h3>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {toolItems.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-gray-900">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <Icon
                name={tool.icon}
                width={24}
                height={24}
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Tools);
