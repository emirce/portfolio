export const defaultLang = 'en' as const;
export const locales = ['en', 'de'] as const;
export type Lang = (typeof locales)[number];

export const ui = {
  en: {
    'meta.title': 'Emir Celovic — Software for the world.',
    'meta.description':
      'Personal portfolio of Emir Celovic — software engineer building considered, calm software. Currently bullstudio.',

    'nav.home': 'Index',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.writing': 'Writing',
    'nav.elsewhere': 'Elsewhere',
    'nav.skip': 'Skip to content',
    'nav.back': 'Back to index',

    'lang.en': 'EN',
    'lang.de': 'DE',
    'lang.switch_label': 'Language',
    'lang.alt_de': 'Auf Deutsch lesen',
    'lang.alt_en': 'Read in English',

    'sec.01.label': 'Index',
    'sec.02.label': 'Selected Work',
    'sec.03.label': 'About',
    'sec.04.label': 'Writing',
    'sec.05.label': 'Elsewhere',

    'hero.line_a': 'Software',
    'hero.line_b': 'for the world.',
    'hero.lede':
      'I build calm, considered software. Currently shaping bullstudio — a contemporary interface for Bull and BullMQ job queues.',

    'index.name_label': 'Name',
    'index.role_label': 'Role',
    'index.based_label': 'Based',
    'index.status_label': 'Status',
    'index.name_value': 'Emir Celovic',
    'index.role_value': 'Software engineer',
    'index.based_value': 'Europe — remote',
    'index.status_value': 'Available for select work',

    'work.year_label': 'Year',
    'work.tags_label': 'Tags',
    'work.role_label': 'Role',
    'work.upcoming': 'In preparation',
    'work.view': 'View project',
    'work.repo': 'Source',
    'work.live': 'Live',
    'work.see_all': 'All work',
    'work.summary_label': 'Summary',
    'work.empty_title': 'In preparation',
    'work.empty_body':
      'A project entry is being drafted here. Come back shortly, or read the existing work above.',

    'writing.date_label': 'Date',
    'writing.see_all': 'All notes',
    'writing.empty':
      'Notes in progress. The first piece will arrive here when it is ready.',
    'writing.read': 'Read',

    'about.body_p1':
      'I work across the stack with a quiet preference for the parts users actually touch. My background is in TypeScript, Node, and the kind of internal tooling that, when done right, recedes from view.',
    'about.body_p2':
      'I care about typography, performance, and the small operational details that compound. I try to write software that is honest about its limits and pleasant to live with.',
    'about.body_p3':
      'When I am not shipping, I am usually reading, walking, or sketching out something that may or may not become a project.',

    'elsewhere.github': 'GitHub',
    'elsewhere.x': 'X',
    'elsewhere.linkedin': 'LinkedIn',
    'elsewhere.email': 'Email',
    'elsewhere.email_value': 'Get in touch',

    'foot.colophon': 'Colophon',
    'foot.copy': 'Built quietly in 2026.',

    'err.404.eyebrow': 'Error 404',
    'err.404.title': 'Page not found.',
    'err.404.body':
      'The page you were looking for does not exist, or has been moved. Return to the index.',
    'err.404.cta': 'Back to index',

    'time.read_minutes': 'min read',
  },

  de: {
    'meta.title': 'Emir Celovic — Software für die Welt.',
    'meta.description':
      'Portfolio von Emir Celovic — Softwareentwickler für ruhige, durchdachte Software. Aktuell bullstudio.',

    'nav.home': 'Verzeichnis',
    'nav.work': 'Arbeit',
    'nav.about': 'Über',
    'nav.writing': 'Schreiben',
    'nav.elsewhere': 'Anderswo',
    'nav.skip': 'Zum Inhalt springen',
    'nav.back': 'Zurück zum Verzeichnis',

    'lang.en': 'EN',
    'lang.de': 'DE',
    'lang.switch_label': 'Sprache',
    'lang.alt_de': 'Auf Deutsch lesen',
    'lang.alt_en': 'Read in English',

    'sec.01.label': 'Verzeichnis',
    'sec.02.label': 'Ausgewählte Arbeit',
    'sec.03.label': 'Über mich',
    'sec.04.label': 'Schreiben',
    'sec.05.label': 'Anderswo',

    'hero.line_a': 'Software',
    'hero.line_b': 'für die Welt.',
    'hero.lede':
      'Ich baue ruhige, durchdachte Software. Aktuell entsteht bullstudio — eine zeitgemäße Oberfläche für Bull- und BullMQ-Jobqueues.',

    'index.name_label': 'Name',
    'index.role_label': 'Rolle',
    'index.based_label': 'Standort',
    'index.status_label': 'Status',
    'index.name_value': 'Emir Celovic',
    'index.role_value': 'Softwareentwickler',
    'index.based_value': 'Europa — remote',
    'index.status_value': 'Offen für ausgewählte Projekte',

    'work.year_label': 'Jahr',
    'work.tags_label': 'Tags',
    'work.role_label': 'Rolle',
    'work.upcoming': 'In Vorbereitung',
    'work.view': 'Zum Projekt',
    'work.repo': 'Quellcode',
    'work.live': 'Live',
    'work.see_all': 'Alle Arbeiten',
    'work.summary_label': 'Zusammenfassung',
    'work.empty_title': 'In Vorbereitung',
    'work.empty_body':
      'Hier entsteht ein Projekteintrag. Schau gern später wieder vorbei oder sieh dir die bestehende Arbeit oben an.',

    'writing.date_label': 'Datum',
    'writing.see_all': 'Alle Notizen',
    'writing.empty':
      'Notizen in Arbeit. Der erste Eintrag erscheint hier, sobald er fertig ist.',
    'writing.read': 'Lesen',

    'about.body_p1':
      'Ich arbeite über den gesamten Stack hinweg, mit einer leisen Vorliebe für die Stellen, die Nutzer tatsächlich berühren. Mein Hintergrund liegt in TypeScript, Node und internen Werkzeugen, die — gut gemacht — möglichst unsichtbar werden.',
    'about.body_p2':
      'Mir liegen Typografie, Performance und die kleinen operativen Details am Herzen, die sich summieren. Ich versuche, Software zu schreiben, die ehrlich zu ihren Grenzen steht und angenehm im Alltag ist.',
    'about.body_p3':
      'Wenn ich nichts ausliefere, lese ich, gehe spazieren oder skizziere etwas, das vielleicht eines Tages ein Projekt wird.',

    'elsewhere.github': 'GitHub',
    'elsewhere.x': 'X',
    'elsewhere.linkedin': 'LinkedIn',
    'elsewhere.email': 'E-Mail',
    'elsewhere.email_value': 'Kontakt aufnehmen',

    'foot.colophon': 'Kolophon',
    'foot.copy': 'In aller Ruhe gebaut, 2026.',

    'err.404.eyebrow': 'Fehler 404',
    'err.404.title': 'Seite nicht gefunden.',
    'err.404.body':
      'Die gesuchte Seite existiert nicht oder wurde verschoben. Zurück zum Verzeichnis.',
    'err.404.cta': 'Zurück zum Verzeichnis',

    'time.read_minutes': 'Min. Lesezeit',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];
