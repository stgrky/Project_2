import Vue from 'vue'
import App from './App.vue'

// Bootstrap Install
import { BootstrapVue } from 'bootstrap-vue'

// Bootstrap Install CSS Files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
 