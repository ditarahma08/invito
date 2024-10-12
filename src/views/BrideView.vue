<template>
  <div class="bride">
    <div class="bride__profile --photo" v-lazy:background-image="'/src/assets/images/img_bride.jpg'"></div>
    <div class="bride__profile --caption">
      <div class="bride__name">
        <div>Dita Rahma Puspitasari</div>
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
  @apply h-[75vh] w-full;
  @apply flex;
}

.bride__profile {
  @apply w-full;
}

.bride__profile.--photo {
  @apply bg-cover bg-center;
}

.bride__profile.--caption {
  @apply flex;
}

.bride__name {
    @apply flex justify-center items-center;

}

.bride__name div {
  @apply -rotate-90 w-max;
}

.bride__parents {
  @apply flex flex-col justify-center items-center w-full;
}
</style>
