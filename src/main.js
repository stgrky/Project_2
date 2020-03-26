import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router/routes'
 
// Bootstrap Install
import { BootstrapVue } from 'bootstrap-vue'

// Bootstrap Install CSS Files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

// Routing stuff
Vue.use (VueRouter);
const router = new VueRouter ({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
 