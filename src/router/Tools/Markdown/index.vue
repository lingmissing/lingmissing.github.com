<template>
  <div id="editor">
    <textarea v-model="input" v-show="toggleEdit"></textarea>
    <div class="show-md" v-html="compiledMarkdown"></div>
    <span class="toggle-screen" @click="toggleEditFun"></span>
  </div>
</template>

<style scoped>

@media (max-width:700px) {
  #editor {
    display: block !important;
  }
  textarea, .show-md {
    height: 50%;
  }
}
#editor {
  color: #34495e;
  font-family: 'Monaco', courier, monospace;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 10
}
textarea, .show-md {
  flex: 1;
  overflow-y: auto;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

.show-md code {
  font-family: consolas,Menlo,"PingFang SC","Microsoft YaHei",monospace;
  background: #f7f7f7;
  font-size: 13px;
  line-height: 1.6;
  color: #4d4d4c;
}
.show-md pre {
  background: #f7f7f7;
  padding: 10px;
}
.show-md p {
  font-size: 14px;
  line-height: 18px;
}

.toggle-screen {
  position: fixed;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  display: block;
  width: 20px;
  height: 20px;
  opacity: 0.1;
  background-image: url('../../../images/icon.png');
  background-size: 20px 20px;
}
.toggle-screen:hover {
  opacity: 0.6;
}
</style>

<script>
  import marked from 'marked'

  export default {
    data() {
      return {
        input: localStorage.getItem('input') || '# Have a nice writing',
        toggleEdit: true
      }
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.input, { sanitize: true })
      }
    },
    methods: {
      toggleEditFun: function () {
        this.toggleEdit = !this.toggleEdit
      }
    },
    watch: {
      input: function(newInput) {
        console.log(newInput);
        localStorage.setItem('input',newInput)
      }
    }
  }
</script>