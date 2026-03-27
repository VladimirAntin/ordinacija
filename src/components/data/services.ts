const servicesItems: ServiceItem[] = [
  {
    title: 'Estetska Stomatologija',
    description:
      'Postignite savršen osmeh uz moderne estetske procedure. Koristimo najnovije materijale i tehnike za dugotrajan estetski rezultat koji prirodno izgleda.',
    features: [
      'Izbeljivanje zuba (Zoom & Home)',
      'Keramički faseti & krunice',
      'Kompozitni vezivi (Bonding)',
      'Estetski ispuni boje zuba',
    ],
    textClassName: 'text-primary dark:text-accent-dark',
    containerClassName: 'bg-accent dark:bg-teal-950/30',
    iconName: 'sparkles',
    iconContainerClassName:
      'bg-white dark:bg-gray-800 border border-primary/20 dark:border-primary/40',
  },
  {
    title: 'Oralna Hirurgija & Implantati',
    description:
      'Trajno rešenje za izgubljene zube uz implante najvišeg kvaliteta. Naš tim hirurga koristi precizne metode za bezbolnu i sigurnu proceduru.',
    features: [
      'Dentalni implanti (jednodnevni)',
      'Vađenje zuba i umnjaka',
      'Augmentacija i regeneracija kosti',
      'Sinuslift procedura',
    ],
    textClassName: 'text-secondary dark:text-sky-400',
    containerClassName: 'bg-sky-50 dark:bg-sky-950/30',
    iconName: 'layers',
    iconContainerClassName:
      'bg-white dark:bg-gray-800 border border-secondary/30 dark:border-sky-700',
  },
  {
    title: 'Opšta & Dečja Stomatologija',
    description:
      'Sveobuhvatna stomatološka nega za celu porodicu. Preventivni pregledi, lečenje karijesa i poseban pristup najmlađim pacijentima u bezbednoj i prijatnoj atmosferi.',
    features: [
      'Stomatološki pregled & RTG',
      'Lečenje karijesa & punjenje zuba',
      'Dečja stomatologija (od 3 god.)',
      'Parodontologija & čišćenje',
    ],
    textClassName: 'text-violet-600 dark:text-violet-400',
    containerClassName: 'bg-violet-50 dark:bg-violet-950/30',
    iconName: 'baby',
    iconContainerClassName:
      'bg-white dark:bg-gray-800 border border-violet-200 dark:border-violet-800',
  },
  {
    title: 'Ortodoncija',
    description:
      'Ispravite zube i zalogaj uz savremene ortodontske metode. Nudimo rešenja za sve uzraste — od dece do odraslih — sa naglaskom na estetiku i komfor.',
    features: [
      'Metalne i keramičke bravice',
      'Invisalign providni aligneri',
      'Damon self-ligirajući sistem',
      'Retaineri i kontrolni pregledi',
    ],
    textClassName: 'text-rose-600 dark:text-rose-400',
    containerClassName: 'bg-rose-50 dark:bg-rose-950/30',
    iconName: 'smile',
    iconContainerClassName: 'bg-white dark:bg-gray-800 border border-rose-200 dark:border-rose-800',
  },
  {
    title: 'Parodontologija',
    description:
      'Dijagnostikujemo i lečimo bolesti desni i potpornog tkiva zuba. Zdrave desni su temelj zdravih zuba — brinemo o njima minimalno invazivnim metodama.',
    features: [
      'Lečenje gingivitisa i parodontitisa',
      'Subgingivalno čišćenje (kyretaža)',
      'Regeneracija parodontalnog tkiva',
      'Parodontalna hirurgija',
    ],
    textClassName: 'text-emerald-600 dark:text-emerald-400',
    containerClassName: 'bg-emerald-50 dark:bg-emerald-950/30',
    iconName: 'shieldCheck',
    iconContainerClassName:
      'bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-800',
  },
  {
    title: 'Protetika & Mostovi',
    description:
      'Nadomestite izgubljene ili oštećene zube visokokvalitetnim protetskim radovima koji izgledaju i osećaju se kao prirodni zubi.',
    features: [
      'Cirkonijumske krunice i mostovi',
      'Totalne i parcijalne proteze',
      'Skeletirane (kovinsko-akrilne) proteze',
      'Teleskopske proteze',
    ],
    textClassName: 'text-amber-600 dark:text-amber-400',
    containerClassName: 'bg-amber-50 dark:bg-amber-950/30',
    iconName: 'stethoscope',
    iconContainerClassName:
      'bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-800',
  },
];

export {servicesItems};
