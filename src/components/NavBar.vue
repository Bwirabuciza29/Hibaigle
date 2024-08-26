<template>
  <nav
    id="header"
    class="fixed w-full z-30 top-0 text-white"
    :class="{ 'bg-white shadow': isScrolled }"
  >
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <q-img class="w-20 my-2" src="~assets/logo.png" />
      </div>
      <div class="gt-sm">
        <ul
          class="flex items-center gap-4 font-semibold transition-colors duration-300 ease-in-out"
          :class="{ 'text-black': isScrolled }"
        >
          <li v-for="item in menuItems" :key="item.name">
            <a
              href="#"
              class="relative group transition-colors duration-300 ease-in-out hover:text-sky-900"
            >
              {{ item.name }}
              <span
                class="absolute left-0 bottom-0 w-full h-[2px] bg-sky-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
              ></span>
            </a>
          </li>
        </ul>
      </div>

      <div class="gt-sm gap-1">
        <q-btn
          :class="{ 'text-black': isScrolled }"
          class="q-mr-xs q-py-xs q-px-sm text-white transition-transform duration-200 ease-in-out transform active:scale-90"
          flat
          @click="$q.dark.toggle()"
          color="white"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />
        <button
          class="relative inline-block px-6 py-2 font-semibold text-white bg-sky-900 border-2 border-sky-800 rounded overflow-hidden group"
        >
          <span
            class="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-sky-900"
            >h~LAC</span
          >
          <div
            class="absolute inset-0 w-full h-full bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
          ></div>
        </button>
      </div>
      <div class="lt-md px-2 py-2 bg-sky-900 bg-opacity-20 mr-4">
        <q-btn
          flat
          round
          dense
          @click="toggleMenus"
          :icon="isMenuOpen ? 'close' : 'menu'"
          aria-label="Menu"
          class="text-lg transition-transform duration-200 ease-in-out transform active:scale-90"
          :class="{ 'text-sky-900': isScrolled }"
        />
      </div>
    </div>
    <!-- Dialogue -->
    <q-dialog v-model="dialog" full-width :backdrop-filter="backdropFilter">
      <div
        class="blur-background w-full bg-sky-900 bg-opacity-70 text-white border border-gray-400"
      >
        <div class="container mx-auto grid flex-wrap mt-0 px-2">
          <div class="pl-4 flex items-center justify-between">
            <q-img class="w-20 my-2" src="~assets/logo.png" />
            <q-btn
              flat
              icon="close"
              class="bg-sky-500 bg-opacity-20 text-lg transition-transform duration-200 ease-in-out transform active:scale-90"
              v-close-popup
            />
          </div>
          <div class="border border-x-white w-full"></div>

          <nav
            :class="[
              'flex gap-2 items-center',
              isScrolled ? 'bg-gray-800 shadow-lg' : '',
              'transition-opacity duration-500 ease-in-out',
              { 'opacity-0': !isMenuVisible, 'opacity-100': isMenuVisible },
            ]"
          >
            <div class="flex flex-col gap-4 my-4 text-gray-400">
              <a
                v-for="item in menuItems"
                :key="item.name"
                :class="linkClass(item.name)"
                @click="setActiveLink(item.name)"
                href="#"
                class="text-xl font-bold ml-4 hover:text-white"
              >
                {{ item.name }}
              </a>
            </div>
          </nav>
          <div class="mt-8 text-sm">© 2023 Wizee x Studio. Made with ♥</div>
        </div>
      </div>
    </q-dialog>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Liste des éléments de menu
const menuItems = [
  { name: "Accueil" },
  { name: "Annonces" },
  { name: "A Propos" },
  { name: "Services" },
  { name: "Equipe" },
  { name: "Contact" },
];

// États pour la visibilité du menu et le défilement
const isScrolled = ref(false);
const isMenuVisible = ref(true); // Définir sur `true` si vous voulez que le menu soit visible au démarrage
const isMenuOpen = ref(false);
const dialog = ref(false); // État pour le dialogue
const backdropFilter = ref("grayscale(100%)");

// État actif pour le lien sélectionné
const activeLink = ref("Accueil"); // Par défaut, "Accueil" est actif

// Fonction pour définir le lien actif
const setActiveLink = (linkName) => {
  activeLink.value = linkName;
};

// Fonction pour déterminer les classes des liens de navigation
const linkClass = (linkName) => {
  return activeLink.value === linkName
    ? "text-xl font-bold ml-4 hover:text-white text-blue-500 underline"
    : "text-xl font-bold ml-4 hover:text-white";
};

// Fonction pour basculer la visibilité du menu
const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

// Fonction pour basculer l'état ouvert du menu
const toggleMenus = () => {
  isMenuOpen.value = !isMenuOpen.value;
  dialog.value = !dialog.value;
};

// Fonction pour gérer le défilement
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// Ajouter et supprimer les gestionnaires d'événements de défilement
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
