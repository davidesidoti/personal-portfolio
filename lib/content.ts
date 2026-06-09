// Real portfolio content for Davide Sidoti — bilingual (EN/IT).
// Translatable leaves are { en, it } objects; the tx(value, lang) helper
// (see lib/i18n.tsx) returns the right value. Plain strings pass through.

export type Lang = 'en' | 'it';

/** A bilingual leaf. `T` is usually string, but can be string[] (e.g. bio). */
export type Loc<T = string> = { en: T; it: T };

const T = <T,>(en: T, it: T): Loc<T> => ({ en, it });

export interface Social {
  label: string;
  icon: string;
  href: string;
}

export interface Project {
  idx: string;
  title: string;
  cat: 'web' | 'systems';
  tags: string[];
  year: string;
  accent?: boolean;
  href: string;
  tagline: Loc;
  role: Loc;
  desc: Loc;
}

export const PORTFOLIO = {
  identity: {
    name: 'Davide Sidoti',
    role: T('Full-stack software engineer', 'Sviluppatore software full-stack'),
    location: T('Italy · CET', 'Italia · CET'),
    year: '2026',
    blurb: T(
      'Self-taught since I was 13, when I built my first videogame in Python, and I never really stopped. I ship web apps, automation, and the occasional machine-learning experiment. I care about clean systems and interfaces that feel fast.',
      'Autodidatta da quando avevo 13 anni, da quando ho creato il mio primo videogioco in Python, e non ho più smesso. Realizzo web app, automazioni e qualche esperimento di machine learning. Ci tengo a sistemi puliti e a interfacce che diano la sensazione di essere veloci.'
    ),
    email: 'sidotidavide@gmail.com',
    resume: 'Davide-Sidoti-CV-2026.pdf',
    socials: [
      { label: 'GitHub', icon: 'github', href: 'https://github.com/davidesidoti' },
      { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/davidesidoti' },
      { label: 'Email', icon: 'mail', href: 'mailto:sidotidavide@gmail.com' },
    ] as Social[],
  },

  // shown in the terminal `cat stack.txt`
  stack: ['python', 'laravel', 'javascript', 'react', 'c#', 'mysql', 'salesforce'],

  nav: [
    { id: 'home', label: T('Index', 'Indice') },
    { id: 'work', label: T('Work', 'Lavori') },
    { id: 'about', label: T('About', 'Chi sono') },
    { id: 'contact', label: T('Contact', 'Contatti') },
  ],

  projects: [
    {
      idx: '001',
      title: 'unit3dprep',
      cat: 'web',
      tags: ['fastapi', 'react', 'python'],
      year: '2025',
      accent: true,
      href: 'https://github.com/davidesidoti/unit3dprep',
      tagline: T('Media library & upload toolkit', 'Libreria media e toolkit di upload'),
      role: T('Creator', 'Autore'),
      desc: T(
        'A web UI and CLI companion for media trackers: a browsable media library, a guided upload wizard, full history, a bilingual IT/EN interface, and in-app auto-update. FastAPI backend, React single-page app.',
        'Una companion web UI e CLI per i tracker media: libreria media navigabile, wizard di upload guidato, storico completo, interfaccia bilingue IT/EN e auto-update in-app. Backend FastAPI, single-page app in React.'
      ),
    },
    {
      idx: '002',
      title: 'CryptoBot',
      cat: 'systems',
      tags: ['python', 'xgboost', 'ml'],
      year: '2025',
      href: 'https://github.com/davidesidoti/CryptoBot',
      tagline: T('ML-powered crypto trading bot', 'Trading bot crypto con ML'),
      role: T('Creator', 'Autore'),
      desc: T(
        'An XGBoost trading bot with multi-timeframe features, walk-forward validation, and paper trading on the Binance Testnet, packed into a single, readable Python file.',
        'Un trading bot basato su XGBoost con feature multi-timeframe, walk-forward validation e paper trading sul Binance Testnet, il tutto in un singolo file Python leggibile.'
      ),
    },
    {
      idx: '003',
      title: 'WonderFlix',
      cat: 'systems',
      tags: ['python', 'discord', 'self-hosted'],
      year: '2024',
      href: 'https://github.com/davidesidoti/WonderFlix',
      tagline: T('Self-hosted media orchestration', 'Orchestrazione media self-hosted'),
      role: T('Creator', 'Autore'),
      desc: T(
        'A self-hosted Discord bot that integrates and orchestrates Jellyfin, Sonarr, Radarr, and Jellyseerr, a single control surface for a whole home-media stack.',
        'Un bot Discord self-hosted che integra e orchestra Jellyfin, Sonarr, Radarr e Jellyseerr, un’unica plancia di controllo per l’intero stack media di casa.'
      ),
    },
    {
      idx: '004',
      title: 'seekr',
      cat: 'web',
      tags: ['swift', 'swiftui', 'ios'],
      year: '2025',
      href: 'https://github.com/davidesidoti/seekr-app',
      tagline: T('Native iOS Jellyseerr client', 'Client iOS nativo per Jellyseerr'),
      role: T('Creator', 'Autore'),
      desc: T(
        'A native iOS client for Jellyseerr: browse, search, and request media from your self-hosted server, built in Swift with a clean, native feel.',
        'Un client iOS nativo per Jellyseerr: sfoglia, cerca e richiedi media dal tuo server self-hosted, sviluppato in Swift con un’estetica nativa e pulita.'
      ),
    },
    {
      idx: '005',
      title: 'bambumonitor',
      cat: 'web',
      tags: ['javascript', 'dashboard', 'iot'],
      year: '2024',
      href: 'https://github.com/davidesidoti/bambumonitor',
      tagline: T('Bambu Lab printer dashboard', 'Dashboard per stampanti Bambu Lab'),
      role: T('Creator', 'Autore'),
      desc: T(
        'A cleaner dashboard to monitor a Bambu Lab 3D printer in real time: status, telemetry, and job progress, all at a glance.',
        'Una dashboard più pulita per monitorare in tempo reale una stampante 3D Bambu Lab: stato, telemetria e avanzamento dei job, tutto a colpo d’occhio.'
      ),
    },
  ] as Project[],

  filters: [
    { value: 'all', label: T('All', 'Tutti'), count: 5 },
    { value: 'web', label: T('Web & apps', 'Web e app'), count: 3 },
    { value: 'systems', label: T('Systems & ML', 'Sistemi e ML'), count: 2 },
  ],

  experience: [
    {
      year: T('2025-now', '2025-oggi'),
      role: T('Salesforce developer & consultant', 'Sviluppatore e consulente Salesforce'),
      org: 'Lobra',
      note: T('Salesforce CRM & Marketing Cloud Personalization.', 'Salesforce CRM e Marketing Cloud Personalization.'),
    },
    {
      year: T('2024-2025', '2024-2025'),
      role: T('Software engineer', 'Sviluppatore software'),
      org: 'Trevigroup',
      note: T('Integrated systems, data exchange between machinery and ERP.', 'Sistemi integrati, interscambio dati tra macchinari e gestionali.'),
    },
    {
      year: T('2023-2024', '2023-2024'),
      role: T('Software developer', 'Sviluppatore software'),
      org: 'Ingenia',
      note: T('Integrative systems in Laravel & Python.', 'Sistemi integrativi in Laravel e Python.'),
    },
    {
      year: T('2021-2023', '2021-2023'),
      role: T('Full-stack web developer', 'Sviluppatore web full-stack'),
      org: 'Scintille Digital Agency',
      note: T('Web apps, e-commerce, databases & servers.', 'Web app, e-commerce, database e server.'),
    },
  ],

  skills: [
    { group: T('Frontend', 'Frontend'), items: ['HTML', 'CSS', 'JavaScript', 'React', 'jQuery'] },
    { group: T('Backend', 'Backend'), items: ['PHP', 'Laravel', 'Python', 'C#', 'MySQL'] },
    { group: T('Security', 'Sicurezza'), items: ['Pen testing', 'Red teaming', 'Vuln assessment'] },
    { group: T('Platforms', 'Piattaforme'), items: ['Salesforce', 'Unity', 'Linux'] },
  ],

  education: [
    { year: '2022', title: T('IT Technician, qualification', 'Tecnico Informatico, qualifica'), org: T('ENAIP Veneto', 'ENAIP Veneto') },
    { year: '2021', title: T('Electronics Operator, qualification', 'Operatore Elettronico, qualifica'), org: T('ENAIP Veneto', 'ENAIP Veneto') },
    { year: '', title: T('Advanced Ethical Hacking', 'Ethical Hacking avanzato'), org: T('TryHackMe', 'TryHackMe') },
    { year: '', title: T('Japanese, Kanji & Katakana A1', 'Giapponese, Kanji e Katakana A1'), org: T('Self-study', 'Autodidatta') },
  ],

  // page-level copy keyed by screen
  copy: {
    home: {
      heroEyebrow: T('Full-stack engineer · 2026', 'Sviluppatore full-stack · 2026'),
      // headline split so the middle word can be the serif accent
      heroA: T('I build software,', 'Costruisco software,'),
      heroAccent: T('end to end', 'dall’inizio alla fine'),
      heroB: T('.', '.'),
      ctaWork: T('View selected work', 'Vedi i progetti'),
      ctaResume: T('Resume', 'CV'),
      selectedEyebrow: T('Selected work', 'Progetti selezionati'),
      selectedTitle: T('Recent things I’ve shipped.', 'Cose che ho rilasciato di recente.'),
      allProjects: T('All projects', 'Tutti i progetti'),
    },
    work: {
      eyebrow: T('Selected work', 'Progetti selezionati'),
      titleA: T('Things I’ve designed', 'Cose che ho progettato'),
      titleAccent: T('& built', 'e costruito'),
      lead: T(
        'A selection of side projects and tools: web apps, self-hosting automation, and a bit of machine learning. Most are open source on GitHub.',
        'Una selezione di progetti personali e strumenti: web app, automazioni self-hosting e un po’ di machine learning. Quasi tutti open source su GitHub.'
      ),
    },
    about: {
      eyebrow: T('About', 'Chi sono'),
      titleA: T('Engineer by passion,', 'Ingegnere per passione,'),
      titleAccent: T('self-taught', 'autodidatta'),
      titleB: T('by habit.', 'per abitudine.'),
      bio: T(
        [
          'I’m Davide, a full-stack software engineer from Italy. I’ve been programming since I was 13, when I built my first videogame in Python, and I never really stopped.',
          'Professionally I’ve worked across web apps, e-commerce, integrated systems, and Salesforce, from the frontend all the way down to databases and servers. On my own time I build self-hosting tools, bots, and machine-learning experiments.',
          'I’m curious about cybersecurity and red teaming, I learn fast on my own, and I work well solo or in a team. Off-screen: motorcycles and a slow attempt at learning Japanese.',
        ],
        [
          'Sono Davide, uno sviluppatore software full-stack dall’Italia. Programmo da quando avevo 13 anni, da quando ho creato il mio primo videogioco in Python, e non ho più smesso.',
          'A livello professionale ho lavorato su web app, e-commerce, sistemi integrati e Salesforce, dal frontend fino a database e server. Nel tempo libero costruisco strumenti self-hosting, bot ed esperimenti di machine learning.',
          'Sono curioso di cybersecurity e red teaming, imparo in fretta da solo e lavoro bene sia in autonomia sia in team. Fuori dallo schermo: moto e un lento tentativo di imparare il giapponese.',
        ]
      ),
      skillsLabel: T('Skills', 'Competenze'),
      experienceLabel: T('Experience', 'Esperienza'),
      educationLabel: T('Education & certs', 'Formazione e certificazioni'),
    },
    contact: {
      eyebrow: T('Contact', 'Contatti'),
      titleA: T('Let’s', ''),
      titleAccent: T('talk', 'Parliamone'),
      lead: T(
        'Looking for someone, have a project, or just want to talk shop? Drop me a line. I read everything and usually reply within a day or two.',
        'Cerchi una figura, hai un progetto o vuoi solo scambiare due chiacchiere? Scrivimi. Leggo tutto e di solito rispondo entro un giorno o due.'
      ),
      fName: T('Name', 'Nome'),
      fNamePh: T('Your name', 'Il tuo nome'),
      fEmail: T('Email', 'Email'),
      fEmailPh: T('you@company.com', 'tu@azienda.com'),
      fMsg: T('Message', 'Messaggio'),
      fMsgPh: T('What are you building?', 'Cosa stai costruendo?'),
      fSwitch: T('This is under NDA', 'Questo è soggetto a NDA'),
      fSend: T('Send message', 'Invia messaggio'),
      sending: T('Sending…', 'Invio in corso…'),
      sentTitle: T('Message sent.', 'Messaggio inviato.'),
      sentNote: T('I’ll be in touch shortly,', 'Ti rispondo a breve,'),
      sentFriend: T('friend', 'a presto'),
      sendAnother: T('Send another', 'Invia un altro'),
      errGeneric: T('Something went wrong. Try again, or email me directly.', 'Qualcosa è andato storto. Riprova, o scrivimi direttamente.'),
      errName: T('Please enter your name.', 'Inserisci il tuo nome.'),
      errEmail: T('Please enter a valid email.', 'Inserisci un’email valida.'),
      errMsg: T('Please write a little more (10+ characters).', 'Scrivi qualcosa in più (10+ caratteri).'),
    },
    status: T('Available for work, 2026', 'Disponibile per lavorare, 2026'),
    footerNote: T('built from scratch', 'costruito da zero'),
  },
} as const;

/** Show the "Available for work" status pill across screens. One-line toggle. */
export const SHOW_STATUS = false;
