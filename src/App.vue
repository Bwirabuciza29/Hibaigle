<template>
  <router-view />
</template>

<script setup>
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  lazy: true,
  langDir: "locales",
  strategy: "prefix_except_default",
  locales: [
    { code: "fr-FR", iso: "fr-FR", name: "français", file: "fr-FR.json" },
    { code: "en-UK", iso: "en-UK", name: "english (UK)", file: "en-UK.json" },
    { code: "es-ES", iso: "es-ES", name: "español", file: "es-ES.json" },
    { code: "in-HI", iso: "in-HI", name: "हिन्दी", file: "in-HI.json" },
  ],
  defaultLocale: "fr-FR",
  vueI18n: "./i18n.config.js",
});
</script>

