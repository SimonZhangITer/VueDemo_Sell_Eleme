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
            </div>
        </div>
        <div class="support-count" v-if="seller.supports" @click="showDetails()">
            <span class="count">{{seller.supports.length+'个'}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
  </div>
  <div class="bulletin-wrapper" @click="showDetails()">
    <span class="bulletin-title"></span>
    <span class="bulletin-text">{{seller.bulletin}}</span>
    <i class="icon-keyboard_arrow_right"></i>
  </div>
  <div class="background">
    <img :src="seller.avatar" width="100%" height="100%"/>
  </div>
  <transition name="fade">
    <div v-if="detailShow" class="detail">
      <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"> </div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="item in seller.supports">
                <span class="icon" :class="iconClassMap[item.type]"></span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"> </div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">{{seller.bulletin}}</div>
          </div>
      </div>
      <div class="detail-close">
        <i class="icon-close" @click="hideDetail()"></i>
      </div>
    </div>
  </transition>
</div>

</template>

<script>
import star from 'components/star/star'

export default {
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components: {
    star
  },
  data() {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetails() {
      this.detailShow = true;
    },
    hideDetail() {
      this.detailShow = false;
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin'


.header
  position relative
  background rgba(7,17,27,0.5)
  color #fff
  blur:10px
  overflow hidden
  .content-wrapper
    position relative
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
            font-size 10px
    .support-count
      position absolute
      right 12px
      bottom 18px
      padding 0 8px
      height 24px
      line-height 24px
      border-radius 14px
      background-color rgba(0,0,0,0.2)
      text-align center
      .count
        vertical-align top
        font-size 10px
      .icon-keyboard_arrow_right
        font-size 10px
        margin-left 2px
        line-height 24px
  .bulletin-wrapper
    position relative
    height 28px
    line-height 28px
    padding 0 22px 0 12px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    background rgba(7,17,27,0.2)
    .bulletin-title
      display inline-block
      vertical-align top
      margin-top 8px
      width 22px
      height 12px
      bg-image('bulletin')
      background-size 100% 100%
      background-repeat no-repeat
    .bulletin-text
      font-size 10px
      vertical-align middle
      margin 0 4px
    .icon-keyboard_arrow_right
      position absolute
      font-size 10px
      right 12px
      top 8px
  .background
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    filter blur(10px)
    z-index -1
  .detail
    position fixed
    top 0
    left 0
    z-index 100
    width 100%
    height 100%
    background rgba(7,17,27,0.8)
    backdrop-filter blur(10px)
    .detail-wrapper
      min-height 100%
      width 100%
      .detail-main
        margin-top 64px
        padding-bottom 64px
        .name
          font-size 16px
          font-weight 700
          width 100%
          color rgb(255,255,255)
          line-height 16px
          text-align center
        .star-wrapper
          margin 16px 11px 28px 0
          text-align center
        .title
          display flex
          width 80%
          margin 0 auto 24px auto;
          .line
            display inline-block
            flex 1
            height 1px
            background rgba(255,255,255,0.2)
            margin auto
          .text
            padding 0 12px
            font-size 14px
            font-weight 700
        .supports
          padding 0 0 28px 36px
          .support-item
            color white
            padding 0 6px 12px 16px
            .text
              vertical-align middle
              font-size 12px
              font-weight 200
              color rgb(255,255,255)
              line-height 12px
            .icon
              display inline-block
              vertical-align top
              width 16px
              height 16px
              margin-right 6px
              background-size 100% 100%
              background-repeat no-repeat
              &.decrease
                bg-image('decrease_2')
              &.discount
                bg-image('discount_2')
              &.guarantee
                bg-image('guarantee_2')
              &.invoice
                bg-image('invoice_2')
              &.special
                bg-image('special_2')
        .bulletin
          padding 0 48px
          font-size 12px
          font-weight 200
          color rgb(255,255,255)
          line-height 24px

    .detail-close
      position relative
      width 32px
      height 32px
      margin -64px auto 0 auto
      clear both
      font-size 32px
      color rgba(255,255,255,0.5)
    &.fade-enter-active, &.fade-leave-active {
        transition: opacity .5s
    }
    &.fade-enter, &.fade-leave-active {
        opacity: 0
    }
</style>
