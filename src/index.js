import Vue from 'vue'
import App from './App'
import router from './router'
import './css/style.css'
import './css/font.css'

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')

export { app }
