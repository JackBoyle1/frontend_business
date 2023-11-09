<template>
  <nav class="navbar bg-teal-600 bg-opacity-10">
    <nuxt-link to="/"><img src="logo-leaf.png" style="max-height: 32px;"/></nuxt-link>
    <div class="md:hidden">
      <button
        @click="toggleIsMobileMenuOpen"
        class="text-white p-2 focus:outline-none"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div class="nav-links hidden md:flex md:space-x-4 lg:space-x-6">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/services">Services</nuxt-link>
      <nuxt-link to="/faq">FAQ</nuxt-link>
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </div>
    <div v-if="isMobileMenuOpen" class="mobile-menu">
      <Modal :isMobileMenuOpen="isMobileMenuOpen" @close="closeMobileMenu"/>
    </div>
  </nav>
</template>

<script>
import Modal from '@/components/modals/Navbar.vue';
import { useStore } from "@/store/store";

export default {
  components: {
    Modal,
  },
  computed: {
    isMobileMenuOpen() {
      return useStore().isMobileMenuOpen;
    },
  },
  methods: {
    toggleIsMobileMenuOpen() {
      useStore().toggleIsMobileMenuOpen();
    },
    closeMobileMenu() {
      useStore().closeMobileMenu();
    }
  }, 
};
</script>

<style scoped>
.navbar {
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: gray;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
