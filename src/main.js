import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#index')
