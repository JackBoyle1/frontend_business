<template>
  <div :class="'shadow-lg text-white bg-gray-600 bg-opacity-30 md:rounded-' + roundedSuffix + ' sm:rounded-3xl text-center p-4'">

    <h1 class="text-lg font-semibold">{{ name }}</h1>
    <slot/>
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        description: String,
        roundedSuffix: {
          type: String,
          default: "full"
        }
    },
}
</script>
