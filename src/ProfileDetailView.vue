<template>
  <div class="profile">
    <div class="profile__image">
      <div class="profile__name">
        <div class="profile__name --groom">
          <span>Putra Danan Joyo</span>
        </div>

        <div class="profile__name --parent">
          <span>Putra </span>
          <span>Bp. Bambang Prijadi & <br /></span>
          <span>Ibu Sri Agustin Widiastuti</span>
        </div>
      </div>

      <div class="profile__name">
        <div class="profile__name --bride">
          <span>Dita Rahma Puspitasari</span>
        </div>

        <div class="profile__name --parent">
          <span>Putri </span>
          <span>Bp. Rochmadi & <br /></span>
          <span>Ibu Sujilah</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scss scoped>
.profile {
  @apply h-screen p-6 md:p-16 flex justify-center;
}

.profile__image {
  @apply h-full w-full md:max-w-[75vw];
  @apply rounded-lg px-2 py-10 md:px-3;
  @apply flex justify-between;
  @apply bg-cover bg-center bg-no-repeat;

  background-image: url("/src/assets/images/img_profile_cropped.jpg");
}

.profile__name {
  @apply text-center text-white;
  @apply max-w-52 md:max-w-64;

  &.--bride,
  &.--groom {
    @apply text-2xl md:text-3xl;

    font-family: "Quentin";
  }

  &.--parent {
    @apply text-[10px] md:text-sm mt-5;
  }
}
</style>
