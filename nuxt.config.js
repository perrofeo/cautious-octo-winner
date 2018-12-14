const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'es'
    },
    prefix:{og: 'http://ogp.me/ns#', fb: 'http://ogp.me/ns/fb#', website: 'http://ogp.me/ns/website#'},
 
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'ZfxAdk-XMwQcwM3ZTjnCT38ROij-UchzfjLuoUl90oY' },
      { name: 'keywords', content: 'wedding,filmmaker,musicvideo,video boda,bodas,hondarribia,irun,bodaseuskadi,ezkontza,filmmaking,eventos' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property:'og:title', content: 'Noare Films' },
      { property:'og:type', content: 'Website' },
      { property:'og:url', content: 'https://www.noarefilms.com/' },
      { property:'og:image', content: 'https://www.noarefilms.com/' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-scrollto.js',
    '~plugins/font-awesome.js',
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
    // ...
 
],

// ...
    


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
