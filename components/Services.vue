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
        <p>Starting at £300</p>
        <br />
        <p>Extras:</p>
        <ul>
          <li>Contact Form: +£100</li>
          <li>Custom Design: +£150 per page</li>
          <li>Additional Revision: +£50</li>
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
        <p>Starting at £1000</p>
        <br />
        <p>Extras:</p>
        <ul>
          <li>Additional Revision: +£50</li>
        </ul>
      </Card>
    </Transition>

    <Transition>
      <Card
        v-if="items[3]"
        name="What Do I need from you?"
        class="mt-4"
      >
        <br />
        To design a website that suits you best, I'll need the following information:
        <ul>
          <li>What name you'd like for your site</li>
          <li>Your preferred package option</li>
          <li>Any additional extras you'd like to add</li>
          <li>All the images you want to include on the site</li>
          <li>Your preferred color scheme</li>
          <li>The pages you'd like to have on your website</li>
          <li>Your desired domain name</li>
        </ul>
      </Card>
    </Transition>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import { globalMixin } from "@/assets/js/globalMixin.js";

export default {
  data() {
    return {
      items: Array(4).fill(false),
    };
  },
  components: {
    Card,
    ImageGallery,
  },
  mixins: [globalMixin],
};
</script>
