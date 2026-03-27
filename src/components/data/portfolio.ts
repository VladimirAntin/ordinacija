const caseStudies: CaseStudy[] = [
  {
    id: 'estetsko-beljenje',
    title: 'Estetsko Izbeljivanje & Faseti',
    category: 'Estetska Stomatologija',
    client: 'Pacijent A.',
    thumbnail: '/galerija/beljenje/posle.jpg',
    images: [
      '/galerija/beljenje/pre.jpg',
      '/galerija/beljenje/posle.jpg',
      '/galerija/beljenje/3.jpg',
    ],
    description:
      'Kompletan estetski tretman koji je obuhvatao profesionalno izbeljivanje Zoom metodom i ugradnju keramičkih faseta na gornjim sekalicama radi postizanja savršenog osmeha.',
    problem:
      'Pacijentica je bila nezadovoljna diskoloracijom i oblikom prednjih zuba usled godina konzumiranja kafe i čaja.',
    solution:
      'Sproveli smo Zoom izbeljivanje u ordinaciji praćeno kućnim protokolom. Nakon stabilizacije boje, ugradili smo četiri keramička faseta.',
    results: [
      'Nijansa boje poboljšana za 8 tona',
      'Keramički faseti sa garancijom od 10 godina',
      'Potpuno prirodan izgled i osećaj',
    ],
    technologies: [
      'Zoom Izbeljivanje',
      'Keramički Faseti',
      'Digitalni osmeh dizajn',
      'Composit Bonding',
    ],
    year: '2025',
    duration: '3 nedelje',
  },
  {
    id: 'dentalni-implant',
    title: 'Dentalni Implant & Krunica',
    category: 'Oralna Hirurgija & Implantati',
    client: 'Pacijent M.',
    thumbnail: '/galerija/implanti/posle.jpg',
    images: [
      '/galerija/implanti/pre.jpg',
      '/galerija/implanti/posle.jpg',
      '/galerija/implanti/3.jpg',
    ],
    description:
      'Ugradnja dentalnog implanta na mestu izgubljenog gornjeg kutnjaka uz privremenu i finalnu keramičku krunicu — trajno rešenje koje izgleda i funkcioniše kao prirodan zub.',
    problem:
      'Pacijent je izgubio gornji kutnjak pre godinu dana i imao problema sa žvakanjem hrane sa te strane.',
    solution:
      'Postavili smo titanijumski implantat i sačekali period oseointegracije od 3 meseca. Potom smo ugradili finalnu keramičku krunicu.',
    results: [
      'Trajno rešenje bez brušenja susednih zuba',
      'Krunica identična prirodnom zubu',
      'Potpuna funkcionalnost žvakanja obnovljena',
    ],
    technologies: [
      'Titanijumski Implantat',
      'Keramička Krunica',
      'Digitalni RTG',
      'Koštana regeneracija',
    ],
    year: '2025',
    duration: '4 meseca',
  },
  {
    id: 'ortodontski-tretman',
    title: 'Ortodontska Korekcija Zalogaja',
    category: 'Ortodoncija',
    client: 'Pacijent T.',
    thumbnail: '/galerija/beljenje/pre.jpg',
    images: ['/galerija/beljenje/pre.jpg', '/galerija/beljenje/posle.jpg'],
    description:
      'Korekcija nepravilnog zalogaja i zbijenih zuba keramičkim bravicama tokom 18 meseci aktivnog ortodontskog lečenja uz fiksni retainer.',
    problem:
      'Pacijent imao zbijene prednje zube i dubok zalogaj koji je uzrokovao neravnomerno trošenje gleđi.',
    solution:
      'Primenili smo keramičke estetske bravice i seriju graduiranih lukova za postepenu korekciju pozicije zuba.',
    results: [
      'Pravilan zalogaj i raspored zuba',
      'Vidljivo poboljšanje estetike osmeha',
      'Smanjen rizik od trošenja gleđi',
    ],
    technologies: [
      'Keramičke Bravice',
      'Ortodontski Lukovi',
      'Fiksni Retainer',
      'Digitalno Planiranje',
    ],
    year: '2025',
    duration: '18 meseci',
  },
  {
    id: 'keramicki-most',
    title: 'Cirkonijumski Most & Krunice',
    category: 'Protetika & Mostovi',
    client: 'Pacijent S.',
    thumbnail: '/galerija/implanti/pre.jpg',
    images: [
      '/galerija/implanti/pre.jpg',
      '/galerija/implanti/posle.jpg',
      '/galerija/implanti/3.jpg',
    ],
    description:
      'Izrada tročlanog cirkonijumskog mosta u frontalnoj regiji uz zamenu starih metalnih krunica modernim estetskim radovima.',
    problem: 'Stare metalne krunice davale su siv ton desni i bile vidljivo zastarele estetski.',
    solution:
      'Uklonili smo stare krunice i izradili tročlani cirkonijumski most i dve pojedinačne cirkonijumske krunice uz digitalno uzimanje otiska.',
    results: [
      'Prirodno bela i prozirna estetika',
      'Bez metalnih komponenti',
      'Digitalni otisak za precizno pasovanje',
    ],
    technologies: ['Cirkonijum', 'CAD/CAM Sistem', 'Digitalni Otisak', 'Keramička Glazura'],
    year: '2024',
    duration: '2 nedelje',
  },
  {
    id: 'parodontoloski-tretman',
    title: 'Parodontološka Sanacija',
    category: 'Parodontologija',
    client: 'Pacijent R.',
    thumbnail: '/galerija/beljenje/3.jpg',
    images: ['/galerija/beljenje/3.jpg', '/galerija/beljenje/posle.jpg'],
    description:
      'Kompleksna parodontološka sanacija naprednog parodontitisa uz subgingivalno čišćenje, regeneraciju tkiva i dugoročni program održavanja.',
    problem:
      'Pacijent imao uznapredovali parodontitis sa gubitkom koštanog tkiva na više zuba i povlačenjem desni.',
    solution:
      'Sproveli smo potpunu parodontološku terapiju u četiri kvadranta sa subgingivalnim čišćenjem i lokalnom antibiotskom terapijom.',
    results: [
      'Zaustavljen napredak bolesti',
      'Smanjene dubine parodontalnih džepova',
      'Stabilizacija mobilnih zuba',
    ],
    technologies: [
      'Subgingivalna Kyretaža',
      'Ultrazvučni Skaler',
      'Laserski Sistem',
      'Parodontalni Monitoring',
    ],
    year: '2024',
    duration: '3 meseca',
  },
];

export {caseStudies};
