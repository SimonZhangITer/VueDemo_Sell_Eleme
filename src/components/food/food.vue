<template lang="html">
  <div class="food" v-show="showDetails">

  </div>
</template>

<script>
export default {
  props: {
    food: Object
  }
}

</script>

<style lang="stylus" scoped>
.food
  position fixed
  left 0
  top 0
  right 0
  bottom 48px
  width 100%
  background white
  z-index 30
</style>
