<template>
  <form @submit="submitForm" @reset="resetForm" class="p-4 max-w-md mx-auto">
    <Transition>
    <h1 v-if="items[0]" class="sm:text-2x1 md:text-3xl lg:text-3x1 font-bold text-center pb-4 text-white">Contact Us</h1>
  </Transition>

    <Transition>
    <div v-if="items[1]" class="mb-4">
      <label for="name" class="block font-semibold text-white">Name:</label>
      <input
        id="name"
        v-model="formData.name"
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
        v-model="formData.email"
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
        v-model="formData.company"
        class="w-full px-3 py-2 border rounded"
      />
    </div>
  </Transition>

  <Transition>
    <div v-if="items[4]" class="mb-4">
      <label for="countryCode" class="block font-semibold text-white">Country Code:</label>
      <input
        id="countryCode"
        v-model="formData.countryCode"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>
  </Transition>

  <Transition>
    <div v-if="items[5]" class="mb-4">
      <label for="phoneNumber" class="block font-semibold text-white">Phone Number:</label>
      <input
        id="phoneNumber"
        v-model="formData.phoneNumber"
        class="w-full px-3 py-2 border rounded"
        required
      />
    </div>
  </Transition>

  <Transition>
    <div v-if="items[6]"  class="mb-4">
      <label for="message" class="block font-semibold text-white">Message:</label>
      <textarea
        id="message"
        v-model="formData.message"
        class="w-full px-3 py-2 border rounded"
        required
      ></textarea>
    </div>
  </Transition>

  <Transition>
    <div v-if="items[7]" class="text-center"><Button name="Submit" :isLoading="isLoading"></Button></div>
  </Transition>
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
      items: Array(8).fill(false),
      isLoading: false,
    };
  },
  components: {
    Button,
  },
  mounted() {
    this.changeItemsOneByOne();
  },
  methods: {
    async submitForm() {
      this.isLoading = true;
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
      this.isLoading = false;
    },
    async changeItemsOneByOne() {
      for (let i = 0; i < this.items.length; i++) {
        await this.delayedShow(i);
      }
    },
    async delayedShow(index) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      this.items[index] = true;
    },
  },
};
</script>
