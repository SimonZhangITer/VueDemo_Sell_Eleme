<template lang="html">

  <div class="cartcontrol">
    <transition name="rotate">
      <div class="cart-decrease" v-show="food.count" @click="decreaseCart()">
          <span class="icon-remove_circle_outline"></span>
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
  .fade-enter-active, .fade-leave-active
    transition: all .4s linear
    transform translate3d(0,0,0)
    .icon-remove_circle_outline
      display inline-block
      transition all 0.4s linear
      transform rotate(0deg)
  .fade-enter, .fade-leave-active
    opacity: 0
    transform translate3d(24px,0,0)
    .icon-remove_circle_outline
      transition all 0.4s linear
      display inline-block
      transform rotate(180deg)
  .icon-remove_circle_outline
    display inline-block
    transition all 0.4s linear
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
