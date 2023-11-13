<template>
  <form
    @submit.prevent="handleSubmit"
    @reset="resetForm"
    class="p-4 max-w-md mx-auto"
  >
    <Transition>
      <h1
        v-if="items[0]"
        class="sm:text-2x1 md:text-3xl lg:text-3x1 font-bold text-center pb-4 text-white"
      >
        Contact Us
      </h1>
    </Transition>

    <Transition>
      <div v-if="items[1]" class="mb-4">
        <label for="name" class="block font-semibold text-white">Name:</label>
        <input
          id="name"
          v-model="form.name"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
    </Transition>

    <Transition>
      <div v-if="items[2]" class="mb-4">
        <label for="email" class="block font-semibold text-white">Email:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
    </Transition>

    <Transition>
      <div v-if="items[3]" class="mb-4">
        <label for="company" class="block font-semibold text-white"
          >Company (Optional):</label
        >
        <input
          id="company"
          v-model="form.company"
          class="w-full px-3 py-2 border rounded"
        />
      </div>
    </Transition>

    <Transition>
      <div v-if="items[4]" class="mb-4">
        <label for="countryCode" class="block font-semibold text-white"
          >Country:</label
        >
        <select
          id="countryCode"
          v-model="form.countryCode"
          :options="options"
          class="w-full px-3 py-2 border rounded"
          required
        >
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </Transition>

    <Transition>
      <div v-if="items[5]" class="mb-4">
        <label for="phoneNumber" class="block font-semibold text-white"
          >Phone Number:</label
        >
        <input
          id="phoneNumber"
          v-model="form.phoneNumber"
          class="w-full px-3 py-2 border rounded"
          required
        />
      </div>
    </Transition>

    <Transition>
      <div v-if="items[6]" class="mb-4">
        <label for="message" class="block font-semibold text-white"
          >Message:</label
        >
        <textarea
          id="message"
          v-model="form.message"
          class="w-full px-3 py-2 border rounded"
          required
        ></textarea>
      </div>
    </Transition>

    <Transition>
      <div v-if="items[7]" class="text-center">
        <Button name="Submit" :isLoading="isLoading"></Button>
      </div>
    </Transition>
  </form>
</template>

<script>
import axios from "axios";
import Button from "@/components/Button.vue";
import { globalMixin } from "@/assets/js/globalMixin.js";
import countryCodes from "@/assets/json/countryCodes.json";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        company: "",
        countryCode: "+44",
        phoneNumber: "",
        message: "",
      },
      options: countryCodes,
      items: Array(8).fill(false),
      isLoading: false,
    };
  },
  components: {
    Button,
  },
  mixins: [globalMixin],
  mounted() {
    this.changeItemsOneByOne(100);
  },
  methods: {
    handleSubmit: async function () {
      try {
        await axios.post("/.netlify/functions/ses-send-email", {
          name: this.form.name,
          email: this.form.email,
          company: this.form.company,
          countryCode: this.form.countryCode,
          phoneNumber: this.form.phoneNumber,
          message: this.form.message,
        });
        this.$router.push("/thankyou");
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
  },
};
</script>
