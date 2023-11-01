<template>
    <button class="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded">
      {{name}}
    </button>
  </template>

  <script>
  export default {
    props: {
        name: String
    }
  }
  </script>