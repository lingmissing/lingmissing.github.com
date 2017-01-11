import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

import Home from './Home'
import Archives from './Archives'
import About from './About'
import Resume from './Resume'

import Markdown from './onlineTools/Markdown'
import Reg from './onlineTools/Reg'
import Base from './onlineTools/Base'
import Draw from './onlineTools/Draw'

import DealWidthImage from './onlineTools/DealWidthImage'
import compressImage from './onlineTools//DealWidthImage/compress'
import cropImage from './onlineTools/DealWidthImage/crop'

import Doraemon from './onlyCss/Doraemon'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'Layout',
      path: '/',
      component: Layout,
      children: [
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
        },
        {
          name: 'DealWidthImage',
          path: '/dealimg',
          component: DealWidthImage,
          children: [
            { path: 'compress', component: compressImage },
            { path: 'crop', component: cropImage }
          ]
        }
      ]
    },
    {
      name: 'Resume',
      path: '/resume',
      component: Resume
    },
    {
      name: 'Markdown',
      path: '/markdown',
      component: Markdown
    }
  ]
})
