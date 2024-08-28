<template>
  <section class="rm-container mt-8 section" id="annonces" data-aos="fade-up">
    <img
      src="~assets/Ellipse.png"
      alt="Filigrane"
      class="absolute top-0 right-2 w-32 h-auto opacity-100"
    />
    <div class="bg-sky-white bg-opacity-5 border-gray-400 px-4">
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
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const hovered = ref(false);
</script>
