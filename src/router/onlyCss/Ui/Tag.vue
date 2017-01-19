<template>
  <span class="pinks-tag" :class="{'special': type == 'special'}">{{value}}</span>
</template>

<style>
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
</style>

<script>
  export default {
    props: {
      type: String,
      value: String
    }
  }
</script>