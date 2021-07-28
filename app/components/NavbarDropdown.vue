<template>
  <div class="relative font-light">
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 flex items-center w-10 h-10 overflow-hidden rounded-full outline-none  focus:outline-none"
    >
      <img class="h-full" :src="userImage" alt="Your avatar" />
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        class="w-5 h-5"
      >
        <path
          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
          class="heroicon-ui"
        ></path>
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute right-0 w-40 mt-2 text-right rounded-lg shadow-xl  bg-mal3ab-mustard"
    >
      <div @click="isOpen = false">
        <nuxt-link
          to="/profile"
          class="flex flex-row items-center w-full px-4 py-2 space-x-2 text-sm text-right text-gray-800 rounded-t-lg  rtl hover:bg-mal3ab-green-light hover:text-white"
        >
          <span>صفتحك الشخصية</span>
        </nuxt-link>
      </div>

      <!-- <nuxt-link
        to="/discussions"
        class="flex flex-row items-center w-full px-4 py-2 space-x-2 text-sm text-right text-gray-800 rtl hover:bg-mal3ab-green-light hover:text-white"
      >
        <span>نقاشات المفعل</span>
      </nuxt-link> -->
      <button
        class="flex flex-row items-center w-full px-4 py-2 space-x-2 text-sm text-right text-gray-800 rounded-b-lg  rtl hover:bg-mal3ab-blue hover:text-white"
        @click="logout()"
      >
        <span> اقفل وروح</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    userImage: {
      type: String,
      default: '/product.png',
    },
  },
  methods: {
    logout() {
      this.$strapi.logout()
      this.$router.push('/')
    },
  },
}
</script>
