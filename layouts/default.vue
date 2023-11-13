<template>
  <div class="flex flex-col bg-gray-100 min-h-screen background-section">
    <Navbar />
    <main class="flex-grow container mx-auto p-4">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import { globalMixin } from "@/assets/js/globalMixin.js";

export default {
  components: {
    Footer,
    Navbar,
  },
  mixins: [globalMixin],
  setup() {
    const route = useRoute();
    useHead({
      titleTemplate: (titleChunk) => {
        switch (route.path) {
          case "/":
            return `${titleChunk} Your Partner in Web Development` || "Your Partner in Web Development";
          case "/services":
            return `${titleChunk} Services` || "Services";
          case "/faq":
            return `${titleChunk} FAQ` || "FAQ";
          case "/portfolio":
            return `${titleChunk} Portfolio` || "Portfolio";
          case "/about":
            return `${titleChunk} About` || "About";
          case "/contact":
            return `${titleChunk} Contact` || "Contact";
          case "/thankyou":
            return `${titleChunk} Contact | Thank You` || "Contact | Thank You";
        }
      },
    });
  },
};
</script>

<style>
@import "@/assets/css/global-styles.css";
.background-section {
  background-image: url("@/assets/images/dark-geometric-background-with-copy-space.jpg");
  background-size: cover;
  background-position: center;
}
</style>
