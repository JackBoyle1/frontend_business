<template>
  <div class="landing">
    <header>
      <h1>Welcome to Boyle Solutions</h1>
      <p>Your Partner in Web Development</p>
    </header>

    <section class="features">
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

    <section class="cta">
      <h2>Ready to get started?</h2>
      <p>Contact us today for a free consultation.</p>
      <a href="/contact" class="cta-button">Contact Us</a>
    </section>
  </div>
</template>
  
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
  background-color: #007BFF;
  color: #fff;
  padding: 40px;
  text-align: center;
}

.cta-button {
  background-color: #0056b3;
  color: #fff;
  padding: 10px 20px;
  border: none
}
</style>
