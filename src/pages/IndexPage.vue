<template>
  <div>
    <!-- Navbar -->
    <NavBar />
    <!-- Image de fond -->
    <div class="background-image h-screen flex items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <div class="text-center">
          <h1
            class="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 transition-opacity duration-1000 ease-in-out"
            :class="fadeClass"
          >
            {{ currentMainTitle }}
          </h1>
          <h2
            class="text-yellow-400 text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 transition-opacity duration-1000 ease-in-out"
            :class="fadeClass"
          >
            {{ currentSubTitle }}
          </h2>
          <router-link to="/projects">
            <button
              class="relative inline-block px-6 py-2 font-semibold text-white bg-sky-900 border-2 border-sky-800 rounded overflow-hidden group"
            >
              <span
                class="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-sky-900"
                >Ce que nous vous offrons...</span
              >
              <div
                class="absolute inset-0 w-full h-full bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              ></div>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="rm-wrapper">
      <AboutSection />
    </div>
    <div
      class="rm-wrapper"
      style="background-image: url('src/assets/bg-16.jpg')"
    >
      <MethodSection />
    </div>
    <div class="rm-wrapper bg-sky-950">
      <ServiceSection />
    </div>
    <div class="rm-wrapper bg-white">
      <TeamSection />
    </div>
    <div class="rm-wrapper bg-blue-50">
      <ContactSection />
    </div>
    <div class="rm-wrapper bg-sky-950">
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import NavBar from "src/components/NavBar.vue";
import AboutSection from "src/components/AboutSection.vue";
import MethodSection from "src/components/MethodSection.vue";
import ServiceSection from "src/components/ServiceSection.vue";
import TeamSection from "src/components/TeamSection.vue";
import ContactSection from "src/components/ContactSection.vue";
import FooterSection from "src/components/FooterSection.vue";

// Array of titles for rotation
const mainTitles = ref([
  "Meilleures expériences numériques",
  "Meilleures Approches Clients",
  "Meilleures Assistances Partenaires",
]);
const subTitles = ref([
  "Au service de vos ambitions digitales",
  "Réactivité, Fluidité & Agilité",
  "Expérience utilisateur mise en avant",
]);

// Reactive references for the current title
const currentMainTitle = ref(mainTitles.value[0]);
const currentSubTitle = ref(subTitles.value[0]);

// Class for controlling fade-in effect
const fadeClass = ref("opacity-100");

// Index for tracking the current title
let currentIndex = 0;

// Function to update titles with fade-in effect
const updateTitles = () => {
  fadeClass.value = "opacity-0";

  setTimeout(() => {
    // Met à jour les titres après que l'effet fade out soit terminé
    currentIndex = (currentIndex + 1) % mainTitles.value.length;
    currentMainTitle.value = mainTitles.value[currentIndex];
    currentSubTitle.value = subTitles.value[currentIndex];
    fadeClass.value = "opacity-100";
  }, 1000);
};

onMounted(() => {
  setInterval(updateTitles, 5000);
});
</script>

