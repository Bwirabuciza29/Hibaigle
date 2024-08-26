<template>
  <q-page>
    <q-toolbar
      class="bg-transparent fixed-top"
      :class="{ 'bg-white': scrolled }"
    >
      <q-avatar rounded>
        <img src="your-logo.png" />
      </q-avatar>
      <q-space />
      <q-btn color="primary" label="Button" />
    </q-toolbar>

    <div class="q-pa-md">
      <img
        src="your-background-image.jpg"
        class="absolute inset-0 object-cover"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      this.scrolled = window.scrollY > 0;
    });
  },
};
</script>
