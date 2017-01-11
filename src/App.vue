<template>
  <div id="app">
    <case-nav @openNav="openNav($event)"/>
    <router-view></router-view>
    <case-menu @openNav="openNav($event)"/>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb:horizontal {
  border-bottom: 1px solid #f2849e;
} 
::-webkit-scrollbar-thumb:vertical {
  border-right: 1px solid #f2849e;
} 
::-webkit-scrollbar-thumb {
  background: transparent;
  min-height: 10px;
  background-clip: content-box;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>

<script>
  import Menu from 'components/Menu'
  import Nav from 'components/Nav'

  export default {
    components: {
      'case-menu': Menu,
      'case-nav': Nav
    },
    methods: {
      openNav (status) {
        const body = document.querySelector('body')
        if (status) {
          body.setAttribute('class', 'is-menu-visible')
        } else {
          body.removeAttribute('class')
        }
      }
    }
  }
</script>