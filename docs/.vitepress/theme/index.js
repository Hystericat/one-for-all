// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
// import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  }
}