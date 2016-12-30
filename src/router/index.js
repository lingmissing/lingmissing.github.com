import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home'
import Archives from './Archives'
import About from './About'

import Markdown from './OnlineTools/Markdown'
import Resume from './OnlineTools/Resume'
import Reg from './OnlineTools/Reg'
import Base from './OnlineTools/Base'
import Draw from './OnlineTools/Draw'

import Doraemon from './OnlyCss/Doraemon'



// const Home = resolve => require(['./Home'], resolve)

// const Archives = resolve => require(['./Archives'], resolve)

// const About = resolve => require(['./About'], resolve)

// const Markdown = resolve => require(['./OnlineTools/Markdown'], resolve)

// const Resume = resolve => require(['./OnlineTools/Resume'], resolve)

// const Reg = resolve => require(['./OnlineTools/Reg'], resolve)

// const Base = resolve => require(['./OnlineTools/Base'], resolve)

// const Draw = resolve => require(['./OnlineTools/Draw'], resolve)

// const Doraemon = resolve => require(['./OnlyCss/Doraemon'], resolve)



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
