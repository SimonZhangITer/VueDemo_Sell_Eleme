<template lang="html">
  <span class="iconMap" :class="iconClassMap[iconType]"></span>
</template>

<script>
export default {
  props: {
    iconType: Number
  },
  created() {
    this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}

</script>

<style lang="stylus">
@import '../../common/stylus/mixin'
  .iconMap
    display inline-block
    background-size 100% 100%
    background-repeat no-repeat
    width 12px
    height 12px
    &.decrease
      bg-image('decrease_3')
    &.discount
      bg-image('discount_3')
    &.guarantee
      bg-image('guarantee_3')
    &.invoice
      bg-image('invoice_3')
    &.special
      bg-image('special_3')
</style>
