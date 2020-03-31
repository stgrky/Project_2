import login from "../components/login.vue";
import secure from "../components/secure.vue";
import new_patient from "../components/new_patient.vue";

export const routes= [
    {path: "/", component: login, name: "login"}, // getting error with this pathway!
    {path: "/secure", component: secure, name: "secure" },
    {path: "/new_patient", component: new_patient, name: "new_patient"}
];