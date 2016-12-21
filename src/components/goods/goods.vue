<template lang="html">

  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods">
          <span class="text">
            <!-- <span class="icon" v-show="item.type>0" :class="iconClassMap[item.type]"></span> -->
            <iconMap v-show="item.type>0" :iconType="item.type"></iconMap>
            {{item.name}}
          </span>
          <div class="line">

          </div>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1>{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" />
              </div>
              <div class="content">
                <h2>{{food.name}}</h2>
                <p class="description" v-show="food.description">{{food.description}}</p>
                <div class="sell-info">
                  <span class="sellCount">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span><span class="unit">￥</span>{{food.price}}</span>
                  <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import iconMap from 'components/iconMap/iconMap'

const ERR_OK = 0

export default {
  props: {
    seller: Object
  },
  created() {
    this.$http.get('/api/goods').then((res) => {
      res = res.body;
      if (res.errno === ERR_OK) {
        this.goods = res.data;
      }
    });
  },
  data() {
    return {
      goods: []
    }
  },
  components: {
    iconMap
  }
}

</script>

<style lang="stylus">
@import '../../common/stylus/mixin'
  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      margin-top: 2px;
      li
        display table
        height 54px
        line-height 14px
        width 56px
        margin 0 12px
        border-bottom 1px solid rgba(7,17,27,0.1)
        .text
          display table-cell
          vertical-align middle
          font-size 12px
          font-weight 200
          white-space normal
          line-height 14px
          .iconMap
            vertical-align middle
    .foods-wrapper
      flex 1
      margin-top: 2px;
      .food-list
        h1
          height 26px
          line-height 26px
          padding-left 12px
          font-size 12px
          color rgb(147,153,159)
          background #f3f5f7
          border-left 2px solid #d9dde1
      .food-item
        display flex
        margin 18px
        padding-bottom 18px
        border-bottom 1px solid rgba(7,17,27,0.1)
        .icon
          flex 0 0 57px
        &.last-child
          border-bottom none
          margin-bottom 0
        .content
          padding-left 10px
          h2
            padding-top 2px
            font-size 14px
            line-height 14px
            font-weight 700
            color rgb(7,17,27)
            padding-bottom 8px
          .description,.sell-info
            font-size 10px
            color rgb(147,153,159)
            line-height 10px
            padding-bottom 8px
            .rating
              padding-left 12px
          .price
            font-size 16px
            color rgb(240,20,20)
            font-weight 700
            line-height 24px
            .unit
              font-size 10px
              font-weight normal
</style>
