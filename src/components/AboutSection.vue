<template>
  <section class="rm-container section" id="about">
    <img
      src="~assets/shape.png"
      alt="Filigrane"
      class="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 w-24 sm:w-32 md:w-40 lg:w-48 h-auto opacity-100"
    />
    <div
      class="bg-sky-500 bg-opacity-5 border-r border-l border-gray-400 px-4 py-12"
    >
      <h2
        class="text-4xl text-sky-900 font-bold mb-6 text-center relative transition-all duration-500 ease-in-out transform hover:text-sky-700 hover:scale-105 hover:-translate-y-1"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
      >
        Qui sommes-nous ?
      </h2>
      <div class="relative rm-wrapper">
        <!-- Heading -->
        <span
          class="absolute top-1/4 sm:top-1/3 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-gray-500 opacity-10 z-0"
        >
          hibaigle
        </span>
        <div>
          <!-- Text Paragraph -->
          <p class="text-pretty text-gray-700 mb-6 text-center">
            Nous sommes une Société par Action simplifié de droit congolais,
            basée à Goma. <br />
            Centrée sur les numériques, la société hibaigle propose différents
            services dont le développement des logiciels, l'assistance
            marketing, la consultance dans les analyses des données et le
            marketing digital, l'Audit informatique, la maintenance; et divers
            produits en cours de déploiement et de développement pour une
            intégration significative du numérique ainsi qu'une immersion à
            moindre risque au profit de tous.
          </p>

          <!-- Voir Plus Button -->
          <div class="text-center mb-10">
            <div class="relative inline-flex items-center">
              <!-- Forme ronde -->
              <span
                class="absolute left-20 -top-5 w-16 h-16 bg-sky-200 rounded-full opacity-30 animate-pulse z-0"
              ></span>
              <!-- Bouton -->
              <router-link to="/about">
                <button
                  class="relative inline-flex items-center text-sky-900 hover:text-gray-500 font-semibold text-lg transition-all duration-500 ease-in-out z-10"
                >
                  Voir plus
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5 ml-2 transition-transform duration-500 ease-in-out transform hover:translate-x-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const hovered = ref(false);
</script>
