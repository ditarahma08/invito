<template>
  <div class="cover-invitation">
    <h1>29 . 01 . 2025</h1>
    <img v-lazy="'/src/assets/images/img_hero_featured.jpg'" />

    <div class="cover-invitation__recipient">
      <span>Dear Guest</span>
      <button type="button">Open Invitation</button>
    </div>
  </div>
</template>

<style scoped>
.cover-invitation {
  @apply relative;
  @apply h-full flex flex-col items-center justify-items-center;
}

.cover-invitation h1 {
  @apply text-6xl absolute top-[45%];
  @apply md:text-7xl;
  @apply text-red-800 font-extrabold;

  font-family: "Quentin";
}

.cover-invitation img {
  @apply overflow-hidden object-cover;
  @apply h-[420px] w-[295px];
  @apply mt-auto mb-auto;
}

.cover-invitation__recipient {
  @apply absolute flex flex-col items-center gap-2;
  @apply text-lg;

  bottom: calc(50% - 325px);
}

.cover-invitation__recipient button {
  @apply py-2 px-4 rounded-lg;
  @apply hover:shadow-md;

  color: var(--color-background-soft);
  background-color: var(--color-text);
}
</style>
