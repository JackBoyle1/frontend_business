<template>
  <div>
    <h1 class="sm:text-2x1 md:text-3xl lg:text-3x1 font-bold text-center pb-4 text-white">Contact Us</h1>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm';

export default {
  components: {
    ContactForm,
  },
};
</script>