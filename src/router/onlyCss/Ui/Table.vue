<template>
  <table :class="{'alt': type == 'alt'}">
    <thead>
      <tr>
        <th v-for="item in head">{{item}}</th>
      </tr>
    </thead>
    <tbody>  
      <tr v-for="rows in body">
        <td v-for="item in rows">{{item}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      head: Array,
      body: Array,
      type: String
    }
  }
</script>