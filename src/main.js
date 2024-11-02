import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n"; // Chemin vers le fichier i18n
import { Quasar } from "quasar";

const app = createApp(App);

app.use(Quasar);
app.use(i18n);

app.mount("#app");
