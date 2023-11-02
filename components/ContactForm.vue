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
      items: [false, false, false, false, false, false, false, false],
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
    items0() {
      this.items[0] = true;
    },
    items1() {
      this.items[1] = true;
    },
    items2() {
      this.items[2] = true;
    },
    items3() {
      this.items[3] = true;
    },
    items4() {
      this.items[4] = true;
    },
    items5() {
      this.items[5] = true;
    },
    items6() {
      this.items[6] = true;
    },
    items7() {
      this.items[7] = true;
    },
    async changeItemsOneByOne() {
      const delay = 50; // 0.5 seconds in milliseconds
      await this.delayedShow(0, delay);
      await this.delayedShow(1, delay);
      await this.delayedShow(2, delay);
      await this.delayedShow(3, delay);
      await this.delayedShow(4, delay);
      await this.delayedShow(5, delay);
      await this.delayedShow(6, delay);
      await this.delayedShow(7, delay);
    },
    async delayedShow(index, delay) {
      await new Promise((resolve) => setTimeout(resolve, delay));
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
</style>