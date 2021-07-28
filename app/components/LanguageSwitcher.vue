<template>
  <div class="items-center text-2xl font-bold text-center text-white">
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="mt-1 text-xl text-white"
      >{{ locale.name }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style></style>
