<template>
  <div id="reg-box" class="inner">
    <div id="reg">
      <textarea class="input-text" rows="3" placeholder="请输入..." v-model="text"></textarea>
      <div class="input-box">
        <div class="input-prepend">
          <span class="add-on">正则表达式</span>
          <input type="text" class="input-reg" v-model="reg.exe" placeholder="例如：[1-9]">
        </div>
        <label class="chk-reg">
          <input type="checkbox" v-model="reg.globalSearch" value="g">全局搜索
        </label>
        <label class="chk-reg">
          <input type="checkbox" v-model="reg.globalSearch" value="i">忽略大小写
        </label>
        <button type="button" class="submit" @click="getResult">测试匹配</button>
      </div>
      <div class="result-box">
        <textarea rows="3" readonly="readonly" class="show-result" placeholder="结果展示..." :value="result.length ? `共匹配次数：${result.length}\r\n匹配数据：${result}` : '暂无匹配'"></textarea>
      </div>
    </div>
    <div class="reg-list">
      <p>常用正则表达式</p>
      <ul>
        <li v-for="item in regList" @click="setReg(item.reg)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  @media (max-width: 700px) {
     #reg-box {
       display: block !important;
     }
     .reg-list {
       width: 100% !important;
     }
     .input-box {
       display: block !important;
     }
     .submit {
       float: right;
     }
  }
  #reg-box {
    display: flex;
    flex-direction: row;
    margin: 0 50px;
  }
  #reg {
    flex: 1;
  }
  .reg-list {
    width: 25%;
    padding-left: 20px;
  }
  .reg-list p {
    color: #ccc;
    font-size: 20px;
    font-weight: 500;
  }
  .reg-list ul li{
    list-style: none;
    cursor: pointer;
    font-size: 16px;
    margin: 5px 0;
    color: #ccc;
  }
  .reg-list ul li:hover,
  .chk-reg:hover {
    color: #f2849e;
  }
  .input-box {
    margin: 20px 0;
    /*padding: 10px;*/
    display: flex;
    flex-direction: row;
  }
  .input-prepend {
    flex: 1;
    display: flex;
    flex-direction: row;
    padding-right: 10px;
  }
  .add-on {
    width: 25%;
    line-height: 48px;
    background: #585858;
    text-align: center;
    color: #fff;
  }
  .input-reg {
    flex: 1;
    padding: 0 10px;
    border: 1px solid #585858;
    box-shadow: inset 0 0 0 0 #585858;
  }
  .input-reg:focus {
    border-bottom-color: #585858;
    box-shadow: inset 0 0 0 0 #585858
  }
  .submit {
    width: 150px;
    margin-left: 10px;
    /*border: 1px solid #585858;*/
  }
  .input-text {
    resize: none;
    border: 1px solid #585858;
    padding: 10px;
    box-shadow: inset 0 0 0 0 #ccc;
  }
  .show-result {
    resize: none;
    border: 1px solid transparent;
    padding: 10px;
    box-shadow: inset 0 0 0 0 #ccc;
  }
  .chk-reg {
    width: 100px;
    margin: 5px 0 ;
  }
  .chk-reg input {
    -webkit-appearance:checkbox;
    opacity: 1;
    display: inline-block;
    margin-right: 0;
  }
  
</style>

<script>
  import regList from './config'
  export default {
    data () {
      return {
        reg: {
          exe: '',
          globalSearch: ['g']
        },
        regList,
        text: '',
        result: ''
      }
    },
    created () {
      this.$emit('setNav', '正则表达式')
    },
    watch: {
      text () {
        this.result = ''
      }
    },
    methods: {
      getResult () {
        // const testReg = `/^${this.reg}$/`
        const { exe, globalSearch } = this.reg
        const matchReg = new RegExp(exe, globalSearch.join(''))
        const matchResult = this.text.match(matchReg)
        this.result = matchResult || []
      },
      setReg (reg) {
        this.reg.exe = reg
        this.getResult()
      }
    }
  }
</script>