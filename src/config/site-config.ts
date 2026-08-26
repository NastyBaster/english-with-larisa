import { siteConfig } from './site';
import { siteConfigEn } from './site.en';

export function getSiteConfig(pathname: string) {
  return pathname.includes('/en/') ? siteConfigEn : siteConfig;
}
