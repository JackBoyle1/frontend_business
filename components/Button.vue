<template>
  <button :class="buttonClasses" :disabled="isLoading">
    <Spinner v-if="isLoading" />
    <span v-else>{{ name }}</span>
  </button>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
export default {
  components: {
    Spinner,
  },
  props: {
    name: String,
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return [
        "transition ease-out duration-500 text-white font-semibold py-2 px-4 rounded",
        "bg-teal-600 hover:bg-teal-800",
        { "opacity-50 cursor-not-allowed": this.isLoading },
      ];
    },
  },
};
</script>
