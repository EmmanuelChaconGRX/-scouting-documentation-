const { description } = require('../../package')

module.exports = {
  dest: 'docs',
  base: '/scouting-documentation/',
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
        text: 'Configuraciones',
        link: '/guide/',
      },
      {
        text: 'Cliente (Vuejs)',
        link: '/client/'
      },
      {
        text: 'Servidor (Nodejs',
        link: '/server/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guía de configuración',
          collapsable: false,
          children: [
            '',
            'first_steps',
            'client',
            'server'
          ]
        }
      ],
      '/client/': [
        {
          title: 'Información',
          collapsable: false,
          children: [
            '',
            'mockups',
            'vuejs',
            'libraries',
            'estructure',
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
