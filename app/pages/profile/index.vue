<template>
  <div class="min-h-screen">
    <div class="flex flex-col items-center justify-center mt-20 align-middle">
      <p>{{ $strapi.user.username }}</p>
      <p>{{ $strapi.user.name }}</p>
      <p>{{ $strapi.user.email }}</p>
      <p>{{ $strapi.user.age }}</p>
      <p>{{ $strapi.user.bio }}</p>
      <nuxt-link to="/profile" v-if="$strapi.user">
        <img
          class="rounded-full w-60 h-60"
          :src="getStrapiMedia($strapi.user.picture.url)"
          alt=""
        />
      </nuxt-link>

      <div v-for="item in $strapi.user.workshops" :key="item.id">
        <nuxt-link :to="`/workshops/${item.slug}`">
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'

export default {
  middleware: 'notAuthenticated',
  methods: {
    getStrapiMedia,
  },
}
</script>

<style></style>
