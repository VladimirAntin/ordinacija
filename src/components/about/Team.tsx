'use client';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';

const teamMembers = [
  {
    name: 'Dr. Mario Đorđević',
    role: 'Specijalista Estetske Stomatologije',
    roleKey: 'Specijalista Estetske Stomatologije',
    image: '/doctor.jpg',
    experience: '15',
    experienceLabel: 'god. iskustva',
    bio: 'Magistar stomatoloških nauka sa specijalizacijom iz estetske stomatologije. Ekspert za Zoom izbeljivanje, keramičke fasete i digitalni osmeh dizajn.',
  },
  {
    name: 'Dr. Stefan Nikolić',
    role: 'Oralni Hirurg & Implantolog',
    roleKey: 'Oralni Hirurg & Implantolog',
    image: '/doctor2.jpg',
    experience: '12',
    experienceLabel: 'god. iskustva',
    bio: 'Specijalista oralne hirurgije sa više od 600 uspešno ugrađenih implantata. Sertifikovan za Straumann i Nobel Biocare implant sisteme.',
  },
  {
    name: 'Dr. Ana Milić',
    role: 'Specijalista Ortodoncije',
    roleKey: 'Specijalista Ortodoncije',
    image: '/doctor3.jpg',
    experience: '10',
    experienceLabel: 'god. iskustva',
    bio: 'Ortodontista sa iskustvom u lečenju dece i odraslih pacijenata. Sertifikovani Invisalign provider i ekspert za Damon sistem.',
  },
];

const Team = () => {
  const {t} = useTranslation();
  return (
    <section className={"bg-slate-50 py-20 dark:bg-gray-900"}>
      <div className={"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        {/* Header */}
        <div className={"mb-14 text-center"}>
          <span className={"text-primary dark:text-accent-dark mb-3 inline-block text-sm font-semibold tracking-widest uppercase"}>
            {t('Tim')}
          </span>
          <h2 className={"mb-4 text-4xl sm:text-5xl dark:text-white"}>{t('Naš Tim')}</h2>
          <p className={"mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-400"}>
            {t('Stručnjaci predani vašem zdravlju i osmehu')}
          </p>
        </div>

        {/* Cards */}
        <div className={"grid gap-8 sm:grid-cols-2 lg:grid-cols-3"}>
          {teamMembers.map(member => (
            <div
              key={member.name}
              className={"overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"}>
              {/* Photo */}
              <div className={"relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700"}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={"h-full w-full object-cover object-top"}
                />
                {/* Experience badge */}
                <div className={"bg-primary/90 absolute right-3 bottom-3 rounded-xl border border-white/20 px-3 py-1.5 backdrop-blur-sm"}>
                  <span className={"text-lg font-bold text-white"}>{member.experience}</span>
                  <span className={"ml-1 text-xs text-white/80"}>{t(member.experienceLabel)}</span>
                </div>
              </div>

              {/* Info */}
              <div className={"p-6"}>
                <h3 className={"mb-1 text-lg font-semibold dark:text-white"}>{member.name}</h3>
                <p className={"text-primary dark:text-accent-dark mb-4 text-sm font-medium"}>
                  {t(member.roleKey)}
                </p>
                <p className={"text-sm leading-relaxed text-gray-500 dark:text-gray-400"}>
                  {t(member.bio)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Team);
