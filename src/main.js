import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from 'routes'

// Bootstrap Install
import { BootstrapVue } from 'bootstrap-vue'

// Bootstrap Install CSS Files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

// Routing
Vue.use ('VueRouter');
const router = new VueRouter ({
  routes: Routes
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})// .$mount('#app')
 