<template>
  <div class="groom">
    <div class="groom__profile --caption">
      <div class="groom__name">
        <span>Putra Danan Joyo</span>
      </div>
      <div class="groom__parents">
        <span>Putra Dari</span>
        <span>Bapak Bambang Prijadi &</span>
        <span>Ibu Sri Agustin Widiastuti</span>
      </div>
    </div>
    <div
      class="groom__profile --photo"
      v-lazy:background-image="'/src/assets/images/img_groom.jpg'"
    ></div>
  </div>
</template>

<style scoped>
.groom {
  @apply h-[65vh] w-full;
  @apply flex;
  @apply border-b border-b-stone-300;
}

.groom__profile {
  @apply w-full;
}

.groom__profile.--photo {
  @apply bg-cover bg-center;
}

.groom__profile.--caption {
  @apply flex flex-col justify-center;
  @apply gap-8;
}

.groom__name {
  @apply flex justify-center;
}

.groom__name span {
  @apply font-extrabold text-3xl text-red-800;
  @apply text-center;

  font-family: "Quentin";
}

.groom__parents {
  @apply flex flex-col justify-center items-center;
  @apply w-full gap-2
}
</style>
