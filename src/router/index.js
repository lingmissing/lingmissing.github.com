import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Archives from './Archives'
import About from './About'
import Markdown from './Tools/Markdown'
import Resume from './Tools/Resume'
import Reg from './Tools/Reg'
import Base from './Tools/Base'
import Draw from './Tools/Draw'
import Doraemon from './OnlyCss/Doraemon'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Archives',
      path: '/archives',
      component: Archives
    },
    {
      name: 'About',
      path: '/about',
      component: About
    },
    {
      name: 'Markdown',
      path: '/markdown',
      component: Markdown
    },
    {
      name: 'Resume',
      path: '/resume',
      component: Resume
    },
    {
      name: 'Reg',
      path: '/reg',
      component: Reg
    },
    {
      name: 'Base',
      path: '/base',
      component: Base
    },
    {
      name: 'Draw',
      path: '/draw',
      component: Draw
    },
    {
      name: 'Doraemon',
      path: '/doraemon',
      component: Doraemon
    }
  ]
})
