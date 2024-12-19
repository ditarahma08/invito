<template>
  <div class="cover-invitation">
    <h1>29 . 01 . 2025</h1>
    <img src="/src/assets/images/carousel.gif" loading="lazy" />
    <div class="cover-invitation__recipient">
      <span>Dear {{ recipient || "Guest" }}</span>
      <!-- <button type="button">Open Invitation</button> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    recipient() {
      return this.$route.query.to;
    },
  },
};
</script>

<style scoped>
@keyframes keyframes {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.cover-invitation {
  @apply relative;
  @apply h-full flex flex-col items-center justify-items-center;
}

.cover-invitation h1 {
  @apply text-center absolute top-[45%];
  @apply text-[54px] md:text-8xl;
  @apply text-red-800 font-extrabold;
  @apply overflow-hidden whitespace-nowrap w-full;

  font-family: "Quentin";
  animation: keyframes 3s steps(500);
}

.cover-invitation img {
  @apply overflow-hidden object-cover;
  @apply h-[420px] w-[295px] md:h-[525px] md:w-[350px];
  @apply mt-auto mb-auto;
  @apply rounded-lg;
}

.cover-invitation__recipient {
  @apply absolute flex flex-col items-center gap-2;
  @apply text-xl;

  bottom: calc(50% - 325px);

  @media (max-width: 375px) {
    bottom: 10%;
  }
}

/* .cover-invitation__recipient button {
  @apply py-2 px-4 rounded-lg;
  @apply hover:shadow-md;

  color: var(--color-background-soft);
  background-color: var(--color-text);
} */
</style>
