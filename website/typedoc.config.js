/** @type {import('typedoc').TypeDocOptions} */
const options = {
  name: '@itsumono',
  entryPointStrategy: 'packages',
  entryPoints: ['../packages/utils/', '../packages/react/'],
  cleanOutputDir: true,
  out: './.typedoc',
  exclude: ['**/*(.spec).ts'],
  plugin: ['typedoc-plugin-markdown'],
}

module.exports = options
