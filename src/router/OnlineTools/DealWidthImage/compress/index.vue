<template>
  <div class="compress-box" v-show="picInfo.src">
    <img :src="picInfo.src" width="500" :height="showHeight" class="prev">
    <div class="compress-input">
      <span>{{quality}}%</span>
      <input type="range" v-model="quality" @change="compress()">
    </div>
    <img :src="compressLink" width="500" :height="showHeight" class="next">
  </div>
</template>

<style>
  .compress-box {
    display: flex;
    flex-direction: row;
  }
  .compress-input span {
    display: block;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .compress-input input{
    transform: rotate(-90deg) translateX(-50%)
  }
</style>

<script>
  export default {
    data () {
      return {
        quality: 100,
        compressLink: ''
      }
    },
    props: {
      picInfo: Object
    },
    computed: {
      showHeight () {
        return 500 / this.picInfo.width * this.picInfo.height
      }
    },
    destroyed () {
      this.$emit('clearImageInfo')
    },
    watch: {
      picInfo: {
        deep: true,
        handler: function (newVal, oldVal) {
          this.compressLink = newVal.src
        }
      }
    },
    methods: {
      compress () {
        const sourceImgObj = document.querySelector('.prev')
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')

        canvas.width = this.picInfo.width
        canvas.height = this.picInfo.height

        context.drawImage(sourceImgObj, 0, 0, this.picInfo.width, this.picInfo.height, 0, 0, this.picInfo.width, this.picInfo.height)
        const newImageData = canvas.toDataURL('image/jpeg', this.quality / 100)
        this.compressLink = newImageData
      }
    }
  }
</script>