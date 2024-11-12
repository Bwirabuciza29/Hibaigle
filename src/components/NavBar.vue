<template>
  <div class="rm-wrapper">
    <nav
      id="accueil"
      class="fixed w-full z-30 top-0 text-white"
      :class="{ 'bg-white shadow': isScrolled }"
    >
      <div
        class="w-full rm-container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
      >
        <!-- image logo -->
        <div class="pl-4 flex items-center">
          <q-img class="w-20 my-2" src="/img/logo_h.png" />
        </div>
        <!-- Navbar links -->
        <div class="gt-sm">
          <ul
            class="flex items-center gap-2 font-semibold transition-colors duration-300 ease-in-out text-sm"
            :class="{ 'text-sky-900': isScrolled }"
          >
            <li v-for="item in menuItems" :key="item.name">
              <a
                :href="'#' + item.name.toLowerCase()"
                :class="linkClass(item.name)"
                class="relative group transition-colors duration-300 ease-in-out hover:text-sky-900 text-sm"
                @click.prevent="
                  () => {
                    scrollToSection(item.name.toLowerCase());
                    setActiveLink(item.name);
                  }
                "
              >
                {{ item.name }}
                <span
                  class="absolute left-0 bottom-0 w-full h-[1px] bg-sky-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                ></span>
              </a>
            </li>
            <!-- bouton langues -->
          </ul>
        </div>
        <!-- Fin Navbar links -->
        <!-- Les boutons left du Navbar -->
        <div class="gt-sm flex flex-wrap items-center gap-2">
          <!-- <LangSwitcher class="flex-shrink-0" /> -->
          <router-link to="/souscrire">
            <button
              class="relative inline-block px-4 py-2 font-semibold text-white bg-sky-900 border-2 border-sky-800 rounded overflow-hidden group"
            >
              <span
                class="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-sky-900"
              >
                Souscrire
              </span>
              <div
                class="absolute inset-0 w-full h-full bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              ></div>
            </button>
          </router-link>
        </div>

        <!-- fin bouton -->
        <!-- Le menu toggle -->
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
          >
            <q-menu
              transition-show="scale"
              transition-hide="scale"
              class="bg-transparent w-full flex justify-center"
            >
              <div
                class="ml-10 blur-background w-full max-w-4xl bg-sky-900 bg-opacity-70 text-white border border-gray-400 rounded-lg"
              >
                <div class="grid flex-wrap mt-0 px-4 mx-10">
                  <div class="pl-4 flex items-center justify-between">
                    <q-img class="w-20 my-2" src="/img/logo_h.png" />
                    <q-btn
                      @click="toggleMenus"
                      flat
                      icon="close"
                      class="text-lg transition-transform duration-200 ease-in-out transform active:scale-90"
                      v-close-popup
                    />
                  </div>
                  <div class="border border-x-white w-full"></div>

                  <nav
                    :class="[
                      'flex flex-col lg:flex-row gap-2 items-center',
                      isScrolled ? 'bg-gray-800 shadow-lg' : '',
                      'transition-opacity duration-500 ease-in-out',
                      {
                        'opacity-0': !isMenuVisible,
                        'opacity-100': isMenuVisible,
                      },
                    ]"
                  >
                    <div
                      class="flex flex-col lg:flex-row gap-4 my-4 text-gray-400"
                    >
                      <a
                        v-for="item in menuItems"
                        :key="item.name"
                        :class="linkClass(item.name)"
                        @click.prevent="
                          () => {
                            scrollToSection(item.name.toLowerCase());
                            setActiveLink(item.name);
                            closeMenu();
                          }
                        "
                        v-close-popup
                        class="text-xl font-bold ml-4 hover:text-white"
                        href="#"
                      >
                        {{ item.name }}
                      </a>
                    </div>
                  </nav>

                  <router-link to="/souscrire">
                    <button
                      @click="
                        () => {
                          openDialogue();
                          closeMenu();
                        }
                      "
                      v-close-popup
                      class="w-full mt-4 px-4 py-2 font-semibold text-white bg-sky-900 border-2 border-sky-800 rounded"
                    >
                      Souscrire
                    </button>
                  </router-link>

                  <div
                    class="flex flex-col lg:flex-row justify-between items-center lg:items-start my-8 text-sm"
                  >
                    <div class="text-center lg:text-left">
                      © 2024 hibaigle. Made with ❤ and ☕
                    </div>
                  </div>
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <!-- end -->

      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import VueScrollTo from "vue-scrollto";

const menuItems = [
  { name: "Accueil" },
  { name: "About" },
  { name: "Services" },
  { name: "Equipe" },
  { name: "Contact" },
];

const isScrolled = ref(false);
const isMenuVisible = ref(true);
const isMenuOpen = ref(false);
const dialog = ref(false);
const dialogue = ref(false);

// État pour le lien actif
const activeLink = ref("Accueil");

// Fonction pour définir le lien actif
const setActiveLink = (linkName) => {
  activeLink.value = linkName;
};

// Fonction pour déterminer les classes des liens de navigation
const linkClass = (linkName) => {
  return activeLink.value === linkName
    ? "text-sm font-bold ml-4 hover:text-white text-blue-500 underline"
    : "text-sm font-bold ml-4 hover:text-white";
};

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

const toggleMenus = () => {
  isMenuOpen.value = !isMenuOpen.value;
  dialog.value = !dialog.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const scrollToSection = (sectionId) => {
  VueScrollTo.scrollTo(`#${sectionId}`, 500, { easing: "ease-in-out" });
};

// Fonction pour ouvrir le dialog avec 'invert(70%)'
const openDialogue = () => {
  dialogue.value = true;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
