<template>
  <div class="landing">
    <Transition>
      <img
        v-if="items[0]"
        src="@/assets/images/logo-cropped.png"
        class="mx-auto"
      />
    </Transition>

    <Transition>
      <section v-if="items[1]" class="features text-white">
        <div class="feature">
          <h2>Custom Web Development</h2>
          <p>
            We build tailored solutions to meet your unique personal or business
            needs.
          </p>
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
      <Card v-if="items[2]" class="cta mb-5">
        <h2>Curious about the process?</h2>
        <p>Find out on our services page.</p>
        <Button
          @click="$router.push('/services')"
          class="mt-3"
          name="Services"
        ></Button>
      </Card>
    </Transition>

    <Transition>
      <Card v-if="items[3]" class="cta">
        <h2>Ready to get started?</h2>
        <p>Contact us today for a free consultation.</p>
        <Button
          @click="$router.push('/contact')"
          class="mt-3"
          name="Contact Us"
        ></Button>
      </Card>
    </Transition>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ImageGallery from "~/components/ImageGallery.vue";
import { globalMixin } from "@/assets/js/globalMixin.js";

export default {
  data() {
    return {
      items: [false, false, false, false],
    };
  },
  components: {
    Button,
    ImageGallery,
  },
  mixins: [globalMixin],
  mounted() {
    this.changeItemsOneByOne();
  },
};
</script>

<style scoped>
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
</style>

<style scoped>
@media only screen and (max-width: 600px) {
  .features {
    flex-direction: column;
    align-items: center;
  }

  .feature {
    max-width: 100%;
    margin-bottom: 0.75rem;
  }

  .cta {
    padding: 20px;
  }
}
</style>
