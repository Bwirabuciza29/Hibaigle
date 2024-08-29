<template>
  <section class="rm-container section" id="services" data-aos="fade-up">
    <div class="bg-sky-white bg-opacity-5 border-r border-l border-gray-400">
      <h2
        class="text-4xl text-sky-900 font-bold mb-6 text-center relative transition-all duration-500 ease-in-out transform hover:text-sky-700 hover:scale-105 hover:-translate-y-1"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
      >
        <span class="py-1 px-1 bg-slate-200 translate-x-10 translate-y-5"
          >Notre</span
        >
        Méthodologie
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-8 relative">
        <!-- Large Card on the Left -->
        <div
          class="col-span-1 md:col-span-2 bg-sky-900 text-white rounded-xl p-8 relative bg-cover bg-center"
          style="background-image: url('/src/assets/met.jpg')"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-sky-900 to-transparent opacity-80 rounded-xl"
          ></div>
          <div class="relative z-10">
            <span class="block text-sm uppercase">Notre Méthodologie</span>
            <h2
              class="text-2xl text-white pt-12 font-semibold my-4 transition-transform transform hover:scale-90"
            >
              Nos solutions sont conçues dans le but d'offrir aux utilisateurs
              une expérience unique et une grande facilité dans l'utilisation.
            </h2>
            <div
              class="bottom-8 left-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
            >
              <a
                href="#"
                class="bg-sky-700 hover:bg-sky-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-sky-700 hover:to-sky-900"
              >
                Nos projets <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Cards on the Right -->
        <div
          class="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div
            class="col-span-1 bg-yellow-100 text-gray-800 rounded-xl p-8 transition-transform transform hover:scale-105 hover:bg-yellow-200 relative"
          >
            <!-- <img
              src="~assets/communication.svg"
              alt="Watermark"
              class="absolute left-0 top-0 w-full h-full object-cover opacity-10"
            /> -->
            <div class="text-yellow-500 font-bold uppercase text-xs mb-2">
              Communication
            </div>
            <p class="mb-4 text-justify">
              Notre service client est à votre écoute 24h/24h et tous le jours
              de la semaine.
            </p>
          </div>

          <div
            class="col-span-1 bg-red-100 text-gray-800 rounded-xl p-8 transition-transform transform hover:scale-105 hover:bg-red-200 relative"
          >
            <!-- <img
              src="~assets/coding.svg"
              alt="Watermark"
              class="absolute left-0 top-0 w-full h-full object-cover opacity-10"
            /> -->
            <div class="text-red-500 font-bold uppercase text-xs mb-2">
              Développement
            </div>
            <p class="mb-4 text-justify">
              Nos développeurs travaillent dur pour vous assurer une meilleure
              expérience utilisateur.
            </p>

            <!-- Watermark Image -->
            <img
              src="~assets/Other.png"
              alt="Filigrane"
              class="absolute -top-24 -right-10 w-40 h-auto opacity-100"
            />
          </div>

          <div
            class="col-span-1 bg-green-100 text-gray-800 rounded-xl p-8 transition-transform transform hover:scale-105 hover:bg-green-200 relative"
          >
            <!-- <img
              src="~assets/motivation.svg"
              alt="Watermark"
              class="absolute left-0 top-0 w-full h-full object-cover opacity-10"
            /> -->
            <div class="text-green-500 font-bold uppercase text-xs mb-2">
              Motivation
            </div>
            <p class="mb-4 text-justify">
              Motivés par la volonté de bien faire et de vous offrir le
              meilleur.
            </p>
          </div>

          <div
            class="col-span-1 bg-purple-100 text-gray-800 rounded-xl p-8 transition-transform transform hover:scale-105 hover:bg-purple-200 relative"
          >
            <!-- <img
              src="~assets/security.svg"
              alt="Watermark"
              class="absolute left-0 top-0 w-full h-full object-cover opacity-10"
            /> -->
            <div class="text-purple-500 font-bold uppercase text-xs mb-2">
              Sécurité
            </div>
            <p class="mb-4 text-justify">
              La confidentialité et le chiffrement de vos données de bout en
              bout.
            </p>
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
