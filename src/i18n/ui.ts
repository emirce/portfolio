export const ui = {
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
  'writing.intro': 'Short notes on software, tooling, and whatever sticks at the desk.',

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
} as const;

export type UiKey = keyof typeof ui;
