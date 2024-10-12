<script setup>
import { RouterLink, RouterView } from "vue-router";
import IntroView from "./views/IntroView.vue";
import QuoteView from "./views/QuoteView.vue";
import BrideView from "./views/BrideView.vue";
import GroomView from "./views/GroomView.vue";
</script>

<template>
  <div class="page">
    <IntroView />
    <QuoteView />
    <BrideView />
    <GroomView />
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>
@font-face {
  font-family: Quentin;
  src: url("/src/assets/fonts/quentin.otf");
}

@font-face {
  font-family: Maregy;
  src: url("/src/assets/fonts/maregy.otf");
}
</style>
