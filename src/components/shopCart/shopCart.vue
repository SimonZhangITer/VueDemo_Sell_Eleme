<template lang="html">

  <div class="shopCart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <span class="icon-shopping_cart"></span>
          </div>
        </div>
        <div class="price">

        </div>
        <div class="desc">

        </div>
      </div>
      <div class="content-right">

      </div>
    </div>
  </div>

</template>

<script>
export default {}

</script>

<style lang="stylus">
.shopCart
  position fixed
  bottom 0
  background #141d27
  width 100%
  height 46px
  .content
    display flex
    .content-left
      flex 1
      height 46px
      .logo-wrapper
        height 44px
        border-radius 50%
        width 10px
    .content-right
      flex 0 0 105px
</style>
