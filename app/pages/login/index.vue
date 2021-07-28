<template>
  <div class="bg-mal3ab-background">
    <div class="w-4/5 mx-auto my-12 text-center md:w-1/2">
      <div v-show="error !== ''" class="p-3 border">
        <p>{{ error }}</p>
      </div>
      <h1 class="mt-5 text-2xl font-bold md:text-4xl">إنكش</h1>
      <form class="flex flex-col space-y-1" @submit="loginUser">
        <div>
          <input
            v-model="identifier"
            class="w-full p-3 my-5 border"
            type="email"
            placeholder="إيميلك"
          />
        </div>
        <div>
          <input
            v-model="password"
            class="w-full p-3 my-5 border"
            type="password"
            placeholder="سر الليل"
          />
        </div>
        <div class="flex mx-auto">
          <button
            :disabled="identifier === '' || password === ''"
            class="flex items-center justify-center w-40 h-12 px-4 py-2 text-xl font-medium text-center text-white rounded-full cursor-pointer select-none  hover:text-black bg-mal3ab-green-light hover:bg-opacity-60 hover:bg-mal3ab-mustard"
            type="submit"
          >
            إنكش
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $strapi, i18n }) {
    const result = await $strapi.$chapters.find({
      _locale: i18n.locale,
    })

    return {
      chapter: result[0],
    }
  },
  data() {
    return {
      identifier: 'adham.farrag@gmail.com',
      password: 'ftixiU533Nj7nSe',
      error: '',
    }
  },
  methods: {
    async loginUser(e) {
      e.preventDefault()
      try {
        const user = await this.$strapi.login({
          identifier: this.identifier,
          password: this.password,
        })
        console.log(user)
        if (user !== null) {
          this.error = ''
          this.$nuxt.$router.push('/')
        }
      } catch (error) {
        this.error = 'Error in login credentials'
      }
    },
  },
  middleware: 'authenticated',
}
</script>
<style></style>
