<template>
  <div class="gift">
    <h2>We're happy to receive your gift</h2>

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
  @apply w-full h-[50vh] px-4;
  @apply flex flex-col justify-center items-center;

  h2 {
    @apply text-red-800 text-3xl md:text-5xl text-center;

    font-family: "Quentin";
  }
}

.gift__address {
  @apply flex flex-col gap-3 text-center m-10;
}
</style>
