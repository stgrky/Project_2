import Vue from "vue";
import VueRouter from "vue-router";
import LoginComponent from "../components/login.vue";
import SecureComponent from "../components/secure.vue";
import NewPatientComponent from "../components/new_patient";
import LogoutComponent from "../components/logout.vue";
import signUpComponent from "../components/signUp.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: "/new_patient",
            name: "new_patient",
            component: NewPatientComponent
        }, 
        {
            path: "/signUp",
            name: "signUp",
            component: signUpComponent
        },
        {
            path:"/logout",
            name: "logout",
            component: LogoutComponent
        }
    ]
});