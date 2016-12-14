<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin'
.header
  background: rgb(109, 106, 106)
  /*color:rgba(7,17,27,0.5)*/
  blur:10px
  color rgb(255,255,255)
  .content-wrapper
    display flex
    padding: 24px 12px 18px 24px
    font-size 12px
    .avatar
      img
        border-radius 2px
    .content
      margin-left 16px
      .title
        margin 2px 0 8px 0
        font-size 16px
        .brand
          display inline-block
          vertical-align top
          width 30px
          height 18px
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
        .name
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight bold
      .description
        font-size 12px
        margin-bottom 10px
      .supports
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 4px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height 12px

</style>

<template lang="html">

<div class="header">
    <div class="content-wrapper">
        <div class="avatar">
            <img :src="seller.avatar" width="64" height="64" />
        </div>
        <div class="content">
            <div class="title">
                <span class="brand"></span>
                <span class="name">{{seller.name}}</span>
            </div>
            <div class="description">
                {{seller.description + ' / ' + seller.deliveryTime + '分钟送达'}}
            </div>
            <div class="supports" v-if="seller.supports">
                <div class="supports_desc">
                    <span class="icon" :class="iconClassMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
                <div class="counts">
                    {{seller.supports.length+'个'}}
                </div>
            </div>
        </div>
    </div>
    <div class="bulletin-wrapper">

    </div>
</div>

</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  }
}
</script>
