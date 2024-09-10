<template>
  <div>
    <NavAbout />
    <main class="profile-page">
      <section class="relative block" style="height: 500px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="background-image: url('/src/assets/a.jpg')"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
      </section>
      <section class="relative py-16 bg-slate-950">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      src="~assets/log.png"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style="max-width: 150px"
                    />
                  </div>
                </div>
              </div>
              <br /><br />
              <div class="text-center mt-12" data-aos="fade-up">
                <h3
                  class="text-4xl font-semibold leading-normal text-gray-800 mb-2"
                >
                  hibaigle SAS
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
                >
                  Goma, Nord-Kivu/DRC
                </div>
              </div>
              <div class="mt-5 py-5 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4" data-aos="fade-up">
                    <p
                      class="mb-2 text-sm leading-relaxed text-justify text-gray-700"
                    >
                      <span class="font-bold text-2xl">N</span>otre entreprise
                      technologique est dédiée à la conception de solutions
                      innovantes et sur mesure pour répondre aux besoins des
                      secteurs clés tels que l'éducation, l'environnement,art et
                      culture ainsi que la santé. Nous créons des gadgets et
                      appareils électroniques, des logiciels, des progiciels, et
                      des applications qui révolutionnent la manière dont ces
                      secteurs interagissent avec la technologie. Nous offrons
                      également des services d'études et de consultance
                      spécialisés en électricité, électronique, et
                      électromécanique, garantissant à nos clients un soutien
                      technique et stratégique de premier ordre. Notre expertise
                      en audit et sous-traitance couvre les domaines de l'IT, de
                      la consultance, et de l'assistance technique, nous
                      permettant de fournir des solutions complètes et adaptées
                      aux besoins spécifiques de chaque projet. Le marketing
                      digital est un autre pilier de notre entreprise, où nous
                      proposons des services en graphisme, design, et couverture
                      médiatique pour maximiser l'impact des marques et produits
                      de nos clients. Nous offrons des services d'analyse de
                      données, produisant des évidences qualitatives et
                      quantitatives qui permettent à nos clients de prendre des
                      décisions éclairées basées sur des informations fiables et
                      précises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <FootAbout />
  </div>
</template>
<script setup>
import NavAbout from "src/components/AboutSections/NavAbout.vue";
import FootAbout from "src/components/AboutSections/FootAbout.vue";
</script>
