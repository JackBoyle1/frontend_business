<template>
  <Transition>
    <h1
      v-if="items[0]"
      class="sm:text-2x1 md:text-3xl lg:text-3x1 font-bold text-center pb-4 text-white"
    >
      Previous Work
    </h1>
  </Transition>

  <Transition>
    <Card v-if="items[1]" class="mt-4" roundedSuffix="3xl">
      <br />
      <p>
        Welcome to my web portfolio, showcasing my work! Explore a beautifully
        designed landing page, an informative resume page, and a user-friendly
        contact form.<br />
        Each screenshot provides a glimpse of these pages.
      </p>
      <p>
        <br />
        If you are interested in a similar website for your business, it falls
        under the Starter Package priced at just £400.<br />
        This includes a starting fee of £300 and an additional £100 for the
        contact form.
      </p>
      <ImageGallery class="mt-3" />
    </Card>
  </Transition>
</template>

<script>
import ImageGallery from "@/components/ImageGallery.vue";
import { globalMixin } from "@/assets/js/globalMixin.js";

export default {
  data() {
    return {
      items: Array(2).fill(false),
    };
  },
  components: {
    ImageGallery,
  },
  mixins: [globalMixin],
};
</script>
