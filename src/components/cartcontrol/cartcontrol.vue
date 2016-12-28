<template lang="html">

  <div class="cartcontrol">
    <transition name="fadeRotate">
      <div class="cart-decrease" v-show="food.count" @click="decreaseCart()">
        <i class="inner icon-remove_circle_outline"></i>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count">
      {{food.count}}
    </div>
    <div class="cart-add" @click="addCart()">
      <i class="icon-add_circle"></i>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
export default {
  props: {
    food: Object
  },
  methods: {
    addCart() {
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 0)
      }
      this.food.count++
    },
    decreaseCart() {
      if (!event._constructed) {
        return
      }
      this.food.count--;
    }
  }
}

</script>

<style lang="stylus">

.cartcontrol
  .fadeRotate-enter-active, .fadeRotate-leave-active {
    transition: all .4s linear
    transform translate3d(0,0,0)
    .inner
      display inline-block
      vertical-align top
      font-size 24px
      color rgb(0,160,220)
      line-height 24px
      transition all 0.4s linear
      transform rotate(0)
  }
  .fadeRotate-enter, .fadeRotate-leave-active {
    display inline-block
    opacity: 0
    transform translate3d(24px,0,0)
    .inner
      transform rotate(180deg)
  }
  .cart-count
    display inline-block
    vertical-align top
    font-size 10px
    color rgb(147,153,159)
    line-height 24px
    text-align center
    padding 6px 0
  .cart-decrease,.cart-add
    display inline-block
    vertical-align top
    font-size 24px
    color rgb(0,160,220)
    line-height 24px
    padding 6px
</style>
