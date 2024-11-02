<template>
  <div class="relative">
    <!-- Bouton de sélection de langue -->
    <button
      class="flex items-center bg-gray-800 bg-opacity-20 text-white px-4 py-2 rounded-lg"
      @click="toggleDropdown"
      :class="{ 'text-sky-900': isScrolled }"
    >
      <span class="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </span>
      <!-- Icône de langue -->
      <span class="flex items-center">
        <img
          :src="currentFlag"
          class="w-4 h-4 rounded-full mr-2"
          :alt="currentLanguage + ' Flag'"
        />
        <span>{{ currentLanguage }}</span>
      </span>
      <svg
        class="ml-2 w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Menu déroulant -->
    <div
      v-if="isDropdownOpen"
      class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10"
    >
      <a
        href="#"
        class="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200"
        @click="selectLanguage('EN', 'https://flagcdn.com/w20/us.png')"
      >
        <img
          src="https://flagcdn.com/w20/us.png"
          class="w-4 h-4 rounded-full mr-2"
          alt="US Flag"
        />
        <span>English (US)</span>
      </a>
      <a
        href="#"
        class="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200"
        @click="selectLanguage('FR', 'https://flagcdn.com/w20/fr.png')"
      >
        <img
          src="https://flagcdn.com/w20/fr.png"
          class="w-4 h-4 rounded-full mr-2"
          alt="FR Flag"
        />
        <span>Français (FR)</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Variable réactive pour contrôler l'affichage du menu déroulant
const isDropdownOpen = ref(false);

// Variables pour la langue actuelle et le drapeau
const currentLanguage = ref("FR");
const currentFlag = ref("https://flagcdn.com/w20/fr.png");

// Fonction pour basculer l'affichage du menu déroulant
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Fonction pour sélectionner une langue et mettre à jour le drapeau
const selectLanguage = (lang, flag) => {
  currentLanguage.value = lang;
  currentFlag.value = flag;
  isDropdownOpen.value = false;
};
</script>
