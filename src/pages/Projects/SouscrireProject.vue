<template>
  <div>
    <NavAbout />
    <main class="profile-page">
      <section class="relative block" style="height: 500px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover flex items-center justify-center"
          style="background-image: url('/img/sub.png')"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
          <div class="relative z-10 text-white text-center p-4">
            <h1
              class="text-2xl sm:text-4xl lg:text-5xl font-bold -mt-16 sm:-mt-24 lg:-mt-32"
            >
              Votre partenaire tech pour des solutions sur mesure
            </h1>
          </div>
        </div>
      </section>

      <section class="relative py-16 bg-slate-950">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <form
              class="bg-white bg-opacity-5 px-8 pt-6 pb-8 mb-4 w-full"
              @submit.prevent="handleSubmit"
            >
              <h2
                class="text-center text-base sm:text-lg md:text-xl mb-4 sm:mb-4"
              >
                Merci de remplir ce formulaire de souscription afin que nous
                puissions étudier votre projet en détail et vous proposer des
                solutions adaptées!
              </h2>

              <div class="grid grid-cols-2 gap-4 mb-4">
                <!-- Champ Nom -->
                <div>
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nom"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    v-model="nom"
                    required
                    placeholder="Entrez votre nom"
                    class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <!-- Champ Nom de l'entreprise -->
                <div>
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nomEntreprise"
                  >
                    Nom de l'entreprise
                  </label>
                  <input
                    type="text"
                    id="nomEntreprise"
                    v-model="nomEntreprise"
                    required
                    placeholder="Entrez le nom de l'entreprise"
                    class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <!-- Champ Forme Judiciaire -->
                <div>
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="formeJudiciaire"
                  >
                    Forme Judiciaire
                  </label>
                  <input
                    type="text"
                    id="formeJudiciaire"
                    v-model="formeJudiciaire"
                    placeholder="Entrez la forme judiciaire"
                    class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <!-- Champ Email -->
                <div>
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="email"
                    required
                    placeholder="Entrez votre email"
                    class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <!-- Champ Services -->
                <div>
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="services"
                  >
                    Services
                  </label>
                  <input
                    type="text"
                    id="services"
                    v-model="services"
                    placeholder="Services requis"
                    class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <!-- Champ Objectif -->
                <div>
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="objectif"
                  >
                    Objectif
                  </label>
                  <input
                    type="text"
                    id="objectif"
                    v-model="objectif"
                    placeholder="Objectif du projet"
                    class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <!-- Champ Délai -->
                <div>
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="delai"
                  >
                    Délai
                  </label>
                  <input
                    type="text"
                    id="delai"
                    v-model="delai"
                    placeholder="Délai prévu"
                    class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <!-- Champ Budget -->
                <div>
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="budget"
                  >
                    Budget
                  </label>
                  <input
                    type="text"
                    id="budget"
                    v-model="budget"
                    placeholder="Budget disponible"
                    class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <!-- Champ Adresse -->
                <div>
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="adresse"
                  >
                    Adresse
                  </label>
                  <input
                    type="text"
                    id="adresse"
                    v-model="adresse"
                    placeholder="Entrez votre adresse"
                    class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                  />
                </div>

                <!-- Champ Téléphone -->
                <div>
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="telephone"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    v-model="telephone"
                    placeholder="Entrez votre téléphone"
                    class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                  />
                </div>
              </div>
              <!-- Champ Cahier des Charges -->
              <div>
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="cahierCharge"
                >
                  Cahier des Charges
                </label>
                <textarea
                  id="cahierCharge"
                  v-model="cahierCharge"
                  placeholder="Description du cahier des charges"
                  class="border w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-slate-600"
                ></textarea>
              </div>
              <div class="mt-4">
                <button
                  type="button"
                  @click="soumettreFormulaire"
                  class="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4"
                >
                  Souscrire
                </button>
              </div>
            </form>
          </div>
        </div>
        <FooterSection />
      </section>
    </main>
  </div>
</template>
<script setup>
import NavAbout from "src/components/AboutSections/NavAbout.vue";
import FooterSection from "src/components/FooterSection.vue";
</script>
