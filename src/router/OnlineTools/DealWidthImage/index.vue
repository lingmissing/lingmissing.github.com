<template>
  <div id="deal-img" class="inner">
    <div class="deal-tab">
      <router-link to="/dealimg/compress">压缩图片</router-link>
      <router-link to="/dealimg/crop">裁剪图片</router-link>
      <span class="dashed"></span>
    </div>
    <div class="deal-content">
      <div class="upload-box">
        <button type="button" class="upload-btn">选择文件</button>
        <input type="file" class="upload-file" @change="getBase($event)">
        <span class="file-name">{{picInfo.fileName}}</span>
      </div>
      <router-view :picInfo="picInfo" @clearImageInfo="clearImageInfo"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picInfo: {
        fileName: '',
        src: '',
        width: '',
        height: ''
      }
    }
  },
  created () {
    this.$emit('setNav', '图像处理')
  },
  methods: {
    clearImageInfo() {
      this.picInfo = {}
    },
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
        _this.picInfo = {
          fileName: img.name,
          src: e.target.result,
          width: newImage.naturalWidth,
          height: newImage.naturalHeight
        }
      }
    }
  }
}
</script>

<style scoped>
  .deal-tab {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }
  .deal-tab a {
    padding: 5px 15px 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: dotted 1px rgba(88, 88, 88, .5);
  }
  .deal-tab .dashed {
    border-bottom: dotted 1px rgba(88, 88, 88, .5);
    flex: 1;
  }
  .deal-tab .router-link-active {
    color: #f2849e;
    border: dotted 1px rgba(88, 88, 88, .5);
    border-bottom: none;
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
    left: 120px;
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