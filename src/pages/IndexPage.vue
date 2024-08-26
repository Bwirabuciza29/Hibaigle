<template>
  <div>
    <!-- Navbar -->
    <nav
      id="header"
      class="fixed w-full z-30 top-0 text-white"
      :class="{ 'bg-white shadow': isScrolled }"
    >
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
      >
        <div class="pl-4 flex items-center">
          <q-img class="w-16 my-2" src="~assets/lg.png" />
        </div>
        <div>
          <ul class="flex items-center gap-4 font-semibold">
            <li><a href="#" class="hover:text-sky-500">Accueil</a></li>
            <li><a href="#" class="hover:text-sky-500">Annonces</a></li>
            <li><a href="#" class="hover:text-sky-500">A Propos</a></li>
            <li><a href="#" class="hover:text-sky-500">Services</a></li>
            <li><a href="#" class="hover:text-sky-500">Equipe</a></li>
            <li><a href="#" class="hover:text-sky-500">Contact</a></li>
          </ul>
        </div>
        <div>
          <button
            class="bg-sky-900 text-white rm-btn rounded-lg font-semibold hover:bg-sky-600"
          >
            h~LAC
          </button>
        </div>
      </div>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
    <!-- Image de fond -->
    <div class="background-image h-screen flex items-center justify-center">
      <h1 class="text-5xl text-white font-bold">Bienvenue sur notre site</h1>
    </div>
  </div>
  <div class="rm-wrapper bg-white">
    <!-- <div class="rm-container text-justify bg-gray-50"> -->
    <div
      class="relative rm-container before:absolute before:left-0 before:top-1/2 before:w-10 before:h-[2px] before:bg-white after:absolute after:right-0 after:top-1/2 after:w-10 after:h-[2px] after:bg-white"
    >
      <!-- Contenu du container -->

      <h2
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Title
      </h2>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto bg-gray-500 w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis
      cum unde! Animi in saepe pariatur sint porro illum, sequi consectetur
      sapiente necessitatibus mollitia qui. Vero voluptas id ipsum delectus!
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>


<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.navbar.scrolled {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.background-image {
  background-image: url("/src/assets/hero-bg.jpg");
  background-size: cover;
  background-position: center;
}
</style>
