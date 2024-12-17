<template>
  <div class="gift">
    <h2>We're happy to receive your gift here:</h2>

    <div class="gift__address">
      <span>BCA 0374202941 a/n Dita Rahma Puspitasari</span>
      <span>
        Komplek Garuda, Jl. Suling Blok J/5, Cipondoh, Tangerang, Banten, 15148
      </span>
    </div>
  </div>
</template>

<style scoped scss>
.gift {
  @apply flex w-full h-[50vh] flex-col justify-center items-center;

  &__address {
    @apply flex flex-col;
  }
}
</style>
