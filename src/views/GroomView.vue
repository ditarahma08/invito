<template>
    <div class="groom">
        <div class="groom__profile --caption">
        <div class="groom__parents">
          <span>Putra Dari</span>
          <span>Bapak Bambang Prijadi &</span>
          <span>Ibu Sri Agustin Widiastuti</span>
        </div>

        <div class="groom__name">
          <div>Putra Danan Joyo</div>
        </div>
      </div>
      <div class="groom__profile --photo" v-lazy:background-image="'/src/assets/images/img_groom.jpg'"></div>


    </div>
  </template>
  
  <style scoped>
  .groom {
    @apply h-[75vh] w-full;
    @apply flex;
  }
  
  .groom__profile {
    @apply w-full;
  }
  
  .groom__profile.--photo {
    @apply bg-cover bg-center;
  }
  
  .groom__profile.--caption {
    @apply flex;
  }
  
  .groom__name {
      @apply flex justify-center items-center;
  
  }
  
  .groom__name div {
    @apply -rotate-90 w-max;
  }
  
  .groom__parents {
    @apply flex flex-col justify-center items-center w-full;
  }
  </style>
  