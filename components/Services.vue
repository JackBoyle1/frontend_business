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
        </ul>
        <p>Starting at £300</p>
        <br />
        <p>Extras:</p>
        <ul>
          <li>Contact Form: +£100</li>
          <li>Custom Design: +£150 per page</li>
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
        </ul>
        <p>Starting at £1000</p>
      </Card>
    </Transition>

    <Transition>
      <Card
        v-if="items[3]"
        name="Previous work"
        class="mt-4"
        roundedSuffix="3xl"
      >
        <br />
        <p>
          Welcome to my web portfolio, showcasing my work! Explore a beautifully
          designed landing page, an informative resume page, and a user-friendly
          contact form.<br /> Each screenshot provides a glimpse of these pages.
        </p>
        <p><br />
          If you're interested in a similar website for your business, it falls under the Starter Package
          priced at just £400.<br/> This includes a starting fee of £300 and an
          additional £100 for the contact form.
        </p>
        <ImageGallery class="mt-3" />
      </Card>
    </Transition>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import ImageGallery from "@/components/ImageGallery.vue";

export default {
  data() {
    return {
      items: [false, false, false, false],
    };
  },
  components: {
    Card,
    ImageGallery,
  },
  mounted() {
    this.show = true;
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
.landing {
  text-align: center;
  padding: 40px;
}
</style>
