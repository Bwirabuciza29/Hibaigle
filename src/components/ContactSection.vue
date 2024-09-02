<template>
  <section
    class="rm-container section relative"
    id="contact"
    data-aos="fade-up"
  >
    <div
      class="bg-sky-white bg-opacity-5 border-r border-l border-gray-400 relative"
    >
      <div class="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.1161132383813!2d29.205895874185824!3d-1.6737196361706503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0f26ed024195%3A0x41de59a10eb8289!2sHibaigle%20SAS!5e0!3m2!1sfr!2scd!4v1725280512461!5m2!1sfr!2scd"
          style=""
        ></iframe>
      </div>
      <h2
        class="text-4xl text-sky-900 font-bold mb-6 text-center relative transition-all duration-500 ease-in-out transform hover:text-sky-700 hover:scale-105 hover:-translate-y-1"
        @mouseover="hovered = true"
        @mouseleave="hovered = false"
      >
        <span class="py-1 px-1 bg-slate-200 translate-x-10 translate-y-5"
          >Contact</span
        >
      </h2>
      <div
        class="text-white text-left flex flex-col items-end gap-4 text-sm relative ml-auto p-4 rounded-lg shadow-lg transition-colors duration-300"
      >
        <div
          class="bg-sky-950 opacity-90 rounded-lg p-4 flex items-center gap-2"
        >
          <div class="flex flex-col">
            <span class="font-bold">Address</span>
            <span>8 Av.Beni Q. Katindo, C.Goma Nord-Kivu/Goma, RDC</span>
            <span>01984-8381</span>
            <div class="py-4">
              <form action="" class="py-2 px-2 space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-white"
                    >Nom</label
                  >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-900 focus:border-sky-900 sm:text-sm"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-white"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-900 focus:border-sky-900 sm:text-sm"
                    placeholder="vous@exemple.com"
                  />
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-white"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-900 focus:border-sky-900 sm:text-sm"
                    placeholder="Votre message ici..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    class="w-full bg-sky-900 text-white px-4 py-2 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-900 focus:ring-offset-2"
                  >
                    Send
                  </button>
                </div>
              </form>
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
