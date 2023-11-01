<template>
  <form @submit="submitForm" @reset="resetForm" class="p-4 max-w-md mx-auto">
    <div class="mb-4">
      <label for="name" class="block font-semibold text-white">Name:</label>
      <input
        id="name"
        v-model="formData.name"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>

    <div class="mb-4">
      <label for="email" class="block font-semibold text-white">Email:</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>

    <div class="mb-4">
      <label for="company" class="block font-semibold text-white"
        >Company (Optional):</label
      >
      <input
        id="company"
        v-model="formData.company"
        class="w-full px-3 py-2 border rounded"
      />
    </div>

    <div class="mb-4">
      <label for="countryCode" class="block font-semibold text-white">Country Code:</label>
      <input
        id="countryCode"
        v-model="formData.countryCode"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>

    <div class="mb-4">
      <label for="phoneNumber" class="block font-semibold text-white">Phone Number:</label>
      <input
        id="phoneNumber"
        v-model="formData.phoneNumber"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>

    <div class="mb-4">
      <label for="message" class="block font-semibold text-white">Message:</label>
      <textarea
        id="message"
        v-model="formData.message"
        class="w-full px-3 py-2 border rounded"
        required
      ></textarea>
    </div>

    <div class="text-center"><Button name="Submit"></Button></div>
    <!-- <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
    >
      Submit
    </button> -->
  </form>
</template>

<script>
import axios from "axios";
import Button from '@/components/Button.vue';

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        company: "",
        countryCode: "",
        phoneNumber: "",
        message: "",
      },
    };
  },
  components: {
    Button,
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/submit",
          this.formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    },
  },
};
</script>
