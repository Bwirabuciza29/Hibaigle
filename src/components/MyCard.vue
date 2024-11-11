<template>
  <!-- Cards Section -->
  <div class="flex flex-col md:flex-row md:space-x-6 px-4">
    <!-- Image Card -->
    <div
      class="flex-1 bg-gradient-to-br from-sky-200 to-sky-500 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105"
    >
      <img
        src="/img/a.jpg"
        alt="Description de l'image"
        class="w-full h-48 object-cover rounded-t-lg"
      />
      <div class="p-6">
        <h3 class="text-2xl text-sky-900 font-semibold mb-2">
          Titre de la carte image
        </h3>
        <p class="text-gray-700">
          Ceci est une description sous l'image pour donner plus de contexte sur
          ce qu'elle représente.
        </p>
      </div>
    </div>

    <!-- Text Card -->
    <div
      class="flex-1 bg-white p-6 rounded-lg shadow-lg mt-6 md:mt-0 transform transition-all duration-500 ease-in-out hover:scale-105"
    >
      <h3 class="text-2xl text-sky-900 font-semibold mb-2">
        Titre de la carte texte
      </h3>
      <p class="text-gray-700">
        Ceci est une carte qui contient du texte supplémentaire pour fournir
        plus d'informations à l'utilisateur.
      </p>
    </div>
  </div>
</template>
