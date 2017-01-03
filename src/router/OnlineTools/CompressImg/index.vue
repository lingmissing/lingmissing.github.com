<template>
  <div class="inner">
    <div class="upload-box">
      <button type="button" class="upload-btn">选择文件</button>
      <input type="file" class="upload-file" @change="getBase($event)">
      <span class="file-name">{{imageInfo.fileName}}</span>
    </div>
    <div class="pic-box" v-show="imageInfo.src">
      <img :src="imageInfo.src" width="500" :height="showHeight" class="prev">
      <div class="compress-input">
        <span>{{quality}}%</span>
        <input type="range" v-model="quality" @change="compress()">
      </div>
      <img :src="compressLink" width="500" :height="showHeight" class="next">
    </div>
  </div>
</template>

<style>
  .pic-box {
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
  .upload-box {
    position: relative;
    height: 44px;
    margin-bottom: 10px;
  }
  .upload-box:hover button{
    color: #f2849e !important;
    box-shadow: inset 0 0 0 2px #f2849e;
  }
  .upload-box .file-name {
    position: absolute;
    left: 164px;
    display: block;
    height: 44px;
    line-height: 44px;
  }
  .upload-box .upload-file {
    position: absolute;
    width: 106px;
    height: 44px;
    opacity: 0;
  }
  .upload-box .upload-btn {
    position: absolute;
    width: 106px;
    height: 44px;
  }
</style>

<script>
  export default {
    data() {
      return {
        imageInfo: {
          fileName: '',
          src: '',
          width: '',
          height: ''
        },
        quality: 100,
        compressLink: '',
        cropImage: ''
      }
    },
    created() {
      this.$emit('setNav', '图像处理')
    },
    computed: {
      showHeight() {
        return 500 / this.imageInfo.width * this.imageInfo.height
      }
    },
    methods: {
      getBase(e) {
        const _this = this
        const img = e.target.files[0]
        // 判断是否图片  
        if (!img) {
          return
        }
        // 判断图片格式  
        if (!(img.type.indexOf('image') == 0 && img.type && /\.(?:jpg|png|gif)$/.test(img.name))) {
          alert('图片只能是jpg,gif,png')
          return
        }
        const reader = new FileReader()
        reader.readAsDataURL(img)
        reader.onload = function (e) {
          var newImage = new Image()
          newImage.src = e.target.result

          _this.imageInfo = {
            fileName: img.name,
            src: e.target.result,
            width: newImage.naturalWidth,
            height: newImage.naturalHeight
          }
          _this.compressLink = e.target.result
        }
      },
      compress() {
        const source_img_obj = document.querySelector('.prev')
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')

        canvas.width = this.imageInfo.width
        canvas.height = this.imageInfo.height

        context.drawImage(source_img_obj, 0, 0, this.imageInfo.width, this.imageInfo.height, 0, 0, this.imageInfo.width, this.imageInfo.height)
        const newImageData = canvas.toDataURL('image/jpeg', this.quality/100 )
        this.compressLink = newImageData
      },
      cropImage(targetCanvas, x, y, width, height) {
        var targetctx = targetCanvas.getContext('2d')
        var targetctxImageData = targetctx.getImageData(x, y, width, height); // sx, sy, sWidth, sHeight

        var c = document.createElement('canvas')
        var ctx = c.getContext('2d')

        c.width = width;
        c.height = height;

        ctx.rect(0, 0, width, height)
        ctx.fillStyle = '#fff'
        ctx.fill()
        ctx.putImageData(targetctxImageData, 0, 0) // imageData, dx, dy

        // document.getElementById('source2').src = c.toDataURL('image/jpeg', 0.92);
        // document.getElementById('source2').style.display = 'initial';
        _this.cropImage = c.toDataURL('image/jpeg')
      }
    }
  }
</script>