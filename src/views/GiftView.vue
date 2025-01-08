<template>
  <div class="gift">
    <h2>We're happy to receive your gift</h2>

    <div class="gift__address">
      <div>
        <span>BCA - 0374202941</span> a/n <span>Dita Rahma Puspitasari</span>
      </div>
      <div>
        <span>BNI - 0338511489</span> a/n <span>Putra Danan Joyo</span>
      </div>
      <div class="gift__notes">
        *If you want to send us gifts, please contact us for the mailing address
      </div>
    </div>
  </div>
</template>

<style scoped scss>
.gift {
  @apply w-full h-[50vh] px-4;
  @apply flex flex-col justify-center items-center;

  h2 {
    @apply text-red-800 text-3xl md:text-5xl text-center;
    @apply font-bold;

    font-family: "Quentin";
  }
}

.gift__address {
  @apply flex flex-col gap-3 text-center m-10;

  span {
    @apply font-bold text-sm;
  }
}

.gift__notes {
  @apply text-xs text-red-800 font-bold mt-6;
}
</style>
