import type { Theme, ThemeAccentColor, ThemeGrayColor } from '@/lib/types'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'UI Experiments',
  description: 'Poorly designed, barley functional recreations of dribbble shots.',
  themeNamespace: 'creight',
  theme: {
    defaultTheme: 'system' as Theme,
    defaultThemeGrayColor: 'sand' as ThemeGrayColor,
    defaultThemeAccentColor: 'tomato' as ThemeAccentColor,
  },
  // mainNav: [
  //   {
  //     title: "Home",
  //     href: "/",
  //   },
  // ],
  // links: {
  //   twitter: "https://twitter.com/shadcn",
  //   github: "https://github.com/shadcn/ui",
  //   docs: "https://ui.shadcn.com",
  // },
}
