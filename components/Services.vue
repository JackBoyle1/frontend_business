<template>
  <div>
    <Transition>
      <h1
        v-if="items[0]"
        class="sm:text-2x1 md:text-3xl lg:text-3x1 font-bold text-center pb-4 text-white"
      >
        Our Services
      </h1>
    </Transition>

    <Transition>
      <Card v-if="items[1]" name="Starter Package" class="mb-3">
        <p>Perfect for personal websites and very small businesses.</p>
        <br />
        <p>Includes:</p>
        <ul>
          <li>Responsive Design</li>
          <li>Up to 5 Pages</li>
          <li>Contact Form</li>
          <li>1 Free Revision</li>
        </ul>
        <p>Starting at £500</p>
        <br />
        <p>Extras:</p>
        <ul>
          <li>Contact Form: +£200</li>
          <li>Custom Design: +£150 per page</li>
          <li>Additional Revision: +£100</li>
        </ul>
      </Card>
    </Transition>

    <Transition>
      <Card v-if="items[2]" name="Business Package">
        <p>Ideal for small-medium sized businesses.</p>
        <br />
        <p>Includes:</p>
        <ul>
          <li>Custom Design</li>
          <li>Up to 30 Pages</li>
          <li>Contact Form</li>
          <li>3 Free Revisions</li>
        </ul>
        <p>Starting at £1200</p>
        <br />
        <p>Extras:</p>
        <ul>
          <li>Additional Revision: +£100</li>
        </ul>
      </Card>
    </Transition>
  </div>
</template>

<script>
import ImageGallery from "@/components/ImageGallery.vue";
import { globalMixin } from "@/assets/js/globalMixin.js";

export default {
  data() {
    return {
      items: Array(3).fill(false),
    };
  },
  components: {
    ImageGallery,
  },
  mixins: [globalMixin],
};
</script>
