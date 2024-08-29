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
      <p class="text-white text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe quo
        magni magnam alias eum exercitationem suscipit! Nulla animi ullam et
        veritatis quo, explicabo corrupti ut incidunt ipsa quisquam quas. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Natus saepe quo magni
        magnam alias eum exercitationem suscipit! Nulla animi ullam et veritatis
        quo, explicabo corrupti ut incidunt ipsa quisquam quas.Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Natus saepe quo magni magnam
        alias eum exercitationem suscipit! Nulla animi ullam et veritatis quo,
        explicabo corrupti ut incidunt ipsa quisquam quas.
      </p>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const hovered = ref(false);
</script>
