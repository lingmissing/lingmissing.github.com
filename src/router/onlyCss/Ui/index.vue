<template>
  <div class="inner">
    <div class="btn-box ui-box">
      <button class="icon fa-search">搜索</button>
      <button type="text" class="pinks-btn">按钮</button>
      <button type="text" class="pinks-btn small">按钮</button>
      <button type="text" class="pinks-btn middle">按钮</button>
      <button type="text" class="pinks-btn big">按钮</button>
      <button type="text" class="pinks-btn special">按钮</button>
      <button type="text" class="pinks-btn disabled">按钮</button>
      <br><br>
      <button type="text" class="pinks-btn fit">按钮</button>
    </div>
    <div class="table-box ui-box">
      <table>
        <thead>
          <tr>
            <th v-for="item in table.head">{{item}}</th>
          </tr>
        </thead>
        <tbody>  
          <tr v-for="row in table.body">
            <td v-for="item in row">{{item}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-box ui-box">
      <div class="table-wrapper">
              <table class="alt">
        <thead>
          <tr>
            <th v-for="item in table.head">{{item}}</th>
          </tr>
        </thead>
        <tbody>  
          <tr v-for="row in table.body">
            <td v-for="item in row">{{item}}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>

    <div class="form-box ui-box">
      <form class="">
        <input type="checkbox" id="one" value="One" v-model="checked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>

        <input type="text" name="" value="">
        <input type="text" class="half">
        <input type="text" disabled="disabled" value="jjjjjj">
        <textarea rows="4" value="this is textarea"></textarea>
        <select>
          <option value="ss">222</option>
          <option value="ss">222</option>
          <option value="ss">222</option>
        </select>
      </form>
      <div class="select-wrapper">
        <select>
          <option value="ss">222</option>
          <option value="ss">222</option>
          <option value="ss">222</option>
        </select>
      </div>
    </div>
    <div class="tab-box ui-box">
      <div class="pinks-tabs">
        <div class="pinks-tabs-tab disabled">1item</div>
        <div class="pinks-tabs-tab active">2item</div>
        <div class="pinks-tabs-tab">3item</div>
      </div>
    </div>
    <div class="tag-box ui-box">
      <span class="pinks-tag">tags</span>
      <span class="pinks-tag special">tags</span>
    </div>
    <div class="progress-box ui-box">
      <span class="pinks-progress">
        <span class="current-progress" style="width:160px;" title="0.8"></span>
      </span>
    </div>
    <div class="pagination-box ui-box">
      <div class="pagination-container">
        <div class="pagination">
          <a href=""><i class="icon fa-caret-left"></i></a>
        </div>
        <div class="pagination">
          <a href="">1</a>
        </div>
        <div class="pagination">
          <a href="">2</a>
        </div>
        <div class="pagination">
          <a href="">3</a>
        </div>
        <div class="pagination">
          <a href=""><i class="icon fa-caret-right"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .ui-box {
    margin-bottom: 20px;
  }
  /* tags */
  .pinks-tabs {
    border-bottom: 1px solid #585858;
    display: flex;
    flex-direction: row;
  }
  .pinks-tabs .pinks-tabs-tab {
    padding: 8px 20px;
    margin-right: 24px;
    cursor: pointer;
    margin-bottom: -1px;
    border-bottom: 2px solid transparent;
  }
  .pinks-tabs .pinks-tabs-tab:hover {
    color: #f2849e;
  }
  .pinks-tabs .pinks-tabs-tab.active {
    color: #f2849e;
    border-bottom: 2px solid #f2849e;
  }
  .pinks-tabs .pinks-tabs-tab.disabled {
    color: #ccc;
    cursor: not-allowed;
  }
  .pinks-tag {
    display: inline-block;
    padding: 5px 10px;
    height: 30px;
    border: 2px solid #585858;
    line-height: 20px;
    text-align: center;
    border-radius: 10px;
    cursor: default
  }
  .pinks-tag:hover {
    color: #f2849e;
    border-color: #f2849e;
  }
  .pinks-tag.special {
    background: #585858;
    border-color: #585858;
    color: #fff;
  }
  .pinks-tag.special:hover {
    background: #f2849e;
    border-color: #f2849e;
  }
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
    data () {
      return {
        checked: false,
        picked: false,
        table: {
          head: ['head1', 'head2', 'head3', 'head4', 'head5'],
          body: [
            ['body1', 'body2', 'body3', 'body4', 'body5'],
            ['body1', 'body2', 'body3', 'body4', 'body5'],
            ['body1', 'body2', 'body3', 'body4', 'body5']
          ]
        }
      }
    },
    created () {
      this.$emit('setNav', '主题风格')
    }
  }
</script>