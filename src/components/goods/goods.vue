<template lang="html">

  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" @click="menuClick(index)">
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
    <div class="foods-wrapper" id="wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1>{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item" @click.prevent="test()">
              <div class="icon">
                <img width="57" height="57" :src="food.icon"/>
              </div>
              <div class="content">
                <h2>{{food.name}}</h2>
                <p class="description" v-show="food.description">{{food.description}}</p>
                <div class="sell-info">
                  <span class="sellCount">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="newPrice"><span class="unit">￥</span>{{food.price}}</span>
                  <span v-show="food.oldPrice" class="oldPrice">￥{{food.oldPrice}}</span>
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
import BScroll from 'better-scroll'
import fastclick from 'fastclick'

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
        this.$nextTick(() => {
          this._initScroll(); // 初始化scroll
          this._calculateHeight(); // 初始化列表高度列表
        })
      }
    });
    // 禁止微信默认拖拽效果
    // document.body.addEventListener('touchstart', function(ev) {
    //   ev.preventDefault();
    // });
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      foodsScrollY: 0
    }
  },
  computed: {
    menuCurrentIndex() {
      for (let i = 0, l = this.listHeight.length; i < l; i++) {
        let topHeight = this.listHeight[i]
        let bottomHeight = this.listHeight[i + 1]
        if (!bottomHeight || (this.foodsScrollY > topHeight && this.foodsScrollY < bottomHeight)) {
          return i
        }
      }
      return 0
    }
  },
  methods: {
    _initScroll() {
      this.menuWrapper = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      });
      // 监控滚动事件
      this.foodsScroll.on('scroll', (pos) => {
        this.foodsScrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight() {
      let foodList = this.$refs.foodsWrapper.querySelectorAll('.food-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0, l = foodList.length; i < l; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    test(e) {
      alert()(1)
    },
    menuClick(index) {
      console.log(this.listHeight[index]);
      console.log(this.foodsScroll);
      this.foodsScroll.scrollTo(0, -this.listHeight[index])
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
        margin: 0 18px;
        padding: 18px 0;
        border-bottom 1px solid rgba(7,17,27,0.1)
        .icon
          flex 0 0 57px
        &:last-child
          border-bottom none
        .content
          flex 1
          padding-left 10px
          h2
            margin 2px 0 8px 0
            font-size 14px
            line-height 14px
            height 14px
            font-weight 700
            color rgb(7,17,27)
          .sell-info,.description
            font-size 10px
            color rgb(147,153,159)
            line-height 10px
            .sellCount
              margin-right 4px
          .description
            font-size 10px
            margin-bottom 8px
            line-height: 12px;
          .price
            font-size 10px
            font-weight 700
            line-height 24px
            .newPrice
              font-size 14px
              color rgb(240,20,20)
              .unit
                font-size 10px
                font-weight normal
            .oldPrice
              text-decoration line-through
              color rgb(147,153,159)
              padding-left 4px
</style>
