<template>
  <div class="bg-mal3ab-background">
    <div class="w-4/5 mx-auto my-12 text-center md:w-1/2">
      <div v-show="error !== ''" class="p-3 border">
        <p>{{ error }}</p>
      </div>
      <h1 class="mt-5 text-2xl font-bold md:text-4xl">اشترك في المعمل</h1>
      <form class="flex flex-col space-y-1" @submit="createUser">
        <div>
          <input
            v-model="email"
            class="w-full p-3 my-5 text-center border"
            type="email"
            placeholder="الإيميل"
          />
        </div>
        <div>
          <input
            v-model="username"
            class="w-full p-3 my-5 text-center border"
            type="text"
            placeholder="اسم المستخدم"
          />
        </div>
        <div>
          <input
            v-model="password"
            class="w-full p-3 my-5 text-center border"
            type="password"
            placeholder="كلمة السر"
          />
        </div>
        <div class="flex mx-auto">
          <button
            :disabled="email === '' || password === '' || username === ''"
            class="flex items-center justify-center w-40 h-12 px-4 py-2 text-xl font-medium text-center text-white rounded-full cursor-pointer select-none  hover:text-black bg-mal3ab-green-light hover:bg-opacity-60 hover:bg-mal3ab-mustard"
            type="submit"
          >
            اشترك
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async createUser(e) {
      e.preventDefault()
      try {
        const newUser = await this.$strapi.register({
          email: this.email,
          username: this.username,
          password: this.password,
        })
        console.log(newUser)
        if (newUser !== null) {
          this.error = ''
          this.$nuxt.$router.push(localePath('/'))
        }
      } catch (error) {
        this.error = error.message
      }
    },
  },
  middleware: 'authenticated',
}
</script>
<style></style>
