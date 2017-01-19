<template>
  <select>
    <option :value="item.value" v-for="item in data">{{item.key}}</option>
  </select>
</template>

<script>
  export default {
    props: {
      data: Array
    }
  }
</script>