<template>
    <div>
      <img :src="currentImage" alt="Image" />
      <button @click="showNextImage">Next</button>
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
      showNextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
    },
  };
  </script>