// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@invictus.codes/nuxt-vuetify"],

    ssr: false,
    devtools: false,

    css: [
        "~/assets/css/tailwind.css",
    ],
})
