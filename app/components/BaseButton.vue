<template>
  <div
    class="flex items-center justify-center w-auto h-12 px-4 py-2 text-xl font-medium text-center text-white rounded-full cursor-pointer select-none  hover:text-black bg-mal3ab-green-light hover:bg-opacity-60 hover:bg-mal3ab-mustard"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style></style>
