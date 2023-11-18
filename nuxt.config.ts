// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_variables.scss" as *; @use "@/assets/styles/_mixins.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/dye1syi.css' },
        { rel: 'stylesheet', href: 'https://cdn-images.mailchimp.com/embedcode/classic-061523.css' },
        { type: 'text/javascript', src: 'https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js' }
      ]
    }
  },
  modules: [
    '@nuxt/content',
  ],
  content: {
    documentDriven: true
  },
  ssr: true,
})
