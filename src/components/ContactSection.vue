<template>
  <section class="rm-container section" id="contact" data-aos="fade-up">
    <div
      class="bg-sky-white bg-opacity-5 border-r border-l border-gray-400 relative"
    >
      <h2
        class="text-4xl text-sky-900 font-bold mb-6 ml-48 text-center relative transition-all duration-500 ease-in-out transform hover:text-sky-700 hover:scale-105 hover:-translate-y-1"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
      >
        <span class="py-1 px-1 bg-slate-200 translate-x-10 translate-y-5"
          >Contact</span
        >
      </h2>
      <div class="container px-5 py-8 mx-auto flex">
        <div
          class="lg:w-1/3 md:w-1/2 bg-sky-900 p-4 flex flex-col md:ml-auto w-full mt-8 md:mt-0 relative z-10 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <h2
            class="text-white text-xl mb-2 font-semibold title-font transition-transform transform hover:translate-x-2 hover:text-sky-200"
          >
            Nous contacter
          </h2>
          <p class="leading-relaxed mb-5 text-sky-300">
            Post-ironic Portland shabby chic echo park, banjo fashion axe.
          </p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-sky-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-300 ease-in-out hover:bg-gray-700"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-sky-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-gray-800 rounded border border-gray-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-400 h-32 text-base outline-none text-white py-2 px-3 resize-none leading-6 transition-colors duration-300 ease-in-out hover:bg-gray-700"
            ></textarea>
          </div>
          <button
            class="text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Button
          </button>
          <p class="text-xs text-sky-400 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const hovered = ref(false);
</script>
