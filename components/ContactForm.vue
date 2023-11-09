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
          >Country Code:</label
        >
        <input
          id="countryCode"
          v-model="form.countryCode"
          class="w-full px-3 py-2 border rounded"
          required
        />
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

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        company: "",
        countryCode: "",
        phoneNumber: "",
        message: "",
        test: "",
      },
      items: Array(8).fill(false),
      isLoading: false,
    };
  },
  components: {
    Button,
  },
  mixins: [globalMixin],
  methods: {
    handleSubmit: async function () {
      const formData = new FormData();

      for (let [key, value] of Object.entries(this.form)) {
        formData.append(key, value);
      }

      await axios
        .post("/api/submit", formData)
        .then(({ data }) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
