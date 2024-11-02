import { createI18n } from "vue-i18n";

// Messages en fonction des langues
const messages = {
  en: {
    menu: {
      home: "Home",
      about: "About",
      services: "Services",
      team: "Team",
      contact: "Contact",
    },
  },
  fr: {
    menu: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      team: "Équipe",
      contact: "Contact",
    },
  },
};

// Création de l'instance Vue I18n
const i18n = createI18n({
  locale: "fr", // Langue par défaut
  fallbackLocale: "en", // Langue de secours
  messages,
});

export default i18n;
