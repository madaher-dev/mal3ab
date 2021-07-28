<template>
  <nav class="z-50 flex h-10 text-black bg-transparent zind">
    <div class="flex items-center">
      <button class="z-40 mr-2" aria-label="Open Menu" @click="drawer">
        <div
          class="text-2xl text-white cursor-pointer select-none  hover:text-gray-400"
        >
          <svg
            v-if="!isOpen"
            width="61"
            height="30"
            viewBox="0 0 61 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.64458 0.00738245L0 2.65196L26.5236 29.1755L29.1682 26.531L2.64458 0.00738245Z"
              fill="#1A6A5F"
            />
            <path
              d="M18.1448 0.00722919L15.5002 2.65181L42.0238 29.1754L44.6683 26.5308L18.1448 0.00722919Z"
              fill="#1A6A5F"
            />
            <path
              d="M33.652 -7.79467e-07L31.0074 2.64458L57.531 29.1682L60.1755 26.5236L33.652 -7.79467e-07Z"
              fill="#1A6A5F"
            />
          </svg>

          <svg
            v-if="isOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44.67 30.17"
          >
            <defs>
              <style>
                .cls-1 {
                  fill: #fff;
                }
              </style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <line fill="#fff" x1="1.32" y1="2.32" x2="27.85" y2="28.85" />
                <rect
                  fill="#fff"
                  x="12.71"
                  y="-3.17"
                  width="3.74"
                  height="37.51"
                  transform="translate(-6.75 14.88) rotate(-45)"
                />
                <line fill="#fff" x1="16.82" y1="2.32" x2="43.35" y2="28.85" />
                <rect
                  fill="#fff"
                  x="28.21"
                  y="-3.17"
                  width="3.74"
                  height="37.51"
                  transform="translate(-2.21 25.84) rotate(-45)"
                />
                <rect
                  fill="#fff"
                  x="2.58"
                  y="12.71"
                  width="37.51"
                  height="3.74"
                  transform="translate(-4.06 19.36) rotate(-45)"
                />
              </g>
            </g>
          </svg>
        </div>
      </button>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="fixed inset-0 z-10 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-transparent"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      :class="isOpen ? '-translate-x-0' : '-translate-x-full'"
      class="fixed top-0 left-0 z-30 h-full overflow-auto transition-all duration-700 ease-in-out transform  bg-mal3ab-blue w-80"
    >
      <div class="flex flex-col pr-5">
        <div class="flex flex-col content-start justify-end w-full mb-5">
          <div class="mt-32 ml-8 border-b-2 border-white">
            <p
              :class="this.$i18n.locale === 'ar' ? '   rtl ' : '  '"
              class="mb-3 text-2xl font-semibold text-white"
            >
              معلومات عامة
            </p>
          </div>
        </div>

        <div
          :class="this.$i18n.locale === 'ar mr-8' ? '   rtl ml-8  ' : '  '"
          class="flex flex-col"
        >
          <div
            @click="sections('office')"
            class="flex items-center w-full mb-3 ml-8 text-lg text-white cursor-pointer  hover:text-mal3ab-background"
          >
            <p>
              <span>كام حد بيلعب</span>
            </p>
          </div>

          <span
            @click="isOpen = false"
            class="flex items-center mb-3 ml-8 text-lg text-white  hover:text-mal3ab-background"
          >
            <p @click="toggleMenu()">
              <span>مدة اللعبة</span>
            </p>
          </span>

          <span
            @click="isOpen = false"
            class="flex items-center mb-3 ml-8 text-lg text-white  hover:text-mal3ab-background"
          >
            <p @click="toggleMenu()">
              <span>سن اللعيبة</span>
            </p>
          </span>
        </div>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      sectionMenu: '',
    }
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },

    toggleMenu() {
      this.sectionMenu = ''
      this.isOpen = !this.isOpen
    },

    sections(data) {
      if (this.sectionMenu == data) {
        this.sectionMenu = ''
      } else {
        this.sectionMenu = data
      }
    },

    enter(el) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = height
      })
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = 0
      })
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false
    })
  },
}
</script>

<style scoped>
.zind {
  z-index: 100;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}
</style>
