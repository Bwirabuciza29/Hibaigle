<template>
  <div>
    <NavAbout />
    <main class="profile-page">
      <section class="relative block" style="height: 500px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover flex items-center justify-center"
          style="background-image: url('/src/assets/hero-b.jpg')"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
          <div class="relative z-10 text-white text-center p-4">
            <h1 class="text-5xl font-bold -mt-32">Nos Projets</h1>
          </div>
        </div>
      </section>

      <section class="relative py-16 bg-slate-950">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="py-4 px-6 bg-white">
              <div class="flex flex-wrap gap-2 mb-4 mt-4">
                <a
                  v-for="button in buttons"
                  :key="button.id"
                  :class="[
                    button.id === activeButton
                      ? 'bg-sky-950 text-white'
                      : 'bg-gray-100 text-gray-600',
                    'px-4 py-2 cursor-pointer',
                  ]"
                  @click="setActiveButton(button.id)"
                >
                  {{ button.label }}
                </a>
              </div>
            </div>
            <!-- Cards -->
            <div class="p-6">
              <div
                v-if="filteredCards.length > 0"
                class="grid grid-cols-2 sm:grid-cols-2 gap-4"
              >
                <!-- Début CARD -->
                <div
                  v-for="item in filteredCards"
                  :key="item.id"
                  class="bg-sky-50 flex flex-col sm:flex-row hover:border border-sky-900 hover:bg-white"
                >
                  <img
                    :src="item.image"
                    alt="Card Image"
                    class="w-full sm:w-1/3 h-40 object-cover"
                  />

                  <div class="w-full sm:w-2/3 p-3">
                    <div class="flex items-center gap-2 mb-1">
                      <span
                        :class="item.labelClass"
                        class="px-2 py-1 text-xs font-bold rounded-full"
                        >{{ item.label }}</span
                      >
                    </div>
                    <h2 class="text-sm font-semibold mb-1">{{ item.title }}</h2>
                    <p class="text-xs text-gray-500">{{ item.date }}</p>
                  </div>
                </div>
                <!-- Fin card -->
              </div>
              <div v-else class="text-center">
                <img
                  src="~assets/none.png"
                  alt="No Content"
                  class="mx-auto w-48 h-auto"
                />
                <p class="text-gray-400 mt-2 font-semibold">
                  Aucun projet disponible pour cette catégorie.
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </section>
    </main>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import NavAbout from "src/components/AboutSections/NavAbout.vue";
import FooterSection from "src/components/FooterSection.vue";
const buttons = [
  { id: 1, label: "TOUS LES PROJETS" },
  { id: 2, label: "h~mahanay" },
  { id: 3, label: "h~muke" },
  { id: 4, label: "h~soma" },
  { id: 5, label: "h~santé" },
];

const cards = [
  {
    id: 1,
    image: "src/assets/mahanayV1.png",
    label: "h~mahanay",
    labelClass: "bg-sky-600 text-white",
    title: "La plateforme la plus optimale pour la gestion saine de vos biens",
    date: "19 octobre 2023 à 11:47 UTC+2",
    // readTime: "1 min de lecture",
  },
  {
    id: 2,
    image: "src/assets/baby.jpg",
    label: "h~muke",
    labelClass: "bg-green-600 text-white",
    title: "La plateforme la plus optimale pour la gestion saine de vos biens",
    date: "19 octobre 2023 à 11:47 UTC+2",
    // readTime: "1 min de lecture",
  },
  {
    id: 3,
    image: "src/assets/vr.png",
    label: "h~soma",
    labelClass: "bg-yellow-400 text-white",
    title: "La plateforme la plus optimale pour la gestion saine de vos biens",
    date: "19 octobre 2023 à 11:47 UTC+2",
    // readTime: "1 min de lecture",
  },
];
const activeButton = ref(1);

const setActiveButton = (id) => {
  activeButton.value = id;
};

const filteredCards = computed(() => {
  if (activeButton.value === 1) {
    return cards;
  } else {
    return cards.filter(
      (card) =>
        card.label ===
        buttons.find((button) => button.id === activeButton.value).label
    );
  }
});
</script>
