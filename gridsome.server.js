const axios = require('axios')

module.exports = function (api) {

  // Takes a string like `services_hub` and changes interval
  // to ServicesHub. Making it stick with Vue file name conventions
  String.prototype.capitalize = function() {
    return this.replace(/(?:^|\_)\S/g, function(string) {
      return string.replace(/_/g, "").toUpperCase()
    })
  }

  api.createManagedPages(async ({ createPage }) => {
    const { data } = await axios.get('https://spinacms-demo.herokuapp.com/api/pages')
    for(const page of data) {
      const path = page.materialized_path
      const template = page.view_template.capitalize()

      createPage({
        path: path,
        component: `./src/templates/${template}.vue`,
        context: {...page}
      })
    }
  })
}
