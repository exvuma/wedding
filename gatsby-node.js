const path = require('path')
const fetch = require('node-fetch')

module.exports.createPages = async ({ reporter, actions }) => {
  if (process.env.SECRET_PAGE_CONTENTS_URL) {
    reporter.info('Building secret page')

    let pageContents

    try {
      pageContents = await fetch(
        process.env.SECRET_PAGE_CONTENTS_URL,
      ).then((res) => res.text())
    } catch (e) {
      reporter.error(e)
      reporter.error(
        'Error fetching secret URL: \n' + process.env.SECRET_PAGE_CONTENTS_URL,
      )
      return process.exit(1)
    }

    if (pageContents) {
      actions.createPage({
        path: process.env.SECRET_PAGE_PATHNAME || '/mvps',
        component: path.join(__dirname, './src/components/SecretPage.tsx'),
        context: {
          contents: pageContents,
        },
      })
    }
  } else {
    reporter.info(
      'Missing env variable: SECRET_PAGE_CONTENTS_URL. Not building secret page',
    )
  }
}
