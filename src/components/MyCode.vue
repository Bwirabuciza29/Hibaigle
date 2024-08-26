<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-white">
        <q-toolbar-title>
          <q-img class="q-pt-xs" src="~assets/hib.png" style="width: 90px" />
        </q-toolbar-title>
        <div class="gt-sm">
          <q-btn class="q-mr-xs" flat color="primary" label="Course" />
          <q-btn
            class="q-mr-xs"
            outline
            rounded
            color="primary"
            label="Sing up"
          />
          <q-btn outline rounded color="primary" label="Sing in" />
        </div>
        <div class="lt-md">
          <q-btn
            color="primary"
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            icon="menu"
            aria-label="menu"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="q-pa-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum
        doloremque quam excepturi culpa impedit mollitia iste ratione,
        perferendis modi doloribus libero, harum, cumque explicabo rem dolorem
        autem. Voluptate, adipisci.
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>
