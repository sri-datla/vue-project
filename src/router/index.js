import { createWebHistory, createRouter } from "vue-router";

import StudentLogin from "../components/StudentLogin.vue";
import StudentProfile from "../components/StudentProfile.vue";
const routes = [
    {
        path: "/",
        alias: "/login",
        name: "studentLogin",
        component: StudentLogin
    },
    {
        path:"/profile",
        name:"studentProfile",
        component: StudentProfile
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;