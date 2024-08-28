<template>
  <section class="rm-container mt-8 section" id="annonces" data-aos="fade-up">
    <img
      src="~assets/Vector.png"
      alt="Filigrane"
      class="absolute top-0 right-2 w-32 h-auto opacity-100"
    />
    <div class="bg-opacity-5 px-4 py-12">
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
    </div>
  </section>
</template>
