<script setup>
import { RouterLink, RouterView } from "vue-router";
import BrideView from "./views/BrideView.vue";
import GroomView from "./views/GroomView.vue";
import EventView from "./views/EventView.vue";
import CoverView from "./views/CoverView.vue";
import IntroView from "./views/IntroView.vue";
import ProfileView from "./ProfileView.vue";
import CommentView from "./views/CommentView.vue";
import GiftView from "./views/GiftView.vue";
import FooterView from "./views/FooterView.vue";
</script>

<template>
  <div class="invitation">
    <CoverView />
    <IntroView />
    <!-- <ProfileView /> -->
    <!-- <BrideView />
    <GroomView /> -->
    <EventView />
    <CommentView />
    <GiftView />
    <FooterView />
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

@font-face {
  font-family: Montserrat;
  src: url("/src/assets/fonts/montserrat.ttf");
}

.invitation {
  font-family: "Montserrat";
}
</style>
