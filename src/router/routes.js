import login from "../components/login.vue";
import secure from "../components/secure.vue";
import new_patient from "../components/new_patient.vue";
import logout from "../components/logout.vue";
import signUp from "../components/signUp.vue";

export const routes= [
    {path: "/", component: login, name: "login"},
    {path: "/secure", component: secure, name: "secure" },
    {path: "/new_patient", component: new_patient, name: "new_patient"},
    {path: "/signUp", component: signUp, name: "signUp"},
    {path: "/logout", component: logout, name: "logout"}
];