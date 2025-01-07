<template>
  <div class="gallery">
    <div class="gallery__title">
      <h2>How our dates look like</h2>
    </div>

    <div class="scroller" data-direction="right">
      <div class="scroller__inner">
        <!-- <img v-for="(img, index) in galleryOne" :key="index" :src="img" /> -->
        <img src="/src/assets/images/01.jpg" />
        <img src="/src/assets/images/02.jpg" />
        <img src="/src/assets/images/03.jpg" />
        <img src="/src/assets/images/04.jpg" />
        <img src="/src/assets/images/05.jpg" />
        <img src="/src/assets/images/06.jpg" />
      </div>
    </div>

    <div class="scroller" data-direction="left">
      <div class="scroller__inner">
        <!-- <img v-for="(img, index) in galleryTwo" :key="index" :src="img" /> -->
        <img src="/src/assets/images/07.jpg" />
        <img src="/src/assets/images/08.jpg" />
        <img src="/src/assets/images/09.jpg" />
        <img src="/src/assets/images/10.jpg" />
        <img src="/src/assets/images/11.jpg" />
        <img src="/src/assets/images/12.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryOne: [
        "/src/assets/images/01.jpg",
        "/src/assets/images/02.jpg",
        "/src/assets/images/03.jpg",
        "/src/assets/images/04.jpg",
        "/src/assets/images/05.jpg",
        "/src/assets/images/06.jpg",
      ],
      galleryTwo: [
        "/src/assets/images/07.jpg",
        "/src/assets/images/08.jpg",
        "/src/assets/images/09.jpg",
        "/src/assets/images/10.jpg",
        "/src/assets/images/11.jpg",
        "/src/assets/images/12.jpg",
      ],
    };
  },

  mounted() {
    this.addAnimation();
  },

  methods: {
    addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");

      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    },
  },
};
</script>

<style scoped scss>
.gallery {
  @apply w-full py-6 md:py-16 border-b border-b-stone-300;
}

.gallery__title {
  @apply mb-8;

  h2 {
    @apply text-red-800 text-3xl md:text-5xl text-center;

    font-family: "Quentin";
  }
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

img {
  height: 350px;
  width: 250px;
  border-radius: 10px;
  object-fit: cover;
  transition: 300ms;
  filter: grayscale(0.2);
  cursor: pointer;
}

.scroller {
  max-width: 1200px;
  @apply mx-auto;
}

.scroller__inner {
  display: flex;
  padding-block: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
  animation-delay: 1s;
}

.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}
.scroller[data-direction="right"] {
  --_animation-direction: reverse;
}

/* .scroller[data-animated="true"]
  .scroller__inner:has(img:hover, img:active, img:focus) {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
} */

/* img:hover, img:focus, img:active {
    transform: scale(1);
    filter: saturate(1.5);
} */
</style>
