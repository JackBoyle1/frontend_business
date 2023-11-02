<template>
  <nav class="navbar bg-teal-600 bg-opacity-10">
    <div class="logo">
      <span class="text-2xl md:text-3xl lg:text-4xl">Boyle Solutions</span>
    </div>
    <div class="md:hidden">
      <button class="text-white p-2 focus:outline-none">
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
      <!-- Mobile menu toggle button (e.g., a hamburger menu) -->
    </div>
    <div class="nav-links hidden md:flex md:space-x-4 lg:space-x-6">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/services">Services</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo span {
  font-size: 1.5rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}
</style>
