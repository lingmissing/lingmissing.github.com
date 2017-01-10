<template>
  <center class="crop-box" v-show="picInfo.src">
    <div class="jcrop-holder" :style="picSize">
      <!--line -->
      <div :style="lineStyle">
        <div class="aa">
          <img :src="picInfo.src" :style="cropImgStyle">
          <!-- 四周虚线-->
          <div class="jcrop-hline top-dash"></div>
          <div class="jcrop-hline bottom-dash"></div>
          <div class="jcrop-vline left-dash"></div>
          <div class="jcrop-vline right-dash"></div>
          <div 
          class="jcrop-tracker" 
          @mousemove="drag($event)"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)" 
          ></div>
        </div>
        <!--可拖动的-->
        <div class="bb">
          <div 
          class="line-top"
          @mousemove="dragLine($event,'top')"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)" 
          ></div>


          <div 
          class="line-bottom"
          @mousemove="dragLine($event,'bottom')"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          ></div>

          <div 
          class="line-left"
          @mousemove="dragLine($event,'left')"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          ></div>

          <div 
          class="line-right"
          @mousemove="dragLine($event,'right')"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          ></div>

          <div 
          class="jcrop-handle right-middle"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          @mousemove="dragLine($event,'right')"
          ></div>

          <div 
          class="jcrop-handle left-middle"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          @mousemove="dragLine($event,'left')"
          ></div>

          <div 
          class="jcrop-handle top-left"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          @mousemove="dragLine($event,'topLeft')"
          ></div>

          <div 
          class="jcrop-handle top-middle"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          @mousemove="dragLine($event,'top')"
          ></div>

          <div 
          class="jcrop-handle top-right"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          @mousemove="dragLine($event,'topRight')"
          ></div>

          <div 
          class="jcrop-handle bottom-left"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          @mousemove="dragLine($event,'bottomLeft')"
          ></div>

          <div 
          class="jcrop-handle bottom-middle"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          @mousemove="dragLine($event,'bottom')"
          ></div>

          <div 
          class="jcrop-handle bottom-right"
          @mouseup="toggleMove(false)"
          @mousedown="toggleMove(true)"
          @mousemove="dragLine($event,'bottomRight')"
          ></div>
        </div>
      </div>

      <div class="jcrop-tracker" style="position: absolute; top: -8px; left: -8px; z-index: 290; cursor: crosshair;" :style="picSize"></div>
      <img :src="picInfo.src" class="big-img" :style="picSize">
    </div>

    <div class="input-box">
      <div class="input-item">
        <span class="input-lable">X1 </span>
        <input type="text" class="input-text" v-model="left">
      </div>

      <div class="input-item">
        <span class="input-lable">X2 </span>
        <input type="text" class="input-text" v-model="right">
      </div>

      <div class="input-item">
        <span class="input-lable">Y1 </span>
        <input type="text" class="input-text" v-model="top">
      </div>

      <div class="input-item">
        <span class="input-lable">Y2 </span>
        <input type="text" class="input-text" v-model="bottom">
      </div>

      <div class="input-item">
        <span class="input-lable">宽 </span>
        <input type="text"class="input-text" v-model="width">
      </div>

      <div class="input-item">
        <span class="input-lable">高 </span>
        <input type="text"class="input-text" v-model="height">
      </div>

      <div class="input-item">
        <button type="button" @click="cropImage()" class="crop-btn">裁剪</button>
      </div>
    </div>
    <br>
    <img :src="cropSrc" :width="width" :height="height" v-show="cropSrc">
  </center>
</template>

<style>
  .crop-btn {
    margin: 0 auto;
    height: 44px;
  }
  .input-box {
    display: flex;
    flex-flow: row;
  }
  .input-item {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .input-lable {
    width: 40px;
    line-height: 48px;
    text-align: center;
    font-weight: 800
  }
  .input-text {
    flex: 1;
  }
  .top-dash {
    top:0
  }
  .bottom-dash {
    bottom:0
  }
  .left-dash {
    left:0
  }
  .right-dash {
    right: 0
  }
  .big-img {
    position: absolute;
    opacity: 0.4;
  }
  .line-top {
    cursor: n-resize; 
    position: absolute; 
    z-index: 370;
    top:-3px;
    left:-3px; 
    width: 100%; 
    height: 9px;
  }
  .line-bottom {
    cursor: s-resize; 
    position: absolute; 
    z-index: 371;
    left:-3px;
    bottom:-3px; 
    width: 100%; 
    height: 9px;
  }
  .line-left {
    cursor: w-resize; 
    position: absolute; 
    z-index: 372; 
    width: 9px; 
    height: 100%;
    top:-3px;
    left:-3px;
  }
  .line-right {
    cursor: e-resize; 
    position: absolute; 
    z-index: 373; 
    width: 9px; 
    height: 100%;
    bottom:-3px;
    right:-3px
  }
  .right-middle {
    cursor: e-resize; 
    position: absolute;
    z-index: 376;  
    opacity: 0.5;
    top:50%;
    right: -3px
  }
  .left-middle {
    cursor: w-resize; 
    position: absolute; 
    z-index: 377;  
    opacity: 0.5;
    top:50%;
    left: -3px
  }
  .top-left {
    cursor: nw-resize; 
    position: absolute; 
    z-index: 379; 
    opacity: 0.5;
    top:-3px;
    left: -3px
  }
  .top-right {
    cursor: ne-resize; 
    position: absolute; 
    z-index: 380;  
    opacity: 0.5;
    top:-3px;
    right: -3px
  }
  .bottom-left {
    cursor: sw-resize; 
    position: absolute; 
    z-index: 378;  
    opacity: 0.5;
    bottom:-3px;
    left: -3px
  }
  .bottom-middle {
    cursor: s-resize; 
    position: absolute; 
    z-index: 375; 
    opacity: 0.5;
    bottom: -3px;
    left:50%;
  }
  .bottom-right {
    cursor: se-resize; 
    position: absolute; 
    z-index: 381;  
    opacity: 0.5;
    bottom:-3px;
    right: -3px
  }

  .top-middle {
    cursor: n-resize; 
    position: absolute;
    z-index: 374; 
    opacity: 0.5;
    top:-3px;
    left: 50%;
    bottom:-3px;
    left: 50%
  }
  .jcrop-handle {
    font-size: 1px;
    width: 6px;
    height: 6px;
    border: 1px #eee solid;
    background-color: #333;
  }
  .jcrop-vline, .jcrop-hline {
    position: absolute; 
    opacity: 0.4;
    font-size: 0;
    background: white url(http://cdn.atool.org/res/imgcrop_files/Jcrop.gif) top left repeat;
  }

  .jcrop-holder { 
    text-align: left;
    position: relative; 
    background-color: black;
    margin-bottom: 10px;
  }

  .jcrop-vline { 
    height: 100%; 
    width: 1px; 
  }
  .jcrop-hline { 
    width: 100%; 
    height: 1px; 
  }
  .jcrop-handle {
    font-size: 1px;
    width: 6px;
    height: 6px;
    border: 1px #eee solid;
    background-color: #333;
  }
  .jcrop-tracker { 
    width: 100%; 
    height: 100%; 
    cursor: move; 
    position: absolute; 
    z-index: 360;
  }
  .aa {
    width: 100%; 
    height: 100%; 
    z-index: 310; 
    position: absolute; 
    overflow: hidden;
  }
  .bb {
    width: 100%; 
    height: 100%; 
    z-index: 320; 
    display: block;
  }

</style>

<script>
  export default {
    data () {
      return {
        canMove: false,
        cropSrc: '',
        left: 0,
        top: 0,
        right: 100,
        bottom: 100
      }
    },
    props: {
      picInfo: Object
    },
    computed: {
      width () {
        return this.right - this.left
      },
      height () {
        return this.bottom - this.top
      },
      lineStyle () {
        return {
          position: 'absolute',
          zIndex: 300,
          width: `${this.right - this.left}px`,
          height: `${this.bottom - this.top}px`,
          top: `${this.top}px`,
          left: `${this.left}px`
        }
      },
      cropImgStyle () {
        return {
          position: 'absolute',
          width: `${this.picInfo.width}px`,
          height: `${this.picInfo.height}px`,
          top: `-${this.top}px`,
          left: `-${this.left}px`
        }
      },
      picSize () {
        return {
          width: `${this.picInfo.width}px`,
          height: `${this.picInfo.height}px`
        }
      }
    },
    destroyed () {
      this.$emit('clearImageInfo')
    },
    methods: {
      toggleMove (type) {
        this.canMove = type
      },
      dragLine (e, type) {
        if (this.canMove) {
          this.cropSrc = ''
          const jcropHolder = document.querySelector('.jcrop-holder')
          const y = e.clientY + document.body.scrollTop - jcropHolder.offsetTop
          const x = e.clientX - jcropHolder.offsetLeft
          switch (type) {
            case 'top':
              this.top = y || 0
              break
            case 'left':
              this.left = x || 0
              break
            case 'bottom':
              this.bottom = y <= this.picInfo.height ? y : this.picInfo.height
              break
            case 'right':
              this.right = x <= this.picInfo.width ? x : this.picInfo.width
              break
            case 'topLeft':
              this.top = y || 0
              this.left = x || 0
              break
            case 'topRight':
              this.top = y || 0
              this.right = x <= this.picInfo.width ? x : this.picInfo.width
              break
            case 'bottomLeft':
              this.bottom = y <= this.picInfo.height ? y : this.picInfo.height
              this.left = x || 0
              break
            case 'bottomRight':
              this.bottom = y <= this.picInfo.height ? y : this.picInfo.height
              this.right = x <= this.picInfo.width ? x : this.picInfo.width
              break
          }
        }
      },
      drag (e) {
        if (this.canMove) {
          const jcropHolder = document.querySelector('.jcrop-holder')
          const x = e.clientX - jcropHolder.offsetLeft
          const y = e.clientY + document.body.scrollTop - jcropHolder.offsetTop
          console.log(x, y)
          const { picInfo, width, height } = this
          const left = x - width / 2
          const right = x + width / 2
          const top = y - height / 2
          const bottom = y + height / 2

          this.cropSrc = ''

          this.left = left >= 0 ? (right > picInfo.width ? picInfo.width - width : left) : 0
          this.right = left >= 0 ? (right > picInfo.width ? picInfo.width : right) : width
          this.top = top >= 0 ? (bottom > picInfo.height ? picInfo.height - height : top) : 0
          this.bottom = top >= 0 ? (bottom > picInfo.height ? picInfo.height : bottom) : height
        }
      },
      cropImage () {
        const { width, height, left, top } = this
        const c = document.createElement('canvas')
        const img = document.querySelector('.big-img')
        const ctx = c.getContext('2d')
        c.width = width
        c.height = height

        ctx.drawImage(img, left, top, width, height, 0, 0, width, height)
        this.cropSrc = c.toDataURL('image/jpeg')
      }
    }
  }
</script>