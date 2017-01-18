<template>
  <div class="inner">
    <div class="cal-box">
      <div class="cal-top">
        <span class="cal-result">{{calResult}}</span>
        <input type="text" v-model="calInput" align="right" class="cal-input">
      </div>
      <div class="cal-inner">
        <button 
          type="button"
          @click="setNum(item)"
          class="cal-btn small"
          :class="{special: item !== '='}"
          v-for="item in buttons"
        >{{item}}</button>
      </div>
    </div>
  </div>
</template>

<style>
  .cal-inner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .cal-btn {
    width: 80px;
    margin: 5px;
  }
  .cal-box {
    margin: 0 auto;
    width: 360px;
  }
  .cal-result {
    display: block;
    /*text-align: right;*/
  }
  .cal-top {
    margin: 0 5px;
  }
</style>

<script>
  export default {
    data () {
      return {
        calResult: '',
        clickInfo: [],
        buttons: [
          '(', ')', '%', 'CE',
          '7', '8', '9', '/',
          '4', '5', '6', '*',
          '1', '2', '3', '-',
          '0', '.', '=', '+'
        ]
      }
    },
    created () {
      this.$emit('setNav', '在线计算器')
    },
    computed: {
      calInput () {
        return this.clickInfo.join('')
      }
    },
    methods: {
      setNum (item) {
        switch (item) {
          case '=':
            this.calResult = this.calInput
            /* eslint-disable */
            const result = eval(this.calInput)
            /* eslint-disable */
            console.log(result)
            this.clickInfo = [result]
            break
          case 'CE':
            this.calResult = ''
            this.clickInfo = this.clickInfo.slice(0, this.clickInfo.length - 1)
            break
          default:
            this.clickInfo.push(item)
        }
      }
    }
  }
</script>