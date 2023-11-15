<template>
    <div class="text-center p-4 max-w-md mx-auto">
      <h1 class="text-3xl font-bold text-green-500">Thank You!</h1>
      <p class="mt-4 text-white">We'll be in touch soon.</p>
      <br />
      <p class="mt-4 text-white">
        Please wait while you're taken back to the contact page.
      </p>
      <div class="flex items-center justify-center mt-4">
        <Spinner/>
      </div>
    </div>
  </template>
  
  <script>
  import Spinner from '@/components/Spinner.vue';
  export default {
    components: {
      Spinner,
    },
    mounted() {
      this.redirectToContact();
    },
    methods: {
      redirectToContact() {
        setTimeout(() => {
          this.$router.push("/contact");
        }, 3000);
      },
    },
  };
  </script>
  