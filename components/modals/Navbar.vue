<template>
  <div class="modal-overlay">
    <div class="modal bg-opacity-0">
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <ul>
        <li><Button class="mb-5" @click="navigate('/')" name="Home" /></li>
        <li>
          <Button class="mb-5" @click="navigate('/services')" name="Services" />
        </li>
        <li>
          <Button class="mb-5" @click="navigate('/faq')" name="FAQ" />
        </li>
        <li>
          <Button class="mb-5" @click="navigate('/portfolio')" name="Portfolio" />
        </li>
        <li>
          <Button class="mb-5" @click="navigate('/about')" name="About" />
        </li>
        <li><Button @click="navigate('/contact')" name="Contact" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMobileMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    navigate(route) {
      this.$router.push(route);
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
</style>
