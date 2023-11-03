<template>
  <div class="landing">
    <Transition>
      <header v-if="items[0]" class="text-white">
        <h1>Welcome to Boyle Solutions</h1>
        <p>Your Partner in Web Development</p>
      </header>
    </Transition>

    <Transition>
      <section v-if="items[1]" class="features text-white">
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
          <p>
            We stay up-to-date with the latest technologies to deliver top-notch
            solutions.
          </p>
        </div>
      </section>
    </Transition>

    <Transition>
      <section v-if="items[2]" class="cta text-white bg-gray-600 bg-opacity-30 rounded-full mb-5">
        <h2>Curious about the process?</h2>
        <p>Find out on our services page.</p>
        <Button @click="$router.push('/services')" class="mt-3" name="Services"></Button>
      </section>
    </Transition>

    <Transition>
      <section v-if="items[2]" class="cta text-white bg-gray-600 bg-opacity-30 rounded-full">
        <h2>Ready to get started?</h2>
        <p>Contact us today for a free consultation.</p>
        <Button @click="$router.push('/contact')" class="mt-3" name="Contact Us"></Button>
      </section>
    </Transition>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ImageGallery from '~/components/ImageGallery.vue'

export default {
  data() {
    return {
      items: [false, false, false],
    };
  },
  components: {
    Button,
    ImageGallery,
  },
  mounted() {
    this.changeItemsOneByOne();
  },
  methods: {
    items0() {
      this.items[0] = true;
    },
    items1() {
      this.items[1] = true;
    },
    items2() {
      this.items[2] = true;
    },
    async changeItemsOneByOne() {
      const delay = 250;
      await this.delayedShow(0, delay);
      await this.delayedShow(1, delay);
      await this.delayedShow(2, delay);
    },
    async delayedShow(index, delay) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      this.items[index] = true;
    },
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
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
