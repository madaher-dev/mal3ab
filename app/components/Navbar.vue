<template>
  <div class="flex flex-col">
    <div
      class="flex items-center justify-center h-24  lg:justify-end bg-mal3ab-blue"
    >
      <div
        :class="scrollPosition > 400 ? '  visible ' : 'hidden '"
        class="flex flex-row justify-between w-full mx-10"
      >
        <div class="flex flex-row items-center space-x-5">
          <BurgerMenu class="flex w-10 md:w-auto" />
          <NavbarDropdown
            v-if="$strapi.user"
            class="w-10 h-10 rounded-full"
            :userImage="getStrapiMedia($strapi.user.picture.url)"
          />
          <LanguageSwitcher />
        </div>
        <img
          class="flex w-52 md:mr-60 md:w-112"
          src="/Group 1.svg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '../utils/medias'

export default {
  data() {
    return {
      scrollPosition: null,
    }
  },
  methods: {
    getStrapiMedia,
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  computed: {
    user() {
      return this.$strapi.user
    },
  },
}
</script>

<style></style>
