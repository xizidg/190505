<template>
  <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item on" @click="getDetail('msite')">
<span class="item_icon">
<i class="iconfont iconwaimai"></i>
</span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item"  @click="getDetail('search')">
<span class="item_icon">
<i class="iconfont iconxingtaiduICON_sousuo--"></i>
</span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="getDetail('order')">
<span class="item_icon">
<i class="iconfont iconorder"></i>
</span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="getDetail('profile')">
<span class="item_icon">
<i class="iconfont icongerencopy21"></i>
</span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    getDetail (name) {
      this.$router.push({name})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(red)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
