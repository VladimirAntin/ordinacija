const contactItems: ContactItem[] = [
  {
    title: 'Email',
    href: 'mailto:kontakt@dentavita.rs',
    value: 'kontakt@dentavita.rs',
    icon: 'mail',
    iconClassName: 'text-primary group-hover:text-white transition',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary hover:bg-accent dark:hover:bg-teal-950/30 transition group',
    iconContainerClassName:
      'w-12 h-12 bg-accent dark:bg-teal-900/40 rounded-xl flex items-center justify-center group-hover:bg-primary transition',
  },
  {
    title: 'Telefon',
    href: 'tel:+381111234567',
    value: '+381 11 123 4567',
    icon: 'phone',
    iconClassName: 'text-secondary group-hover:text-white transition',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-secondary hover:bg-sky-50 dark:hover:bg-sky-950/30 transition group',
    iconContainerClassName:
      'w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-xl flex items-center justify-center group-hover:bg-secondary transition',
  },
  {
    title: 'Adresa',
    href: 'https://maps.google.com/?q=Knez+Mihailova+42+Beograd',
    value: 'Knez Mihailova 42, Beograd',
    icon: 'location',
    iconClassName: 'text-violet-500 group-hover:text-white transition',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950/30 transition group',
    iconContainerClassName:
      'w-12 h-12 bg-violet-100 dark:bg-violet-900/40 rounded-xl flex items-center justify-center group-hover:bg-violet-500 transition',
  },
  {
    title: 'Radno vreme',
    href: '',
    value: 'Pon–Pet 8–20h | Sub 9–14h',
    icon: 'calendar',
    iconClassName: 'text-amber-500 group-hover:text-white transition',
    containerClassName:
      'flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition group',
    iconContainerClassName:
      'w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center group-hover:bg-amber-500 transition',
  },
];

export {contactItems};
