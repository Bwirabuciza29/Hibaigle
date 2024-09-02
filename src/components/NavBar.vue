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
          <q-img class="w-20 my-2" src="~assets/logo (1).png" />
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
          </ul>
        </div>
        <!-- Fin Navbar links -->
        <!-- Les boutons left du Navbar -->
        <div class="gt-sm gap-1">
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
          />
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
const activeLink = ref("Accueil");

// Fonction pour définir le lien actif
const setActiveLink = (linkName) => {
  activeLink.value = linkName;
};

// Fonction pour déterminer les classes des liens de navigation
const linkClass = (linkName) => {
  return activeLink.value === linkName
    ? "text-sm font-bold ml-4 text-yellow-400 underline"
    : "text-sm font-bold ml-4 hover:text-white";
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const scrollToSection = (sectionId) => {
  VueScrollTo.scrollTo(`#${sectionId}`, 500, { easing: "ease-in-out" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // 60% visible pour être considéré comme actif
    }
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
