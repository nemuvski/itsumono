import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes } from 'prism-react-renderer'

const config: Config = {
  title: '@itsumono',
  url: 'https://itsumono.netlify.app',
  baseUrl: '/',
  tagline: 'サクッといつものを導入',
  titleDelimiter: '—',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/logo.png',
  projectName: 'itsumono',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'packages',
          routeBasePath: 'packages',
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @see {@link https://github.com/easyops-cn/docusaurus-search-local#theme-options} */
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: ['en', 'ja'],
        docsRouteBasePath: '/packages',
        docsDir: 'packages',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '@itsumono',
      logo: {
        alt: '@itsumono',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'パッケージ',
        },
        {
          href: 'https://github.com/nemuvski/itsumono',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: '@itsumono',
        src: 'img/logo.png',
        href: '/',
        width: 48,
        height: 48,
      },
      links: [
        {
          title: 'パッケージ',
          items: [
            {
              label: '@itsumono/utils',
              to: 'packages/utils',
            },
            {
              label: '@itsumono/react',
              to: 'packages/react',
            },
          ],
        },
        {
          title: 'その他',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/nemuvski/itsumono',
            },
            {
              label: '開発者',
              to: 'https://github.com/nemuvski',
            },
          ],
        },
      ],
      copyright: `Copyright © 2022 @itsumono`,
    },
    prism: {
      theme: themes.oceanicNext,
      // デフォルト以外に含む言語
      additionalLanguages: ['bash', 'ts'],
    },
  } satisfies Preset.ThemeConfig,

  // markdown: {
  //   mdx1Compat: {
  //     comments: true,
  //     admonitions: true,
  //     headingIds: true,
  //   },
  // },
}

module.exports = config
