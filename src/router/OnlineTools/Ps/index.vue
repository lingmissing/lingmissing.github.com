<template>
  <div class="inner">
    <div class="upload-box">
      <button type="button" class="upload-btn">选择文件</button>
      <input type="file" class="upload-file" @change="getBase($event)" >
      <img :src="image_base64" v-show="image_base64" class="show-pic">
      <span class="file-name">{{fileName}}</span>
    </div>
    <textarea rows="6" :value="image_base64"></textarea>
  </div>
</template>

<style>
  .upload-box {
    position: relative;
    height: 44px;
    margin-bottom: 10px;
  }
  .show-pic {
    width: 44px;
    height: 44px;
    position: absolute;
    left: 115px;
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
        image_base64: '',
        fileName: ''
      }
    },
    created() {
      this.$emit('setNav','')
    },
    methods: {
      getBase(e) {
        const _this = this
        _this.fileName = ''
        _this.image_base64 = ''
        const img = e.target.files[0]
        // 判断是否图片  
        if(!img){  
            return
        }  
        // 判断图片格式  
        if(!(img.type.indexOf('image') == 0 && img.type && /\.(?:jpg|png|gif)$/.test(img.name)) ){  
            alert('图片只能是jpg,gif,png')
            return
        }  
        const reader = new FileReader()
        reader.readAsDataURL(img)
        reader.onload = function(e){
          _this.fileName = img.name
          _this.image_base64 = e.target.result
        }
      }
    }
  }
</script>