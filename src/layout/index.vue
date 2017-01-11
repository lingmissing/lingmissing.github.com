<template>
 <div id="wrapper">
    <case-header :navigator="navigator"/>
    <div id="main">
      <router-view @setNav="setNav($event)"></router-view>
    </div>
    <case-footer/>
  </div>
</template>

<style>
#wrapper {
  background: url('../images/elaine.png') no-repeat;
  background-size: 50px 50px;
}
</style>


<script>
  import Footer from '../components/Footer'
  import Header from '../components/Header'

  export default {
    data () {
      return {
        navigator: ''
      }
    },
    components: {
      'case-footer': Footer,
      'case-header': Header
    },
    methods: {
      setNav (name) {
        this.navigator = name
      }
    }
  }
</script>
