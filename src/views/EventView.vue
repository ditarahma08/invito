<template>
  <div class="event">
    <!-- <div class="event__detail">
      <h2>Akad Nikah</h2>

      <div class="event__time">
        <span>Rabu, 29 Januari 2025</span>
        <span>08.00 - 10.00 WIB</span>
        <span>Waroeng Omah Sawah</span>
        <span>Miri, Timbulharjo, Sewon, Bantul, DI Yogyakarta</span>
      </div>
    </div> -->

    <div class="event__detail">
      <h2>Resepsi</h2>

      <div class="event__time">
        <span>Rabu, 29 Januari 2025</span>
        <span>11.30 - 13.30 WIB</span>
        <span>Waroeng Omah Sawah</span>
        <span>Miri, Timbulharjo, Sewon, Bantul, DI Yogyakarta</span>
      </div>
    </div>

    <div class="event__map">
      <iframe
        height="100%"
        width="100%"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAi2KodOLx-Hi9qqXOeHPvSskIvKXKI9IU
    &q=Waroeng+Omah+Sawah"
      >
      </iframe>
    </div>
  </div>
</template>

<style scoped scss>
.event {
  @apply flex w-full h-[50vh] items-center;
  @apply flex-col md:flex-row;
  @apply border-b border-b-stone-300;
}

.event__detail {
  @apply w-full flex flex-col p-16 md:p-8;
  @apply items-center gap-10;

  h2 {
    @apply font-extrabold text-5xl text-red-800;

    font-family: "Quentin";
  }
}

.event__time {
  @apply flex flex-col gap-2;
  @apply text-center text-lg md:text-xl;
}

.event__map {
  @apply w-full h-full;
}
</style>
