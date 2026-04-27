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

  'hero.intro':
    'Hi — I’m Emir. A short, personal introduction will live here: a sentence or two on what I build, what I care about, and what I’m focused on right now. Placeholder copy until the real words land.',

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
