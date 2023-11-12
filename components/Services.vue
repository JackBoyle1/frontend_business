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
      <Card v-if="items[3]" name="What Do I Need from You?" class="mt-4">
        <br />
        <p>
          To design a website that suits you best, I'll need the following
          information:
        </p>
        <ul>
          <li>
            <strong>1. Site Name:</strong> What name you'd like for your site
          </li>
          <li>
            <strong>2. Package Option:</strong> Your preferred package option
          </li>
          <li><strong>3. Pages:</strong> What pages you want</li>
          <li><strong>4. Content:</strong> What you'd like on each page</li>
          <li>
            <strong>5. Extras:</strong> Any additional extras you'd like to add
          </li>
          <li>
            <strong>6. Images:</strong> All the images you want to include on
            the site
          </li>
          <li><strong>7. Color Scheme:</strong> Your preferred color scheme</li>
          <li>
            <strong>8. Desired Pages:</strong> The pages you'd like to have on
            your website
          </li>
          <li><strong>9. Domain Name:</strong> Your desired domain name</li>
          <li>
            <strong>10. Contact Form:</strong> If you've opted for a contact
            form, provide details about receiving and sending email addresses
          </li>
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
      items: Array(4).fill(false),
    };
  },
  components: {
    ImageGallery,
  },
  mixins: [globalMixin],
};
</script>
