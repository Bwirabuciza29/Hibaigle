<template>
  <section class="rm-container section" id="equipe" data-aos="fade-up">
    <div class="bg-white bg-opacity-5 border-r border-l border-gray-400">
      <h2
        class="text-4xl text-sky-900 font-bold mb-6 text-center relative transition-all duration-500 ease-in-out transform hover:text-sky-700 hover:scale-105 hover:-translate-y-1"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
      >
        <span class="py-1 px-1 bg-slate-200 translate-x-10 translate-y-5"
          >Notre</span
        >
        Equipe
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-8 mt-8">
        <div
          v-for="card in cardData"
          :key="card.name"
          class="bg-sky-50 hover:bg-white hover:border-sky-200 hover:border-2 rounded-lg p-6"
        >
          <div class="flex items-center justify-between">
            <img
              :src="card.image"
              :alt="card.alt"
              class="rounded-lg w-16 h-16"
            />
            <div class="flex items-center">
              <a
                :href="card.links.twitter"
                class="text-gray-400 hover:text-black mx-2"
              >
                <i class="fa-brands fa-x-twitter text-2xl"></i>
              </a>
              <a
                :href="card.links.github"
                class="text-gray-400 hover:text-gray-700 mx-2"
              >
                <i class="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                :href="card.links.linkedin"
                class="text-gray-400 hover:text-sky-700 mx-2"
              >
                <i class="fa-brands fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
          <div class="flex items-center justify-between mt-4">
            <div>
              <h3 class="text-lg font-semibold">
                <span class="text-sky-900">{{ card.name }}</span> |
                <span class="text-gray-400">{{ card.title }}</span>
              </h3>
            </div>
          </div>
          <p class="text-gray-500">{{ card.description }}</p>
        </div>
        <!-- End Deuxieme Carnd -->
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from "vue";

const hovered = ref(false);

// Card data
const cardData = ref([
  {
    image: "src/assets/avatar3.jpg",
    alt: "Ayane OSEE",
    name: "Ayane OSEE",
    title: "CEO",
    description: "Data manager",
    links: {
      twitter: "https://x.com/OBooye",
      github: "https://github.com/oseeayan",
      linkedin: "http://www.linkedin.com/in/oseeayan",
    },
  },
  {
    image: "src/assets/avatar6.jpg",
    alt: "Bwirabuciza",
    name: "BWIRABUCIZA",
    title: "CTO",
    description: "Dev UI&UX",
    links: {
      twitter: "https://x.com/achille_blondy",
      github: "https://github.com/Bwirabuciza29",
      linkedin: "https://www.linkedin.com/in/bwirabuciza-blondy-58b137245/",
    },
  },
  {
    image: "src/assets/avatar5.jpg",
    alt: "Florence",
    name: "Linda WAZA",
    title: "CCO",
    description: "Data analyst",
    links: {
      twitter: "https://x.com/lindafoibe07/status/1668493930734731264?s=46",
      github: "#",
      linkedin:
        "https://www.linkedin.com/in/linda-foibe-68a5a1278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },
  {
    image: "src/assets/avatar2.jpg",
    alt: "Ringo",
    name: "Riguen KATEKA",
    title: "CFO",
    description: "Accountant",
    links: {
      twitter: "",
      github: "#",
      linkedin:
        "https://www.linkedin.com/in/riguen-kateka-1381112b7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  // Autres Cards
]);
</script>
