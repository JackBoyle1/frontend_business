<template>
  <nav class="navbar">
    <div class="logo">
      <span>Boyle Solutions</span>
    </div>
    <div class="nav-links">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/services">Services</nuxt-link>
      <!-- <nuxt-link to="/portfolio">Portfolio</nuxt-link> -->
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </div>
  </nav>
</template>
  
<style scoped>
.navbar {
  background-color: #007BFF;
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
  margin: 0 10px;
  text-decoration: none;
}
</style>
