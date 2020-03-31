import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import {routes} from "./router/routes";

// Axios Import/ Use
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

 
// Bootstrap Import/ Use
import { BootstrapVue } from "bootstrap-vue";

// Bootstrap Import CSS Files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Install BootstrapVue
Vue.use(BootstrapVue);

// Routing
Vue.use (VueRouter);
const router = new VueRouter ({
  routes
});

Vue.config.productionTip = false;

// Render and Mount App
new Vue({
  render: h => h(App),
  router,
}).$mount("#app");




 