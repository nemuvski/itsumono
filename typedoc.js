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
  plugin: ['typedoc-theme-hierarchy'],
  theme: 'hierarchy',
  darkHighlightTheme: 'dark-plus',
  htmlLang: 'ja',
  githubPages: false,
}

module.exports = options
