<template>
  <div class="shadow-lg text-white bg-gray-600 bg-opacity-30 rounded-full text-center p-4">
    <h2 class="text-lg font-semibold">{{ name }}</h2>
    <slot/>
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        description: String,
    }
}
</script>