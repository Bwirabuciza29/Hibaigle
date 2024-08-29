<template>
  <section
    class="rm-container section relative"
    id="services"
    data-aos="fade-up"
  >
    <img
      src="~assets/bg.svg"
      alt="filigrane"
      class="absolute top-1/2 left-3/4 transform -translate-x-3/4 -translate-y-3/4 w-full md:w-3/4 opacity-10 pointer-events-none"
    />

    <div class="relative bg-opacity-5 px-4 py-12">
      <h2
        class="text-4xl text-white font-bold mb-6 text-center relative transition-all duration-500 ease-in-out transform hover:text-sky-700 hover:scale-105 hover:-translate-y-1"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
      >
        <span class="py-1 px-1 bg-slate-400 translate-x-10 translate-y-5"
          >Nos</span
        >
        Services
      </h2>
      <p class="font-semibold text-gray-500 text-center hover:text-white pb-4">
        Nos services sont accessibles à tous et compatible aux besoins
        numériques
      </p>
      <div class="relative p-6">
        <!-- Filigrane -->
        <img
          src="~assets/Marni 2.png"
          alt="Filigrane"
          class="absolute -top-4 -left-24 w-64 h-68 opacity-90 overflow-hidden"
        />
        <img
          src="~assets/Ellipse.png"
          alt="Filigrane droite"
          class="absolute bottom-0 -right-16 w-32 h-32 opacity-5"
        />
        <!-- <img
          src="~assets/Other.png"
          alt="Filigrane centre"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-100 z-20"
        /> -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 relative z-10">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="relative flex flex-col justify-between p-6 bg-gradient-to-r from-sky-900 via-sky-800 to-transparent border border-sky-800 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
            :style="`background-image: url('${card.image}'); background-size: cover; background-position: center;`"
          >
            <div>
              <h3 class="text-xl font-semibold mb-2">{{ card.title }}</h3>
              <p class="text-gray-200">{{ card.description }}</p>
            </div>
            <button
              class="relative inline-block w-1/2 px-2 py-2 mt-4 text-white bg-sky-900 border-2 border-sky-800 rounded-full overflow-hidden group transform transition-transform hover:scale-100"
            >
              <span
                class="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-sky-900"
                >En savoir plus</span
              >

              <div
                class="absolute inset-0 w-full h-full bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const cards = [
  {
    title: "Conception",
    description:
      "Développement des solutions technologiques (gadgets et appareils électroniques, logiciels, progiciel, , applications, etc.) axées sur les secteurs de l’éducation, de l’environnement, de la santé, etc.",
    // image: "/src/assets/met.jpg",
  },
  {
    title: "Etudes & Consultances",
    description:
      "Meilleur service d'appui et de consultance en Electricité, Electronique et Electro-mécanique",
  },
  {
    title: "Audit & Sous-traitance",
    description: "Audit, consultance, sous-traitance et assistance en IT",
  },
  {
    title: "Marketing digital",
    description: "Graphisme,Design et couverture médiatique",
  },
];
const hovered = ref(false);
</script>
