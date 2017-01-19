<template>
  <div class="pagination-container">
    <div class="pagination">
      <a href=""><i class="icon fa-caret-left"></i></a>
    </div>
    <div class="pagination" :class="{'active': current == n }" v-for="n in total">
      <a href="">{{n}}</a>
    </div>
    <div class="pagination">
      <a href=""><i class="icon fa-caret-right"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      total: Number,
      current: String
    }
  }
</script>