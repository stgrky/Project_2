import login from './components/login.vue';
import secure from './components/secure.vue';

export default [
    {path: '/', component: login, name: "login"},
    {path: '/secure', component: secure, name: "secure" }

]