import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname.split('/');
  const lang = parts[1];
  
  if (lang in ui) {
    // If the path contains a lang, strip it out to get the "clean" route
    // e.g., /en/about -> /about
    // /en/ -> /
    const route = parts.slice(2).join('/');
    return route ? `/${route}` : '/';
  }
  
  // If it's already the default language (no prefix)
  return pathname;
}
