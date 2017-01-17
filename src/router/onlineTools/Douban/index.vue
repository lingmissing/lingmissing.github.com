<template>
  <div class="inner">
    <div class="pinks-tabs">
      <div class="pinks-tabs-tab active">电影</div>
      <div class="pinks-tabs-tab">图书</div>
      <div class="pinks-tabs-tab">3item</div>
    </div>
  </div>
</template>

<style>

</style>

<script>
  import { Fetch } from '../../../fetch'
  export default {
    data () {
      return {
        nowMovie: []
      }
    },
    created () {
      this.$emit('setNav', '豆瓣生活')
      // https://api.douban.com/v2/movie/in_theaters
      Fetch('https://api.douban.com/v2/book/1220562')
        .then(response => {
          debugger
        }, () => {
          debugger
        })
    }
  }
</script>