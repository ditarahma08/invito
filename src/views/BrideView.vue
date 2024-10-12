<template>
  <div class="bride">
    <div
      class="bride__profile --photo"
      v-lazy:background-image="'/src/assets/images/img_bride.jpg'"
    >
      <div class="bride__profile --caption-mobile">
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
  @apply h-screen md:h-[65vh] w-full;
  @apply flex;
  @apply border-t border-t-stone-300;
}

.bride__profile {
  @apply w-full;
}

.bride__profile.--photo {
  @apply bg-cover bg-center;
  @apply bg-black-overlay bg-blend-multiply md:bg-transparent;
}

.bride__profile.--caption {
  @apply hidden md:flex;
  @apply md:flex md:flex-col md:justify-center;
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

.bride__profile.--caption-mobile {
    @apply h-screen flex flex-col justify-end items-end; 
    @apply p-8 gap-8 pb-16 md:hidden;
}

.bride__profile.--caption-mobile .bride__parents {
    @apply text-white;
    @apply items-end;
}
</style>
