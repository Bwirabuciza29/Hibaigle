<template>
  <section
    class="rm-container section relative"
    id="services"
    data-aos="fade-up"
  >
    <div class="bg-opacity-5 px-4 py-12 text-white">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Left Column -->
        <div>
          <h2 class="text-xl font-bold mb-4">hibaigle.</h2>
          <div class="relative rm-wrapper">
            <!-- Heading -->
            <span
              class="absolute top-20 sm:top-24 md:top-28 lg:top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-gray-500 opacity-10 z-0"
            >
              hibaigle
            </span>
          </div>
          <p class="mb-2">
            <strong>108 Av.Beni Q.Katindo</strong><br />
            C.Goma, Nord-Kivu/Goma, RDC.
          </p>
          <p class="mb-2">
            <strong>Tél:</strong> +243 995 825 482 / +243 823 138 020
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:info@hibaigle.net" class="text-blue-400"
              >info@hibaigle.net</a
            >
          </p>
        </div>

        <!-- Middle Column -->
        <div>
          <h2 class="text-xl font-bold mb-4">Nos Services</h2>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-sky-400">Conception</a></li>
            <li>
              <a href="#" class="hover:text-sky-400">Etudes & Consultances</a>
            </li>
            <li>
              <a href="#" class="hover:text-sky-400">Audits & Sous-traitance</a>
            </li>
            <li>
              <a href="#" class="hover:text-sky-400">Marketing Digital</a>
            </li>
          </ul>
        </div>

        <!-- Right Column -->
        <div>
          <h2 class="text-xl font-bold mb-4">Notre Newsletter</h2>
          <p class="mb-4">
            Pour recevoir nos mails afin de rester en contact avec nous!
          </p>
          <form class="flex">
            <input
              type="email"
              placeholder="votre mail"
              class="p-2 w-2/3 rounded-l-md text-gray-900"
            />
            <button
              type="submit"
              class="bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-r-md"
            >
              souscrire
            </button>
          </form>
        </div>
      </div>

      <div class="border-t border-sky-500 mt-10 pt-4">
        <div
          class="container mx-auto flex flex-col md:flex-row justify-between items-center"
        >
          <p class="text-sm">
            &copy;2024 <span class="font-bold">hibaigle inc.</span> Tous droits
            réservés
          </p>
          <p class="text-sm">
            Designed by
            <a href="#" class="text-blue-400 hover:underline">hibaigle team</a>
          </p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="text-white hover:text-blue-400"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="#" class="text-white hover:text-blue-400"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="#" class="text-white hover:text-blue-400"
              ><i class="fab fa-instagram"></i
            ></a>
            <a href="#" class="text-white hover:text-blue-400"
              ><i class="fab fa-skype"></i
            ></a>
            <a href="#" class="text-white hover:text-blue-400"
              ><i class="fab fa-linkedin-in"></i
            ></a>
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
