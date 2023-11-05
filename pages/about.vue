<template>
  <Transition>
    <h1
      v-if="items[0]"
      class="sm:text-2x1 md:text-3xl lg:text-3x1 font-bold text-center pb-4 text-white"
    >
      About Us
    </h1>
  </Transition>

  <Transition>
    <Card v-if="items[1]" name="" class="mb-3">
      <p class="text-base mb-2">
        Welcome to our web development consultancy! We specialize in creating
        personalized websites for individuals and small businesses.
      </p>
      <p class="text-base mb-2">
        Our mission is to help you establish a strong online presence through
        beautifully designed, responsive, and user-friendly websites.
      </p>
      <p class="text-base mb-2">
        We are dedicated to delivering web solutions tailored to your unique
        needs.
      </p>
      <p class="text-base">
        Let's work together to turn your web ideas into reality.
      </p>
    </Card>
  </Transition>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  data() {
    return {
      items: [false, false],
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.changeItemsOneByOne();
  },
  methods: {
    async changeItemsOneByOne() {
      for (let i = 0; i < this.items.length; i++) {
        await this.delayedShow(i);
      }
    },
    async delayedShow(index) {
      await new Promise((resolve) => setTimeout(resolve, 250));
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
</style>
