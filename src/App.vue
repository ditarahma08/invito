<script setup>
import { RouterLink, RouterView } from "vue-router";
import IntroView from "./views/IntroView.vue";
import QuoteView from "./views/QuoteView.vue";
import BrideView from "./views/BrideView.vue";
</script>

<template>
  <IntroView />
  <QuoteView />
  <BrideView />

  <!-- <RouterView /> -->
</template>

<style scoped>
@font-face {
  font-family: Lora;
  src: url("~@/assets/fonts/lora-medium.ttf");
}
</style>
