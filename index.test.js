const { serial: test } = require('ava')
const { scan, build } = require('.')

const basedir = './test-site'

test('resolves absolute basedir', async t => {
  const { absoluteBasedir } = await scan(basedir)

  t.is(typeof absoluteBasedir, 'string')
  t.truthy(absoluteBasedir.includes(process.cwd()))
})

test('finds files', async t => {
  const { files } = await scan(basedir)

  t.true(Array.isArray(files))
  t.is(files.length, 1)
  t.true(files[0].endsWith('/index.md'))
})

test('converts markdown files to html files', async t => {
  const { absoluteBasedir, files } = await scan(basedir)
  const { errors, written } = await build(absoluteBasedir, files)

  t.true(Array.isArray(errors))
  t.is(errors.length, 0)

  t.true(Array.isArray(written))
  t.is(written.length, 1)
  const { htmlFilePath, htmlContent, mdContent, attributes } = written[0]
  t.true(htmlFilePath.endsWith('/_site/index.html'))
  t.deepEqual(htmlContent, `<h1>test title</h1>
<p>test content</p>
<p>~ by test author</p>
`)

  t.deepEqual(mdContent, `
# test title

test content

~ by {{ author }}`)
  t.deepEqual(attributes.title, 'A blog post title')
  t.true(+new Date(attributes.date) > 0)
})
