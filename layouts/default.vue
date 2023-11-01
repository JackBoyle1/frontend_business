<template>
  <div class="flex flex-col bg-gray-100 min-h-screen background-section">
    <!-- <header class="bg-blue-500 p-4 text-white">
      <div class="container mx-auto">Boyle Solutions</div>
    </header> -->
    <Navbar/>
    <main class="flex-grow container mx-auto p-4">
      <NuxtPage />
    </main>
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto">© 2023 Boyle Solutions</div>
    </footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Footer,
    Navbar,
  }
}
</script>

<style>
@import '@/assets/css/global-styles.css';
  .background-section {
    background-image: url('@/assets/images/dark-geometric-background-with-copy-space.jpg');
    background-size: cover;
    background-position: center;
  }
</style>