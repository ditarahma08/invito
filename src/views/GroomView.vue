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
    <div class="groom__profile --photo">
      <div class="groom__profile --caption-mobile">
        <div class="groom__name">
          <span>Putra Danan Joyo</span>
        </div>
        <div class="groom__parents">
          <span>Putra Dari</span>
          <span>Bapak Bambang Prijadi &</span>
          <span>Ibu Sri Agustin Widiastuti</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped scss>
.groom {
  @apply h-screen md:h-[65vh] w-full;
  @apply flex;
  @apply border-b border-b-stone-300;
}

.groom__profile {
  @apply w-full;

  &.--photo {
    @apply bg-cover bg-center;
    @apply bg-black-overlay bg-blend-multiply md:bg-transparent;

    background-image: url("/src/assets/images/img_groom.jpg");
  }

  &.--caption {
    @apply hidden md:flex;
    @apply md:flex md:flex-col md:justify-center;
    @apply gap-8;
  }
}

.groom__name {
  @apply flex justify-center;

  span {
    @apply font-extrabold text-2xl md:text-3xl text-red-800;
    @apply text-center;

    font-family: "Quentin";
  }
}

.groom__parents {
  @apply flex flex-col justify-center items-center;
  @apply w-full gap-2 text-lg md:text-xl;
}

.groom__profile.--caption-mobile {
  @apply h-screen flex flex-col justify-end items-end;
  @apply p-8 gap-8 pb-16 md:hidden;

  .groom__parents {
    @apply text-white items-end;
  }
}
</style>
