<template>
  <div class="duration-300 transform" @click="click">
    <svg
      v-if="!clicked"
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
      v-if="clicked"
      width="63"
      height="30"
      viewBox="0 0 63 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.64458 0.00735193L0 2.65193L26.5236 29.1755L29.1682 26.5309L2.64458 0.00735193Z"
        fill="none"
      />
      <path
        d="M62.3718 5.00579L60.1463 2L30 24.3204L32.2255 27.3262L62.3718 5.00579Z"
        fill="#1A6A5F"
      />
      <path
        d="M18.1448 0.00719867L15.5002 2.65178L42.0238 29.1754L44.6683 26.5308L18.1448 0.00719867Z"
        fill="#1A6A5F"
      />
      <path
        d="M33.652 -3.1297e-05L31.0074 2.64455L57.531 29.1681L60.1755 26.5235L33.652 -3.1297e-05Z"
        fill="#fff"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
    }
  },
  methods: {
    click() {
      this.clicked = !this.clicked
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
</style>
