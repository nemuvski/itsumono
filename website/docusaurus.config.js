// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require('prism-react-renderer/themes/github')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {Partial<import('docusaurus-plugin-typedoc/dist/types').PluginOptions>} */
const pluginTypedocConfig = {
  entryPointStrategy: 'packages',
  entryPoints: ['../packages/utils/', '../packages/react/'],
  cleanOutputDir: true,
  sidebar: {
    fullNames: true,
  },
  disableSources: true,

  // NOTE: 不要かもしれないが一応明記しておく
  exclude: ['**/*(.spec).ts'],
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '@itsumono',
  url: 'https://itsumono.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
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
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [['docusaurus-plugin-typedoc', pluginTypedocConfig]],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: '@itsumono',
        logo: {
          alt: '@itsumono',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'api/index',
            position: 'left',
            label: 'API',
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
        copyright: `Copyright © ${new Date().getFullYear()} @itsumono`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
}

module.exports = config
