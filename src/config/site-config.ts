import { siteConfig } from './site';
import { siteConfigEn } from './site.en';

export function withBasePath(pathname: string) {
  const normalizedPath = pathname.replace(/^\/+/, '');
  const basePath = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');

  return `${basePath || ''}/${normalizedPath}`;
}

export function getSiteConfig(pathname: string) {
  return pathname.includes('/en/') ? siteConfigEn : siteConfig;
}
