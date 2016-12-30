<template>
  <div id="app">
    <div id="wrapper">
      <case-header @openNav="openNav($event)" :navigator="navigator"/>
      <div id="main">
        <router-view @setNav="setNav($event)"></router-view>
      </div>
      <case-footer/>
    </div>
    <case-side @openNav="openNav($event)"/>
  </div>
</template>


<script>

  import Aside from 'components/Aside'
  import Footer from 'components/Footer'
  import Header from 'components/Header'

  export default {
    data() {
      return {
        navigator: ''
      }
    },
    components: {
      'case-side': Aside,
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
