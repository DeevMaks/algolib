import './js/common'
import './assets/css/main.css'
import './assets/scss/main.scss'

window.Vue = require('vue')

Vue.component('bubble-sort', require('./components/pages/sort/BubbleSort.vue').default)
import store from './store'

const app = new Vue({
  el: '#app',
  store
})
