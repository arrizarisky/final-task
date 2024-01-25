import Vue from 'vue'
import App from './App.vue'
import 'boxicons'
import Router from 'vue-router'
import ManDisplay from './components/manDisplay.vue'
import WomanDisplay from './components/womanDisplay.vue'
import axios from 'axios'

Vue.use(Router)
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://fakestoreapi.com'

export default new Router({
 routes: [
    {
      path: '/',
      redirect: '/man'
    },
    {
      path: '/man',
      component: ManDisplay
    },
    {
      path: '/woman',
      component: WomanDisplay
    }
 ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')


