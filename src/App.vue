<template>
  <div id="app">
    <div id="wrapper">
      <case-header @openNav="openNav($event)" :navigator="navigator"/>
      <div id="main">
        <router-view @setNav="setNav($event)"></router-view>
      </div>
      <case-footer/>
    </div>
    <case-menu @openNav="openNav($event)"/>
  </div>
</template>

<style>
#wrapper {
  background: url('images/elaine.png') no-repeat;
  background-size: 50px 50px;
}
</style>


<script>

  import Menu from 'components/Menu'
  import Footer from 'components/Footer'
  import Header from 'components/Header'

  export default {
    data() {
      return {
        navigator: ''
      }
    },
    components: {
      'case-menu': Menu,
      'case-footer': Footer,
      'case-header': Header
    },
    methods: {
      openNav: function(status) {
        const body = document.querySelector('body')
        if(status) {
          body.setAttribute('class','is-menu-visible')
        }else {
          body.removeAttribute('class')
        }
      },
      setNav: function(name) {
        this.navigator = name
      }
    }
  }
</script>
