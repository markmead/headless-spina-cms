const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [ tailwind() ]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'SpinaCMS Test',
  siteUrl: 'https://headless-spina-cms.netlify.com',
  plugins: [
    { use: '@gridsome/plugin-sitemap' },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
