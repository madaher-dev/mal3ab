<template>
  <div
    @mouseenter="kotop = true"
    @mouseleave="kotop = false"
    class="relative flex cursor-pointer select-none"
  >
    <transition name="fadeOne">
      <LogoSVG class="absolute z-10 fill-current text-mal3ab-green-dark" />
    </transition>

    <transition name="fadeTwo">
      <LogoSVGHoverTop
        v-if="kotop"
        :class="
          kotop
            ? '  -translate-x-12 -translate-y-12  visible'
            : 'hidden -translate-x-0 -translate-y-0 '
        "
        class="absolute z-20 duration-300 transform fill-current  text-mal3ab-mustard"
      />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kotop: false,
    }
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1.2s ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0px, 100px) rotate(0deg) !important;
  opacity: 0;
}

.fadeOne-enter-active,
.fadeOne-leave-active {
  transition: all 0.07s ease-in;
}
.fadeOne-enter, .fadeOne-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0px, 10px) rotate(0deg) !important;
  opacity: 0;
}

.fadeTwo-enter-active,
.fadeTwo-leave-active {
  transition: all 0.1s ease-in;
}
.fadeTwo-enter, .fadeTwo-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0px, 10px) rotate(0deg) !important;
  opacity: 0;
}

.fadeThree-enter-active,
.fadeThree-leave-active {
  transition: all 0.125s ease-in;
}
.fadeThree-enter, .fadeThree-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(5px, 15px) rotate(0deg) !important;
  opacity: 0;
}

.fadeFour-enter-active,
.fadeFour-leave-active {
  transition: all 0.15s ease-in;
}
.fadeFour-enter, .fadeFour-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(10px, 20px) rotate(0deg) !important;
  opacity: 0;
}

.fadeFive-enter-active,
.fadeFive-leave-active {
  transition: all 0.175s ease-in;
}
.fadeFive-enter, .fadeFive-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(15px, 25px) rotate(0deg) !important;
  opacity: 0;
}

.fadeSix-enter-active,
.fadeSix-leave-active {
  transition: all 0.2s ease-in;
}
.fadeSix-enter, .fadeSix-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(20px, 30px) rotate(0deg) !important;
  opacity: 0;
}

.fadeSeven-enter-active,
.fadeSeven-leave-active {
  transition: all 0.225s ease-in;
}
.fadeSeven-enter, .fadeSeven-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(25px, 35px) rotate(0deg) !important;
  opacity: 0;
}

.fadeEight-enter-active,
.fadeEight-leave-active {
  transition: all 0.25 ease-in;
}
.fadeEight-enter, .fadeEight-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(30px, 40px) rotate(0deg) !important;
  opacity: 0;
}

.fadeNine-enter-active,
.fadeNine-leave-active {
  transition: all 0.275s ease-in;
}
.fadeNine-enter, .fadeNine-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(35px, 45px) rotate(0deg) !important;
  opacity: 0;
}

.fadeTen-enter-active,
.fadeTen-leave-active {
  transition: all 0.3s ease-in;
}
.fadeTen-enter, .fadeTen-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(40px, 50px) rotate(0deg) !important;
  opacity: 0;
}

.fadeEleven-enter-active,
.fadeEleven-leave-active {
  transition: all 0.335s ease-in;
}
.fadeEleven-enter, .fadeEleven-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(45px, 55px) rotate(0deg) !important;
  opacity: 0;
}

.fadeTwelve-enter-active,
.fadeTwelve-leave-active {
  transition: all 0.47s ease-in;
}
.fadeTwelve-enter, .fadeTwelve-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(50px, 60px) rotate(0deg) !important;
  opacity: 0;
}

.fadeThrteen-enter-active,
.fadeThrteen-leave-active {
  transition: all 0.52s ease-in;
}
.fadeThrteen-enter, .fadeThrteen-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(55px, 65px) rotate(0deg) !important;
  opacity: 0;
}

.fadeFourteen-enter-active,
.fadeFourteen-leave-active {
  transition: all 0.56s ease-in;
}
.fadeFourteen-enter, .fadeFourteen-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(60px, 70px) rotate(0deg) !important;
  opacity: 0;
}
</style>
