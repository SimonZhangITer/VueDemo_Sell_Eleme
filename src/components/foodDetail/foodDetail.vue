<template lang="html">
<div class="foodDetail" v-show="showDetail">
  <!-- <img :src="food.image" height="425" width="100%"> -->
  <div class="info">
    <div class="title">{{food.name}}</div>
    <div class="desc">
      <span>月售{{food.sellCount}}</span>
      <span>好评率{{food.rating}}%</span>
    </div>
    <div class="price">
      <span class="unit">￥</span>{{food.price}}
      <span class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
    </div>
    <div class="shopCart">
      <div class="text">加入购物车</div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="desc">
    <div class="title">商品介绍</div>
    <div class="content">{{food.info}}</div>
  </div>
  <div class="divider"></div>
  <div class="evaluation">
    <div class="title">
      商品评价
    </div>
    <div class="classify">
      <span v-for="(item,index) in classifyArr" class="item" :class="{'active':item.active,'bad':index==2,'badActive':item.active&&index==2}" @click="filterEvel(item)">
        {{item.name}}<span class="count">{{item.count}}</span>
      </span>
    </div>
    <div class="switch" @click="evelflag=!evelflag">
      <span class="icon-check_circle" :class="{'on':evelflag}"></span>
      <span class="text">只看有内容的评价</span>
    </div>
    <div class="evel-list">
      <ul>
        <li class="evel"></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  data() {
    return {
      showDetail: false,
      classifyArr: [{
        name: '全部',
        count: this.food.ratings.length,
        active: true
      }, {
        name: '推荐',
        count: this.food.ratings.filter((data) => data.rateType === 0).length,
        active: false
      }, {
        name: '吐槽',
        count: this.food.ratings.filter((data) => data.rateType).length,
        active: false
      }],
      evelflag: true
    }
  },
  created() {},
  methods: {
    filterEvel(item) {
      this.classifyArr.forEach((data) => {
        data.active = false
      })
      item.active = true
    }
  }
}

</script>

<style lang="stylus" scoped>
.foodDetail
  position fixed
  left 0
  right 0
  top 0
  bottom 48px
  width 100%
  background white
  .divider
    height 16px
    width 100%
    background #f3f5f7
    border-top 1px solid rgba(7,17,27,0.1)
    border-bottom 1px solid rgba(7,17,27,0.1)
  .info
    position relative
    box-sizing border-box
    width 100%
    padding 18px
    .title
      font-size 14px
      font-weight 700
      color rgb(7,17,27)
      line-height 14px
    .desc
      display flex
      padding 0
      padding-top 8px
      font-size 10px
      color rgb(147,153,159)
      line-height 10px
      span:last-child
        padding-left 12px
    .price
      display flex
      padding-top 18px
      font-size 14px
      font-weight 700
      color rgb(240,20,20)
      line-height 24px
      .unit
        font-size 10px
        font-weight normal
      .oldPrice
        padding-left 12px
        font-size 10px
        font-weight normal
        color rgb(147,153,159)
        line-height 24px
    .shopCart
      position absolute
      right 18px
      bottom 18px
      height 24px
      text-align center
      .text
        box-sizing border-box
        height 100%
        line-height 24px
        color white
        font-size 10px
        padding 0 12px
        border-radius 12px
        background rgb(0,160,220)
  .desc
    padding 18px
    .title
      font-size 14px
      font-weight 500
      color #07111b
      margin-bottom 6px
    .content
      font-size 12px
      font-weight 200
      color rgb(77,85,93)
      line-height 24px
      padding 0 8px
  .evaluation
    padding 18px 0
    position relative
    .title
      padding-left 18px
      font-size: 14px
      font-weight 500
      color: #07111b
    .classify
      padding 18px 0
      margin 0 18px
      border-bottom 1px solid rgba(7,17,27,0.1)
      .item
        display inline-block
        font-size 12px
        padding 8px 12px
        line-height 16px
        background rgba(0,160,220,0.2)
        color rgb(77,85,95)
        margin-right 8px
        .count
          font-size 8px
          padding-left 2px
        &.active
          color white
          background rgb(0,169,220)
        &.bad
          background rgba(77,85,93,0.2)
        &.badActive
          background #4d555d
    .switch
      display table-cell
      position absolute
      font-size 12px
      width 100%
      padding 12px 0 12px 18px
      color rgb(147,153,159)
      border-bottom 1px solid rgba(7,17,27,0.1)
      .icon-check_circle
        font-size 24px
        vertical-align middle
        &.on
          color #00c850
</style>
