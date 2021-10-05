const { description } = require('../../package')

module.exports = {
  dest:'docs',
  base:'/scouting-documentation/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Inicio',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Esta es una descripcion',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guía',
        link: '/guide/',
      },
     /*  {
        text: 'Config',
        link: '/config/'
      }, */
      /* {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      } */
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guía',
          collapsable: false,
          children: [
            '',
            'first_steps',
            'client',
            'server'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
