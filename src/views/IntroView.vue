<template>
  <div class="intro">
    <div class="intro__title">
      <p>You're invited to our wedding!</p>
    </div>
    <div class="intro__name">
      <p>Dita</p>
      <p>Danan</p>
    </div>
    <div class="intro__date">
      <p>Saturday, 29.01.2025</p>
    </div>
  </div>
</template>

<style scoped scss>
@keyframes background-scroll {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -100vw 0;
  }
}

.intro {
  @apply h-screen w-full bg-repeat-x bg-cover;
  @apply bg-black-overlay bg-blend-multiply;
  @apply flex flex-col items-center justify-center;;

  background-image: url("/src/assets/images/img_gallery.png");
  animation: background-scroll 5s linear infinite;
}

.intro__title {
    @apply text-white text-4xl md:text-5xl text-center mb-36;
    @apply mb-28 md:mb-36;

    font-family: "Quentin";
}

.intro__name {
    @apply text-red-800 font-extrabold mb-16;
    @apply text-8xl md:text-9xl text-center;

    font-family: "Quentin";
}

.intro__date {
    @apply text-white text-4xl font-extrabold;
}
</style>
