const axios = require('axios')

// Takes a string like `services_hub` and changes interval
// to ServicesHub. Making it stick with Vue file name conventions
String.prototype.capitalize = function() {
  return this.replace(/(?:^|\_)\S/g, function(string) {
    return string.replace(/_/g, "").toUpperCase()
  })
}

module.exports = function (api) {
  api.loadSource(async ({ addCollection, addNode }) => {
    const { data } = await axios.get('https://maurice-woodcutter.herokuapp.com/api/pages')
    const collection = addCollection('NavbarLinks')

    for(const page of data) {
      collection.addNode({
        id: page.id,
        title: page.title,
        path: page.materialized_path,
        inMenu: page.show_in_menu
      })
    }
  })

  api.createManagedPages(async ({ createPage }) => {
    const { data } = await axios.get('https://maurice-woodcutter.herokuapp.com/api/pages')

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
