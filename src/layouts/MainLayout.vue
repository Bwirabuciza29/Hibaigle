<template>
  <div>
    <q-layout view="lHh Lpr lFf">
      <q-page-container>
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <!-- Remove v-if or v-show and rely on Quasar's transition system -->
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 300,
    offset: 100,
    easing: "ease-in-out",
  });
});
</script>
<style>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
