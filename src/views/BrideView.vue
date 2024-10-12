<template>
  <div class="bride">
    <div class="bride__profile --photo" v-lazy:background-image="'/src/assets/images/img_bride.jpg'"></div>
    <div class="bride__profile --caption">
      <div class="bride__name">
        <span>Dita Rahma Puspitasari</span>
      </div>
      <div class="bride__parents">
        <span>Putri Dari</span>
        <span>Bapak Rochmadi &</span>
        <span>Ibu Sujilah</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bride {
  @apply h-[65vh] w-full;
  @apply flex;
  @apply border-t border-t-stone-300;
}

.bride__profile {
  @apply w-full;
}

.bride__profile.--photo {
  @apply bg-cover bg-center;
}

.bride__profile.--caption {
  @apply flex flex-col justify-center;
  @apply gap-8;
}

.bride__name {
    @apply flex justify-center;
}

.bride__name span {
  @apply font-extrabold text-3xl text-red-800;
  @apply text-center;

  font-family: "Quentin";
}

.bride__parents {
  @apply flex flex-col justify-center items-center;
  @apply w-full gap-2;
}
</style>
