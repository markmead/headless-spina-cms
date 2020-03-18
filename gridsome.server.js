const axios = require('axios')

module.exports = function (api) {
  api.createManagedPages(async ({ createPage }) => {
    const { data } = await axios.get('https://spinacms-demo.herokuapp.com/api/pages')
    for(const page of data) {
      const path = page.materialized_path

      createPage({
        path: path,
        component: './src/templates/Page.vue',
        context: {...page}
      })
    }
  })
}
