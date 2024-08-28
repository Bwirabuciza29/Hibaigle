<template>
  <section class="rm-container section" id="annonces" data-aos="fade-up">
    <!-- <img
      src="~assets/Other.png"
      alt="Filigrane"
      class="absolute top-0 right-2 w-40 h-auto opacity-100"
    /> -->
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
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 relative">
        <!-- Large Card -->
        <div
          class="col-span-1 md:col-span-2 bg-blue-900 text-white rounded-xl p-8 relative bg-cover bg-center transition-transform transform hover:scale-105"
          style="background-image: url('/src/assets/met.jpg')"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-80 rounded-xl"
          ></div>
          <div class="relative z-10">
            <span class="block text-sm uppercase">Notre Méthodologie</span>
            <h2
              class="text-3xl font-bold my-4 transition-transform transform hover:scale-110"
            >
              Nous façonnons le futur grâce à la technologie.
            </h2>
            <div class="bottom-8 left-8 flex space-x-4">
              <a
                href="#"
                class="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Nos projets <span aria-hidden="true">→</span>
              </a>
              <a
                href="#"
                class="bg-white text-blue-700 hover:bg-gray-100 py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Notre expertise <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Cards -->
        <div
          class="col-span-1 bg-yellow-100 text-gray-800 rounded-xl p-8 transition-transform transform hover:scale-105 hover:bg-yellow-200"
        >
          <p class="mb-4 text-justify">
            Nos solutions sont conçues dans le but d'offrir aux utilisateurs une
            expérience unique et une grande facilité dans l'utilisation.
          </p>
          <h3
            class="text-lg font-bold transition-transform transform hover:scale-110"
          >
            Consultez <span aria-hidden="true">→</span>
          </h3>
        </div>

        <div
          class="col-span-1 bg-red-100 text-gray-800 rounded-xl p-8 transition-transform transform hover:scale-105 hover:bg-red-200 relative"
        >
          <div class="text-red-500 font-bold uppercase text-xs mb-2">
            Développement
          </div>
          <p class="mb-4 text-justify">
            Nos développeurs travaillent dur pour vous assurer une meilleure
            expérience utilisateur.
          </p>
          <h3
            class="text-lg font-bold transition-transform transform hover:scale-110"
          >
            Découvrez <span aria-hidden="true">→</span>
          </h3>

          <!-- Watermark Image -->
          <img
            src="~assets/Other.png"
            alt="Filigrane"
            class="absolute -top-24 -right-10 w-40 h-auto opacity-100"
          />
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4 relative">
        <div>01</div>
        <!-- ... -->
        <div>09</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const hovered = ref(false);
</script>
