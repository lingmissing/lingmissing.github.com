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
  background: url('../images/elaine.png') no-repeat;
  background-size: 50px 50px;
}
</style>


<script>
  import Footer from '../components/Footer'
  import Header from '../components/Header'
  import Menu from '../components/Menu'

  export default {
    data () {
      return {
        navigator: ''
      }
    },
    components: {
      'case-footer': Footer,
      'case-header': Header,
      'case-menu': Menu
    },
    methods: {
      openNav (status) {
        const body = document.querySelector('body')
        if (status) {
          body.setAttribute('class', 'is-menu-visible')
        } else {
          body.removeAttribute('class')
        }
      },
      setNav (name) {
        this.navigator = name
      }
    }
  }
</script>
