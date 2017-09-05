<template>
  <div id="app">
    <case-nav @openNav="openNav($event)"/>
    <router-view></router-view>
    <case-menu @openNav="openNav($event)"/>
  </div>
</template>

<style>
/*::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar:hover {
  width: 10px;
  height: 10px;
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
}*/


  ::-webkit-scrollbar {
    height: 5px;
    width: 5px
  }
  
  ::-webkit-scrollbar-button {
    height: 0;
    width: 0
  }
  ::-webkit-scrollbar-thumb {
    background: #f2849e;
  }
  
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 1px 0 0 rgba(0, 0, 0, .1);
    background-color: rgba(0, 0, 0, .05)
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