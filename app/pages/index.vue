<template>
  <div class="flex flex-col items-center justify-center">
    <div
      :class="
        this.$i18n.locale === 'ar'
          ? '  justify-end  text-right '
          : ' justify-start text-left '
      "
      class="relative flex items-center bg-mal3ab-mustard"
    >
      <div
        class="w-10/12 my-20 space-y-2 text-xl font-bold  md:mr-20 lg:mr-40 md:w-8/12 lg:w-5/12 text-mal3ab-green-light"
      >
        <div
          :class="this.$i18n.locale === 'ar' ? '  rtl ' : ' ml-10 '"
          class="space-y-3"
          v-html="$md.render(chapter.introduction)"
        ></div>
      </div>

      <Meem
        :class="
          this.$i18n.locale === 'ar'
            ? '  left-0 ml-16  sm:ml-20 w-80 md:-m-2 lg:m-2 md:w-96 lg:w-112  '
            : ' right-0 mr-16  sm:mr-20 w-80 md:-m-2 lg:m-2 md:w-96 lg:w-112 '
        "
        class="absolute -bottom-56 md:-bottom-64 lg:-bottom-80"
      />
    </div>
    <div
      class="flex flex-col items-center justify-center w-full pb-16 mx-auto  bg-mal3ab-background"
    >
      <div
        v-for="item in chapter.Content"
        :key="item.id"
        class="flex flex-col justify-center w-11/12 mx-auto lg:w-10/12 mt-96"
      >
        <div
          :class="
            $i18n.locale === 'ar' ? '  sm:flex-row  ' : ' sm:flex-row-reverse '
          "
          class="flex flex-col-reverse"
        >
          <div
            :class="$i18n.locale === 'ar' ? '  rtl  ' : ' '"
            v-if="item.__component === 'editorial-components.section'"
            class="w-10/12 mt-5 space-y-3 font-light sm:mt-0 sm:w-8/12 h-50"
          >
            {{ item.body }}
          </div>

          <div class="w-10/12 mr-10 sm:w-3/12 h-50">
            <p
              v-if="item.__component === 'editorial-components.section'"
              :class="$i18n.locale === 'ar' ? '  rtl ' : '  '"
              class="text-xl font-bold"
            >
              {{ item.title }}
            </p>
          </div>
        </div>

        <div
          v-for="subSection in item.subSection"
          :key="subSection.id"
          class="flex flex-col-reverse mt-10"
          :class="
            $i18n.locale === 'ar' ? '  sm:flex-row  ' : ' sm:flex-row-reverse '
          "
        >
          <div
            :class="$i18n.locale === 'ar' ? '  rtl  ' : ' '"
            v-html="
              $md.render(
                subSection.body.replace('/uploads/', `${url}/uploads/`)
              )
            "
            class="w-10/12 mt-5 space-y-3 font-light md:mt-0 sm:w-8/12 h-50"
          ></div>

          <div
            :class="
              $i18n.locale === 'ar' ? '  ml-0 md:ml-10  ' : ' mr-0 md:mr-10 '
            "
            class="w-10/12 sm:w-3/12 h-50"
          >
            <p
              :class="
                $i18n.locale === 'ar'
                  ? '  text-right md:text-left '
                  : ' text-left md:text-right '
              "
              class="text-xl"
            >
              {{ subSection.title }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="!$strapi.user"
        class="flex flex-col items-center justify-center w-6/12 mx-auto my-32 space-y-3 text-center  bg-mal3ab-background"
      >
        <p class="text-3xl font-semibold text-center">
          المفروض إن في كلام هنا! يشجع الناس إنها تعمل حساب علي منصة المعمل!
        </p>
        <p class="pt-5 text-lg font-medium text-center">
          قد نصل إلى استنتاج مفاده أن المتعة كلمة عديمة الفائدة لاستخدامها في
          شرح اللعبة، في الواقع، دعونا، باعتبارنا مصممي ألعاب، نهدف إلى عدم
          استخدامها. إنه مصطلح غامض ولا يقول لنا الكثير. في بعض الأحيان عندما
          يتحدث الناس عن المتعة نتخيل تجربة مليئة بالبهجة والضحك
        </p>
        <div class="flex flex-row justify-center space-x-3 py-7">
          <nuxt-link :to="localePath('/login')">
            <BaseButton title="عندي حساب" />
          </nuxt-link>

          <nuxt-link :to="localePath('/register')">
            <BaseButton title="اشترك في المعمل" />
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-col space-y-3" v-if="$strapi.user">
        <transition name="fade">
          <div
            v-if="qRank == 0"
            class="flex flex-col items-center justify-center w-6/12 pb-12 mx-auto mt-12 space-y-3 text-center  bg-mal3ab-background"
          >
            <p class="pt-5 text-lg font-medium text-center">
              قد نصل إلى استنتاج مفاده أن المتعة كلمة عديمة الفائدة لاستخدامها
              في شرح اللعبة، في الواقع، دعونا، باعتبارنا مصممي ألعاب، نهدف إلى
              عدم استخدامها. إنه مصطلح غامض ولا يقول لنا الكثير. في بعض الأحيان
              عندما يتحدث الناس عن المتعة نتخيل تجربة مليئة بالبهجة والضحك
            </p>
          </div>
        </transition>
        <div
          class="flex flex-col items-center mt-10 space-y-3"
          v-for="(item, index) in chapter.questions"
          :key="index"
        >
          <div v-if="index === qRank" class="flex flex-col space-y-3">
            <p class="text-3xl font-semibold">{{ item.question }}</p>
            <div
              class="flex flex-col items-center mx-auto  focus:outline-none w-96 rtl"
            >
              <input
                v-model="answer"
                name="answer"
                type="text"
                placeholder="اضف اجابتك"
                class="w-full p-3 my-3 border focus-within:outline-none"
              />
              <div @click="answerQuestion()" class="w-20">
                <BaseButton title="انقر" />
              </div>
            </div>
          </div>
        </div>
        <transition name="fade">
          <div class="flex mx-auto" v-if="showAnswers">
            <nuxt-link
              class="text-4xl font-semibold  text-mal3ab-green-dark hover:text-mal3ab-mustard my-7"
              :to="`/chapters/${chapter.nextChapter.slug}`"
              v-if="chapter.nextChapter"
              >اذهب للفصل التالي</nuxt-link
            >
          </div>
        </transition>
        <transition name="fade">
          <div
            v-if="showAnswers"
            class="grid justify-start gap-8 m-10 md:grid-cols-2 xl:grid-cols-3"
          >
            <div v-for="question in questions" :key="question.id">
              <div
                class="text-right rtl"
                v-if="question.chapter.id == chapter.id"
              >
                <p class="text-lg font-medium">{{ question.question }}</p>

                <div v-for="answer in answers" :key="answer.id">
                  <div
                    class="flex flex-col w-full mt-3 bg-mal3ab-mustard"
                    v-if="answer.question.id == question.id"
                  >
                    <div class="flex flex-col py-3 pr-3">
                      <p class="text-lg">{{ answer.Answer }}</p>
                      <p>{{ answer.users_permissions_user.username }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div
        class="flex flex-col justify-center w-11/12 mx-auto mt-16 lg:w-10/12"
      >
        <div class="flex flex-col w-6/12">
          <div v-for="comment in comments" :key="comment.id">
            <div v-if="comment.discussion.id == chapter.id">
              <div class="flex flex-row items-start w-full space-x-3">
                <img
                  class="w-12 h-12 rounded-full"
                  v-if="comment.author.picture"
                  :src="getStrapiMedia(comment.author.picture.url)"
                />
                <div class="flex flex-col w-full space-y-1">
                  <div
                    class="flex flex-col px-3 py-3 rounded-md bg-mal3ab-mustard"
                  >
                    <p class="text-sm">{{ comment.author.username }}</p>
                    <p class="mt-1 font-semibold">{{ comment.body }}</p>
                  </div>
                  <p class="px-3 mt-1 text-xs">
                    {{ $moment(comment.published_at).format('LL') }} -
                    {{ $moment(comment.published_at).format('LT') }}
                  </p>
                </div>
              </div>

              <!-- 
              <div class="flex flex-col space-y-3">
                <div v-for="reply in replies" :key="reply.id">
                  <div v-if="reply.comment.id == comment.discussion.id">
                    <div
                      class="flex flex-row justify-end w-auto ml-16 space-x-3"
                    >
                      <img
                        class="w-12 h-12 rounded-full"
                        :src="getStrapiMedia(comment.author.picture.url)"
                        alt=""
                      />
                      <div class="flex flex-col w-full mt-3 space-y-2">
                        <div
                          class="flex flex-col w-full px-3 py-3 rounded-md bg-mal3ab-mustard"
                        >
                          <p class="text-sm">{{ reply.author.username }}</p>
                          <p class="mt-1 font-semibold">{{ reply.body }}</p>
                        </div>
                        <p class="px-3 mt-1 text-xs">
                          {{ $moment(comment.published_at).format('LL') }} -
                          {{ $moment(comment.published_at).format('LT') }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="$strapi.user"
                  class="flex flex-row items-start w-auto ml-16 space-x-3"
                >
                  <img
                    class="w-12 h-12 rounded-full"
                    :src="getStrapiMedia(comment.author.picture.url)"
                    alt=""
                  />
                  <div class="flex flex-col items-end w-full space-y-3">
                    <input
                      v-model="reply"
                      name="description"
                      type="text"
                      placeholder="اضف تعليق"
                      class="w-full p-3 border"
                    />
                    <div @click="reply()" class="w-20">
                      <BaseButton title="انقر" />
                    </div>
                  </div>
                </div> 
              </div> -->
            </div>
          </div>
          <div
            v-if="$strapi.user"
            class="flex flex-row items-start w-auto mt-5 space-x-3"
          >
            <div class="flex flex-col items-end w-full space-y-3">
              <input
                v-model="newComment"
                name="description"
                type="text"
                placeholder="اضف تعليق"
                class="w-full p-3 border"
              />
              <div @click="createComment()" class="w-20">
                <BaseButton title="انقر" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '../utils/medias'
export default {
  async asyncData({ $strapi, i18n }) {
    const result = await $strapi.$chapters.find({
      _locale: i18n.locale,
    })

    return {
      chapter: result[0],
      questions: await $strapi.$questions.find({
        _locale: i18n.locale,
      }),
      answers: await $strapi.$answers.find({
        _locale: i18n.locale,
      }),
      comments: await $strapi.$comments.find(),
      replies: await $strapi.$replies.find(),
      users: await $strapi.$users.find(),
    }
  },

  data() {
    return {
      url: 'https://mal3ab.herokuapp.com:1337',
      answer: '',
      qRank: 0,
      localeLanguage: this.$i18n.locale,
      showAnswers: false,
      finishersO: null,
      user: null,
      newComment: '',
    }
  },
  methods: {
    getStrapiMedia,
    async answerQuestion() {
      await this.$strapi.$answers.create({
        _locale: this.localeLanguage,
        Answer: this.answer,
        users_permissions_user: this.$strapi.user,
        question: this.chapter.questions[this.qRank],
      })
      this.answer = ''
      this.qRank++
      if (this.chapter.questions.length == this.qRank) {
        this.showAnswers = true
        this.finishersO = this.chapter.finishers
        this.finishersO.push(this.$strapi.user)
        this.chapter = await this.$strapi.update('chapters', 1, {
          finishers: this.finishersO,
        })
        console.log('DONE')
      }
    },
    async createComment() {
      await this.$strapi.$comments.create({
        body: this.newComment,
        author: this.$strapi.user,
        isSpam: false,
        discussion: this.chapter.discussion,
      })
      this.newComment = ''
      this.comments = await this.$strapi.$comments.find()
    },
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.ltr {
  direction: ltr;
}
</style>
