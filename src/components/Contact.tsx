'use client';
import {memo, Suspense} from 'react';
import {Controller, useForm} from 'react-hook-form';
import SendIcon from '@/icons/SendIcon';
import Link from 'next/link';
import {contactItems} from '@/components/data/contact';
import Icon from '@/icons/Icon';
import {useTranslation} from 'react-i18next';

const ContactForm = () => {
  const {t} = useTranslation();
  const {
    handleSubmit,
    control,
    formState: {isSubmitted},
  } = useForm<MailData>({
    defaultValues: {name: '', email: '', message: ''},
  });

  const onSubmit = (data: MailData) => {
    console.log('Submitting contact form with data:', data);
  };

  if (isSubmitted) {
    return (
      <div className={"flex h-full flex-col items-center justify-center py-16 text-center"}>
        <div className={"bg-accent dark:bg-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"}>
          <SendIcon
            height={28}
            width={28}
            className={"text-primary dark:text-accent-dark"}
          />
        </div>
        <h4 className={"mb-2 text-xl dark:text-white"}>{t('Uspešno poslato!')}</h4>
        <p className={"text-gray-500 dark:text-gray-400"}>
          {t('Javićemo vam se u najkraćem mogućem roku radi dogovora o terminu.')}
        </p>
      </div>
    );
  }

  return (
    <form
      className={"space-y-4"}
      onSubmit={handleSubmit(onSubmit)}>
      <div className={"grid gap-4 sm:grid-cols-2"}>
        <Controller
          name={"name"}
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <div>
              <label className={"mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"}>
                {t('Ime i prezime *')}
              </label>
              <input
                {...field}
                className={"focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:ring-2 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"}
                placeholder={t('Vaše ime')}
              />
            </div>
          )}
        />
        <Controller
          name={"email"}
          control={control}
          rules={{required: true}}
          render={({field}) => (
            <div>
              <label className={"mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"}>
                {t('Email adresa *')}
              </label>
              <input
                {...field}
                type={"email"}
                className={"focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:ring-2 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"}
                placeholder={t('vas@email.com')}
              />
            </div>
          )}
        />
      </div>
      <Controller
        name={"message"}
        control={control}
        rules={{required: true}}
        render={({field}) => (
          <div>
            <label className={"mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"}>
              {t('Poruka *')}
            </label>
            <textarea
              {...field}
              rows={5}
              className={"focus:border-primary focus:ring-primary/20 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:ring-2 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"}
              placeholder={t('Opišite vaš problem, upit ili željeni termin...')}
            />
          </div>
        )}
      />
      <button
        type={"submit"}
        className={"group bg-primary hover:bg-primary-dark flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition"}>
        {t('Pošalji Poruku')}
        <SendIcon
          className={"transition group-hover:translate-x-1"}
          height={18}
          width={18}
        />
      </button>
    </form>
  );
};

const Contact = () => {
  const {t} = useTranslation();
  return (
    <section
      id={"contact"}
      className={"bg-white dark:bg-gray-900"}>
      {/* OpenStreetMap — full width */}
      <div className={"h-56 w-full overflow-hidden sm:h-72"}>
        <iframe
          title={"DentaVita lokacija"}
          src={"https://www.openstreetmap.org/export/embed.html?bbox=20.455%2C44.815%2C20.468%2C44.824&layer=mapnik&marker=44.8192%2C20.4608"}
          className={"h-full w-full border-0"}
          loading={"lazy"}
        />
      </div>

      {/* Content */}
      <div className={"mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"}>
        {/* Header */}
        <div className={"mb-14 text-center"}>
          <span className={"text-primary dark:text-accent-dark mb-3 inline-block text-sm font-semibold tracking-widest uppercase"}>
            {t('Kontakt')}
          </span>
          <h2 className={"mb-4 text-4xl sm:text-5xl dark:text-white"}>{t('Zakažite Pregled')}</h2>
          <p className={"mx-auto max-w-2xl text-lg text-gray-500 dark:text-gray-400"}>
            {t('Kontaktirajte nas i zakažite pregled — odgovaramo u najkraćem roku')}
          </p>
        </div>

        <div className={"grid gap-10 lg:grid-cols-5"}>
          {/* Form — wider */}
          <div className={"rounded-2xl border border-gray-100 bg-slate-50 p-8 lg:col-span-3 dark:border-gray-700 dark:bg-gray-800"}>
            <h3 className={"mb-6 text-xl font-semibold dark:text-white"}>
              {t('Pošaljite Upit ili Zakažite')}
            </h3>
            <Suspense
              fallback={
                <div className={"h-64 animate-pulse rounded-xl bg-gray-100 dark:bg-gray-700"} />
              }>
              <ContactForm />
            </Suspense>
          </div>

          {/* Contact info */}
          <div className={"flex flex-col gap-4 lg:col-span-2"}>
            <h3 className={"text-xl font-semibold dark:text-white"}>{t('Kontakt Informacije')}</h3>
            {contactItems.map((item, index) => (
              <Link
                key={'contact-item-' + index}
                href={item.href || '#'}
                className={item.containerClassName}>
                <div className={item.iconContainerClassName}>
                  <Icon
                    name={item.icon}
                    height={20}
                    width={20}
                    className={item.iconClassName}
                  />
                </div>
                <div>
                  <div className={"text-xs font-medium text-gray-500 dark:text-gray-400"}>
                    {t(item.title)}
                  </div>
                  <div className={"text-sm font-semibold dark:text-white"}>{t(item.value)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
