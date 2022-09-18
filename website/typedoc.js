/** @type {import('typedoc').TypeDocOptions} */
const options = {
  name: '@itsumono',
  entryPointStrategy: 'packages',
  entryPoints: ['..'],
  cleanOutputDir: true,
  out: '../docs',
  readme: '../README.md',
  exclude: ['**/*(.spec).ts'],
  excludePrivate: true,
  excludeInternal: true,
  disableSources: true,
  includeVersion: true,
  githubPages: false,
  hideGenerator: false,
  plugin: [],
  htmlLang: 'ja',
}

module.exports = options
