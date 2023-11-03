<template>
  <div class="relative max-w-screen-xl mx-auto">
    <button
      v-if="currentIndex != 0"
      @click="showPreviousImage"
      class="absolute top-1/2 transform -translate-y-1/2 left-0 p-2 md:rounded-full sm:rounded-3xl bg-opacity-0 text-black transition ease-in-out hover:scale-150 bg-opacity-100"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    <img :src="currentImage" alt="Image" class="rounded-3xl w-full" />
    <button
      v-if="currentIndex != images.length - 1"
      @click="showNextImage"
      class="absolute top-1/2 transform -translate-y-1/2 right-0 p-2 rounded-full bg-opacity-0 text-black transition ease-in-out hover:scale-150"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/images/landing.png',
        '/images/about.png',
        '/images/resume.png',
        '/images/contact.png',
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    showPreviousImage() {
      this.currentIndex = (this.currentIndex - 1) % this.images.length;
    },
    showNextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>
