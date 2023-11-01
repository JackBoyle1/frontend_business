<template>
  <div class="landing">
    <header class="text-white">
      <h1>Welcome to Boyle Solutions</h1>
      <p>Your Partner in Web Development</p>
    </header>

    <section class="features text-white">
      <div class="feature">
        <h2>Custom Web Development</h2>
        <p>We build tailored solutions to meet your unique business needs.</p>
      </div>
      <div class="feature">
        <h2>Expert Consulting</h2>
        <p>We will guide you through the web development process.</p>
      </div>
      <div class="feature">
        <h2>Cutting-Edge Technologies</h2>
        <p>We stay up-to-date with the latest technologies to deliver top-notch solutions.</p>
      </div>
    </section>

    <section class="cta text-white bg-gray-600 bg-opacity-30 rounded-full">
      <h2>Ready to get started?</h2>
      <p>Contact us today for a free consultation.</p>
      <Button class="mt-3" name="Contact Us"></Button>
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  components: {
    Button,
  }
}
</script>

<style scoped>
.landing {
  text-align: center;
  padding: 40px;
}

header {
  margin-top: 20px;
  font-size: 2rem;
}

.features {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}

.feature {
  max-width: 300px;
}

.cta {
  padding: 40px;
  text-align: center;
}

.fade-in {
    opacity: 0;
    transition: opacity 0.5s;
  }

  .fade-in.active {
    opacity: 1;
  }
</style>
