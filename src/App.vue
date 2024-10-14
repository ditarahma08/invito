<script setup>
import { RouterLink, RouterView } from "vue-router";
import QuoteView from "./views/QuoteView.vue";
import BrideView from "./views/BrideView.vue";
import GroomView from "./views/GroomView.vue";
import EventView from "./views/EventView.vue";
import MapView from "./views/MapView.vue";
import CoverView from "./views/CoverView.vue";
import IntroView from "./views/IntroView.vue";
</script>

<template>
  <div class="invitation">
    <CoverView />
    <!-- <QuoteView /> -->
     <IntroView/>
    <BrideView />
    <GroomView />
    <EventView />
    <MapView />
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

.invitation {
  font-family: "Maregy";
}
</style>
