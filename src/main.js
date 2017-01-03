import Vue from 'vue'
import App from './App'
import VueRouer from 'vue-router'
import VueResource from 'vue-resource'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'
import vueTap from 'v-tap'
import fastclick from 'fastclick'
import Vuex from 'vuex'

Vue.use(vueTap);
Vue.use(VueRouer)
Vue.use(VueResource)
Vue.use(Vuex)

const router = new VueRouer({
  routes: [{
    path: '/goods',
    component: goods
  }, {
    path: '/ratings',
    component: ratings
  }, {
    path: '/seller',
    component: seller
  }],
  linkActiveClass: 'active'
})

new Vue({
  router,
  template: '<App>',
  components: {
    App
  }
}).$mount('#app')

router.push('goods')
