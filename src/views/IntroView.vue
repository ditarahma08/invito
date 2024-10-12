<script setup>
import Cover from "@/components/intro/Cover.vue";
</script>

<template>
  <div class="first">
    <div class="hero">
      <div class="header">
      <h1 class="header__title">Dita & Danan</h1>
    </div>

      <div class="hero__section">
        <Cover />
      </div>

      <div class="hero__section --right" v-lazy:background-image="'/src/assets/images/img_hero_cover.jpg'">
      </div>
    </div>
  </div>
</template>

<style scoped>
.first {
  @apply h-screen flex flex-col;
  @apply border-b border-b-stone-300;
}

.header {
  @apply absolute w-full;
  @apply flex justify-center items-center;
  @apply p-6;
}

.header__title {
  @apply text-3xl font-bold;

  font-family: "Lora";
}

.hero {
  @apply flex w-full h-full;
}

.hero__section {
  @apply w-full;
}

.hero__section.--right {
  @apply bg-cover bg-bottom hidden;
  @apply lg:block;

  /* background-image: url(@/assets/images/img_hero_cover.jpg); */
}
</style>
