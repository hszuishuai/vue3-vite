import { createRouter, createWebHistory } from "vue-router";

const { VITE_PUBLIC_PATH }: ImportMetaEnv = import.meta.env;


const routes = [
    {
        path: "/",
        redirect: '/home',
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("../pages/home/index.vue")
    }
]

const router = createRouter({
    history: createWebHistory(VITE_PUBLIC_PATH),
    routes,

})
export default router;