<template>
  <div class="rm-wrapper">
    <nav
      id="accueil"
      class="fixed w-full z-30 top-0 text-white"
      :class="{ 'bg-white shadow': isScrolled }"
    >
      <div
        class="w-full rm-container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
      >
        <!-- image logo -->
        <div class="pl-4 flex items-center">
          <q-img class="w-20 my-2" src="/img/logo_h.png" />
        </div>
        <!-- Navbar links -->
        <div class="gt-sm">
          <ul
            class="flex items-center gap-2 font-semibold transition-colors duration-300 ease-in-out text-sm"
            :class="{ 'text-sky-900': isScrolled }"
          >
            <li v-for="item in menuItems" :key="item.name">
              <a
                :href="'#' + item.name.toLowerCase()"
                :class="linkClass(item.name)"
                class="relative group transition-colors duration-300 ease-in-out hover:text-sky-900 text-sm"
                @click.prevent="
                  () => {
                    scrollToSection(item.name.toLowerCase());
                    setActiveLink(item.name);
                  }
                "
              >
                {{ item.name }}
                <span
                  class="absolute left-0 bottom-0 w-full h-[1px] bg-sky-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
                ></span>
              </a>
            </li>
            <!-- bouton langues -->
          </ul>
        </div>
        <!-- Fin Navbar links -->
        <!-- Les boutons left du Navbar -->
        <div class="gt-sm flex flex-wrap items-center gap-2">
          <!-- <LangSwitcher class="flex-shrink-0" /> -->

          <button
            @click="openDialogue"
            class="relative inline-block px-4 py-2 font-semibold text-white bg-sky-900 border-2 border-sky-800 rounded overflow-hidden group"
          >
            <span
              class="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-sky-900"
            >
              Souscrire
            </span>
            <div
              class="absolute inset-0 w-full h-full bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
            ></div>
          </button>

          <q-dialog v-model="dialogue" :backdrop-filter="backdropFilter">
            <q-card
              class="max-w-lg mx-auto overflow-y-auto hide-scrollbar bg-gray-100 square"
              style="max-height: 90vh"
            >
              <q-linear-progress :value="0.6" color="light-blue-10" />
              <q-card-section class="row items-center q-pb-none text-h6">
                <h2 class="font-bold text-sky-700">
                  Formulaire de souscription
                </h2>
              </q-card-section>
              <hr class="border border-sky-700" />

              <!-- FORMULAIRE DE SOUMISSION DES DONNEES -->
              <q-card-section>
                <form @submit.prevent="submitForm">
                  <q-input
                    dense
                    filled
                    v-model="nom"
                    label="Nom"
                    :rules="[(val) => !!val || 'Nom requis']"
                  />
                  <q-input
                    dense
                    filled
                    v-model="nomEntreprise"
                    label="Nom Entreprise"
                    :rules="[(val) => !!val || 'Nom Entreprise requis']"
                  />
                  <q-input
                    dense
                    filled
                    v-model="formeJudiciaire"
                    label="Forme Judiciaire"
                    :rules="[(val) => !!val || 'Forme Judiciaire requise']"
                  />
                  <q-input
                    dense
                    filled
                    v-model="email"
                    label="Email"
                    :rules="[(val) => !!val || 'Email requis']"
                  />
                  <q-input
                    dense
                    filled
                    v-model="services"
                    label="Services"
                    :rules="[(val) => !!val || 'Services requis']"
                  />
                  <q-input
                    dense
                    filled
                    v-model="objectif"
                    label="Objectif"
                    :rules="[(val) => !!val || 'Objectif requis']"
                  />
                  <q-input
                    dense
                    filled
                    v-model="delai"
                    label="Delai"
                    :rules="[(val) => !!val || 'Delai requis']"
                  />
                  <q-input
                    dense
                    filled
                    v-model="budget"
                    label="Budget"
                    :rules="[(val) => !!val || 'Budget requis']"
                  />
                  <q-input
                    dense
                    filled
                    v-model="adresse"
                    label="Adresse"
                    :rules="[(val) => !!val || 'Adresse requise']"
                  />
                  <q-input
                    dense
                    filled
                    v-model="telephone"
                    label="Téléphone"
                    :rules="[(val) => !!val || 'Téléphone requis']"
                  />
                  <q-input
                    dense
                    filled
                    v-model="cahierCharge"
                    label="Cahier Charge"
                    :rules="[(val) => !!val || 'Cahier Charge requis']"
                  />
                </form>
              </q-card-section>
              <!-- FIN FORMULAIRE DE SOUMISSION DES DONNEES -->
              <q-card-actions align="right">
                <q-btn
                  square
                  class="bg-sky-900 w-full"
                  label="Soumettre"
                  color="primary"
                  :disabled="!formIsValid"
                  @click="submitForm"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>

        <!-- fin bouton -->
        <!-- Le menu toggle -->
        <div class="lt-md px-2 py-2 bg-sky-900 bg-opacity-20 mr-4">
          <q-btn
            flat
            round
            dense
            @click="toggleMenus"
            :icon="isMenuOpen ? 'close' : 'menu'"
            aria-label="Menu"
            class="text-lg transition-transform duration-200 ease-in-out transform active:scale-90"
            :class="{ 'text-sky-900': isScrolled }"
          >
            <q-menu
              transition-show="scale"
              transition-hide="scale"
              class="bg-transparent w-full"
            >
              <div
                class="blur-background w-full bg-sky-900 bg-opacity-70 text-white border border-gray-400"
              >
                <div class="container mx-auto grid flex-wrap mt-0 px-2">
                  <div class="pl-4 flex items-center justify-between">
                    <q-img class="w-20 my-2" src="/img/logo_h.png" />
                    <q-btn
                      @click="toggleMenus"
                      flat
                      icon="close"
                      class="text-lg transition-transform duration-200 ease-in-out transform active:scale-90"
                      v-close-popup
                    />
                  </div>
                  <div class="border border-x-white w-full"></div>

                  <nav
                    :class="[
                      'flex flex-col lg:flex-row gap-2 items-center',
                      isScrolled ? 'bg-gray-800 shadow-lg' : '',
                      'transition-opacity duration-500 ease-in-out',
                      {
                        'opacity-0': !isMenuVisible,
                        'opacity-100': isMenuVisible,
                      },
                    ]"
                  >
                    <div
                      class="flex flex-col lg:flex-row gap-4 my-4 text-gray-400"
                    >
                      <a
                        v-for="item in menuItems"
                        :key="item.name"
                        :class="linkClass(item.name)"
                        @click.prevent="
                          () => {
                            scrollToSection(item.name.toLowerCase());
                            setActiveLink(item.name);
                            closeMenu();
                          }
                        "
                        v-close-popup
                        class="text-xl font-bold ml-4 hover:text-white"
                        href="#"
                      >
                        {{ item.name }}
                      </a>
                    </div>
                  </nav>
                  <button
                    @click="
                      () => {
                        openDialogue();
                        closeMenu();
                      }
                    "
                    v-close-popup
                    class="w-full mt-4 px-4 py-2 font-semibold text-white bg-sky-900 border-2 border-sky-800 rounded"
                  >
                    Souscrire
                  </button>
                  <div
                    class="flex flex-col lg:flex-row justify-between items-center lg:items-start my-8 text-sm"
                  >
                    <div class="text-center lg:text-left">
                      © 2024 hibaigle. Made with ❤ and ☕
                    </div>
                  </div>
                </div>
              </div>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <!-- end -->

      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import VueScrollTo from "vue-scrollto";

const menuItems = [
  { name: "Accueil" },
  { name: "About" },
  { name: "Services" },
  { name: "Equipe" },
  { name: "Contact" },
];

const isScrolled = ref(false);
const isMenuVisible = ref(true);
const isMenuOpen = ref(false);
const dialog = ref(false);
const dialogue = ref(false);
const backdropFilter = ref("grayscale(100%)");

// État pour le lien actif
const activeLink = ref("Accueil");

// Champs du formulaire
const nom = ref("");
const nomEntreprise = ref("");
const formeJudiciaire = ref("");
const email = ref("");
const services = ref("");
const objectif = ref("");
const delai = ref("");
const budget = ref("");
const adresse = ref("");
const telephone = ref("");
const cahierCharge = ref("");

// Fonction pour vérifier si le formulaire est valide
const formIsValid = computed(() => {
  return (
    nom.value &&
    nomEntreprise.value &&
    formeJudiciaire.value &&
    email.value &&
    services.value &&
    objectif.value &&
    delai.value &&
    budget.value &&
    adresse.value &&
    telephone.value &&
    cahierCharge.value
  );
});

// Fonction de soumission du formulaire
const submitForm = () => {
  if (formIsValid.value) {
    console.log("Formulaire soumis avec succès");
  } else {
    console.log("Veuillez remplir tous les champs");
  }
};

// Fonction pour définir le lien actif
const setActiveLink = (linkName) => {
  activeLink.value = linkName;
};

// Fonction pour déterminer les classes des liens de navigation
const linkClass = (linkName) => {
  return activeLink.value === linkName
    ? "text-sm font-bold ml-4 hover:text-white text-blue-500 underline"
    : "text-sm font-bold ml-4 hover:text-white";
};

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

const toggleMenus = () => {
  isMenuOpen.value = !isMenuOpen.value;
  dialog.value = !dialog.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const scrollToSection = (sectionId) => {
  VueScrollTo.scrollTo(`#${sectionId}`, 500, { easing: "ease-in-out" });
};

// Fonction pour ouvrir le dialog avec 'invert(70%)'
const openDialogue = () => {
  dialogue.value = true;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
