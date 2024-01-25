import Vue from 'vue'
import Router from 'vue-router'
import ManDisplay from './components/manDisplay.vue'
import WomanDisplay from './components/womanDisplay.vue'

Vue.use(Router)

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