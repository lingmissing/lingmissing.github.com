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
    <div class="tab-box ui-box">
      <l-tab :tabs="tabInfo.tabs" :disabled="tabInfo.disabled" :active="tabInfo.active"/>
    </div>
    <div class="tag-box ui-box">
      <l-tag value="标签"/>
      <l-tag value="标签2" type="special"/>
    </div>
    <div class="progress-box ui-box">
      <l-progress percent="0.8"/>
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
        <div class="select-wrapper">
          <l-select :data="select"/>
        </div>
      </form>
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
  .form-box {
    width: 50%;
    margin: 20px auto;
  }
  .table-wrapper {
    flex: 1;
    margin: 0 5px;
  }
  .ui-box {
    margin-bottom: 20px;
  }

</style>
<script>
  import Table from './Table'
  import Select from './Select'
  import Tag from './Tag'
  import Progress from './Progress'
  import Pagination from './Pagination'
  import Tab from './Tab'
  export default {
    components: {
      'l-table': Table,
      'l-select': Select,
      'l-tag': Tag,
      'l-progress': Progress,
      'l-pagination': Pagination,
      'l-tab': Tab
    },
    data () {
      return {
        tabInfo: {
          tabs: ['item1', 'item2', 'item3'],
          active: ['item1'],
          disabled: ['item2']
        },
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