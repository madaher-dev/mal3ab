<template>
  <div class="flex items-center justify-center bg-mal3ab-green-dark">
    <div
      :class="
        $i18n.locale === 'ar' ? '  sm:flex-row   ' : ' sm:flex-row-reverse '
      "
      class="flex flex-col-reverse items-center justify-center w-screen h-auto  sm:w-10/12 sm:justify-between sm:h-48"
    >
      <div
        class="flex flex-row-reverse items-center justify-between gap-10 mt-5 mb-5  sm:gap-0 sm:flex-col sm:mt-0 sm:mb-0"
      >
        <div class="flex flex-row items-center space-x-6">
          <a target="_blank" :href="links.InstagramURL">
            <IconInstagram
              class="h-12 text-black cursor-pointer fill-current  hover:text-mal3ab-mustard"
            />
          </a>
          <a target="_blank" :href="links.TwitterURL">
            <IconTwitter
              class="h-12 text-black cursor-pointer fill-current  hover:text-mal3ab-mustard"
          /></a>
          <a target="_blank" :href="links.FacebookURL">
            <IconFacebook
              class="h-12 text-black cursor-pointer fill-current  hover:text-mal3ab-mustard"
            />
          </a>
          <a target="_blank" :href="links.YoutubeURL">
            <IconYoutube
              class="h-12 text-black cursor-pointer fill-current  hover:text-mal3ab-mustard"
            />
          </a>
          <a target="_blank" :href="links.DiscordURL">
            <IconDiscord
              class="mt-1 text-black cursor-pointer fill-current  h-7 hover:text-mal3ab-mustard"
            />
          </a>
        </div>
        <div
          :class="
            this.$i18n.locale === 'ar'
              ? '  sm:flex-row '
              : ' sm:flex-row-reverse '
          "
          class="flex flex-col mt-5 text-xs font-thin gap-x-8"
        >
          <p class="text-sm sm:text-xs">© أضف ٢٠٢١</p>
          <p>سياسة الخصوصية</p>
        </div>
      </div>

      <div
        :class="
          this.$i18n.locale === 'ar'
            ? '  flex-row items-center '
            : ' justify-start  '
        "
        class="flex items-center mt-5 mb-0 space-x-0 text-black  sm:mt-0 sm:mb-5 sm:space-x-16"
      >
        <img
          v-if="this.$i18n.locale === 'en'"
          class="w-48"
          src="/logo.gif"
          alt="logo"
        />

        <div class="flex-row hidden space-x-10 md:flex">
          <div
            :class="
              this.$i18n.locale === 'ar' ? '  text-right ' : ' text-left '
            "
            class="flex flex-col font-light"
          >
            <p class="font-semibold">أضف</p>
            <p>موقع أضف</p>
            <p>ويكي أضف</p>
            <p>موقع الملعب</p>
          </div>

          <div
            :class="
              this.$i18n.locale === 'ar' ? '  text-right ' : ' text-left '
            "
            class="flex flex-col font-light"
          >
            <p class="font-semibold">المفعل</p>
            <p>جميع الورش</p>
            <p>جميع المسارات</p>
            <p>جميع المدربون</p>
          </div>
        </div>
        <img
          v-if="this.$i18n.locale === 'ar'"
          class="w-48"
          src="/logo.gif"
          alt="logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        id: 1,
        FacebookURL: 'facebook.com/ADEF.xyz/',
        TwitterURL: 'https://twitter.com/adef_xyz/',
        InstagramURL: 'https://www.instagram.com/adef.xyz/',
        DiscordURL: 'https://discord.gg/sGnsMyRSea',
        YoutubeURL: 'https://www.youtube.com/user/ADEFTube',
        published_at: '2021-07-02T09:41:03.790Z',
        created_at: '2021-07-02T09:24:52.107Z',
        updated_at: '2021-07-02T09:41:03.813Z',
      },
    }
  },
}
</script>

<style></style>
