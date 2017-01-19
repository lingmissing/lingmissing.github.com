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
      <div class="table-wrapper">
        <l-table :head="table.head" :body="table.body"/>
      </div>
      <div class="table-wrapper">
        <l-table type="alt" :head="table.head" :body="table.body"/>
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
        <l-select :data="select"/>
      </form>
      <div class="select-wrapper">
        <l-select :data="select"/>
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
      <l-tag value="tags"/>
      <l-tag value="tags" type="special"/>
    </div>
    <div class="progress-box ui-box">
      <l-progress percent="0.8"/>
    </div>
    <div class="pagination-box ui-box">
      <l-pagination :total="4" current="1"/>
    </div>
  </div>
</template>

<style>
  .table-box {
    display: flex;
    flex-direction: row;
  }
  .table-wrapper {
    flex: 1;
    margin: 0 5px;
  }
  
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
</style>
<script>
  import Table from './Table'
  import Select from './Select'
  import Tag from './Tag'
  import Progress from './Progress'
  import Pagination from './Pagination'
  export default {
    components: {
      'l-table': Table,
      'l-select': Select,
      'l-tag': Tag,
      'l-progress': Progress,
      'l-pagination': Pagination
    },
    data () {
      return {
        checked: false,
        picked: false,
        select: [{
          value: '111',
          key: '1111'
        }],
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