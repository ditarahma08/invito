<template>
  <div class="profile">
    <img
      class="profile__nav --prev"
      src="/src/assets/icons/ic_arrow.svg"
      @click="switchProfile()"
    />

    <div v-if="show == 'bride'" class="profile__person">
      <div class="profile__picture --bride"></div>
      <div class="profile__caption">
        <span>Dita Rahma Puspitasari</span>

        <p>The daughter of</p>
        <p>Bapak Rochmadi &</p>
        <p>Ibu Sujilah</p>
      </div>
    </div>

    <div v-if="show == 'groom'" class="profile__person">
      <div class="profile__picture --groom"></div>
      <div class="profile__caption">
        <span>Putra Danan Joyo</span>

        <p>The son of</p>
        <p>Bapak Bambang Prijadi (Alm.) &</p>
        <p>Ibu Sri Agustin Widiastuti</p>
      </div>
    </div>

    <img
      class="profile__nav --next"
      src="/src/assets/icons/ic_arrow.svg"
      @click="switchProfile()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: "bride",
    };
  },

  methods: {
    switchProfile() {
      if (this.show === "bride") {
        this.show = "groom";
      } else {
        this.show = "bride";
      }
    },
  },
};
</script>

<style scoped scss>
.profile {
  @apply h-screen flex justify-center items-center;
  @apply text-lg p-8;
  @apply border-b border-b-stone-300;
}

.profile__picture {
  @apply h-[400px] w-[300px] md:h-[600px] md:w-[400px];
  @apply rounded-3xl shadow-xl;
  @apply bg-cover mx-4;

  background-position-y: 50%;

  &.--bride {
    background-image: url("/src/assets/images/img_bride.jpg");
  }

  &.--groom {
    background-image: url("/src/assets/images/img_groom.jpg");
  }
}

.profile__caption {
  @apply flex flex-col items-center mt-12;
  @apply text-center relative w-full;

  span {
    @apply text-red-800 font-extrabold text-3xl md:text-4xl;
    @apply absolute -top-16;

    font-family: "Quentin";
  }
}

.profile__nav {
  @apply h-8 cursor-pointer;

  &.--prev {
    @apply -rotate-180;
  }
}
</style>
