<template>
  <!-- Menu -->
  <nav id="menu">
    <div class="inner">
      <h2>Menu</h2>
      <ul>
        <li v-for="item in menuList">
          <a @click="changeRoute(item.link,item.outerLink)">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <span @click="$emit('openNav',false)" class="close"></span>
  </nav>
</template>

<script>
  import menuList from './config'
  export default {
    data() {
      return {
        menuList
      }
    },
    methods: {
      changeRoute: function(link,isOuter) {
        this.$emit('openNav',false)
        if(!isOuter) {
          this.$router.push(link)
          // this.$router.push({path: '/', query: {type: typecode}})
        }else {
          window.open(link)
        }
      }
    }
  }
</script>