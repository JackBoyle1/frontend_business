<template>
  <button class="bg-teal-600 hover:bg-teal-700 transition ease-out duration-500 text-white font-semibold py-2 px-4 rounded">
    <div v-if="isLoading" class="flex items-center">
      <!-- Spinner icon or animation here -->
      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a9.963 9.963 0 002 1.299V12H6v5.291zm-2-5.29a9.963 9.963 0 00-2-1.298V12h4v-5.29z"></path>
      </svg>
    </div>
    <span v-else>{{ name }}</span>
  </button>
</template>

<script>
export default {
  props: {
    name: String,
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
