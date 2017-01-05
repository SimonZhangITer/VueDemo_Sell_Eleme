<template lang="html">
  <transition name="fade-backdrop">
    <div class="backdrop" v-show="isShow"></div>
  </transition>
</template>

<script>
export default {
  props: {
    isShow: Boolean
  }
}

</script>

<style lang="stylus">
.backdrop
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background rgba(7,17,27,0.6)
  backdrop-filter blur(10px)
  z-index 40
  &.fade-backdrop-enter-active,&.fade-backdrop-leave-active
    transition opacity 0.5s
  &.fade-backdrop-enter,&.fade-backdrop-leave-active
    opacity 0
</style>
