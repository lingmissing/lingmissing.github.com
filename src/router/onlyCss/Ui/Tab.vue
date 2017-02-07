<template>
  <div class="pinks-tabs">
    <div class="pinks-tabs-tab" 
      v-for="item in tabs" 
      :class="{'active': active.indexOf(item) > -1, 'disabled': disabled.indexOf(item) > -1  }"
    >{{item}}</div>
  </div>
</template>

<style>
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
  export default {
    props: {
      tabs: Array,
      active: Array,
      disabled: Array
    }
  }
</script>