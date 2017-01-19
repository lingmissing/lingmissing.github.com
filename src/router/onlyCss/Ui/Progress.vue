<template>
  <span class="pinks-progress">
    <span class="current-progress" :style="{width:`${width}px`}" :title="percent"></span>
  </span>
</template>

<style>
  /* progress */
  .pinks-progress {
    display: block;
    width: 200px;
    height: 8px;
    border-radius: 5px;
    background: #ccc;
    position: relative;
  }
  .pinks-progress .current-progress {
    position: absolute;
    display: block;
    background: #f2849e;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
</style>

<script>
  export default {
    props: {
      percent: String
    },
    data () {
      return {
        width: 200 * this.percent
      }
    }
  }
</script>