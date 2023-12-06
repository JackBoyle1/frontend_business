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
    <Card v-if="items[1]" name="" class="mb-3" roundedSuffix="3xl">
      <p class="text-base mb-2">
        Welcome to our web development consultancy! We're based in Berkshire, England and specialize in creating
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
import { globalMixin } from "@/assets/js/globalMixin.js";

export default {
  data() {
    return {
      items: [false, false],
    };
  },
  mixins: [globalMixin],
  mounted() {
    this.changeItemsOneByOne();
  },
};
</script>
