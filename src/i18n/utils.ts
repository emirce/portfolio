import { ui, defaultLang, locales, type Lang, type UiKey } from './ui';

export { defaultLang, locales };
export type { Lang, UiKey };

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  return seg === 'de' ? 'de' : 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === '/' ? '/' : clean}`;
}

export function alternatePath(path: string, currentLang: Lang): string {
  const otherLang: Lang = currentLang === 'en' ? 'de' : 'en';
  return localizePath(path, otherLang);
}

export function stripLangPrefix(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLang) continue;
    if (pathname === `/${l}` || pathname === `/${l}/`) return '/';
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(`/${l}`.length);
  }
  return pathname;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'de' : 'en';
}
