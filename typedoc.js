/** @type {import('typedoc').TypeDocOptions} */
const options = {
  name: '@itsumono',
  entryPointStrategy: 'packages',
  entryPoints: ['.'],
  cleanOutputDir: true,
  out: 'docs',
  readme: 'README.md',
  exclude: ['**/*(.spec).ts'],
  excludePrivate: true,
  excludeInternal: true,
  disableSources: true,
  includeVersion: true,
  githubPages: false,
  hideGenerator: false,
  plugin: ['typedoc-theme-hierarchy', 'typedoc-plugin-extras'],
  theme: 'hierarchy',
  darkHighlightTheme: 'dark-plus',
  htmlLang: 'ja',

  // typedoc-plugin-extrasプラグイン
  footerDate: true,
  footerTime: true,
  favicon: 'favicon.svg',
}

module.exports = options
