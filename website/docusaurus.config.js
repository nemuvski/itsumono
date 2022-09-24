// eslint-disable-next-line @typescript-eslint/no-var-requires
const codeTheme = require('prism-react-renderer/themes/oceanicNext')

/** @type {import('@docusaurus/types').Config} */
const config = {
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
      /** @type {import('@docusaurus/preset-classic').Options} */
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
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
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
        theme: codeTheme,
      },
    },
}

module.exports = config
