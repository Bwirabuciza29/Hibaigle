<template>
  <section class="rm-container section" id="annonces" data-aos="fade-up">
    <div
      class="rm-wrapper bg-sky-500 bg-opacity-5 border-r border-l border-gray-400 px-4 py-12"
    >
      <h2
        class="text-4xl text-sky-900 font-semibold mb-6 text-center relative transition-all duration-500 ease-in-out transform hover:text-sky-700 hover:scale-105 hover:-translate-y-1"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
      >
        Qui sommes-nous ?
        <span
          class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-sky-500"
          :class="{
            'w-0': !hovered,
            'w-1/2': hovered,
            'transition-all duration-500 ease-in-out': true,
          }"
        ></span>
      </h2>
     
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const hovered = ref(false);
</script>
