import { createRouter, createWebHistory } from "vue-router";

const { VITE_PUBLIC_PATH }: ImportMetaEnv = import.meta.env;
import { ArticleApi } from '@/api';
import store, { useUIStore } from "@/store"



const routes = [
    {
        path: "/",
        name: "index",
        props: true,
        component: () => import("@/pages/home/index.vue"),
        children: [
            {
                path: "/",
                name: "default",
                meta: {
                    title: '首页'
                },
                component: () => import("@/pages/front/recommend/index.vue")
            },
        ]
    },
    {
        path: '/course',
        name: "Course",
        meta: {
            title: '课程'
        },
        component: () => import("@/pages/course/index.vue"),
    },
    {
        path: "/home/:id",
        name: "Home",
        component: () => import("../pages/home/index.vue"),
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(VITE_PUBLIC_PATH),
    routes,

})


/**
 * 判断当前路由是否存在
 * @param to
 * @returns {boolean}
 */
function hasRoute(to) {
    let find = router.getRoutes().find(item => item.name === to.name);
    return !!find;
}

function addRoute(briefs) {
    briefs.forEach(item => {
        router.addRoute("index", { path: `/${item.category_url}`, component: () => import("@/pages/front/recommend/index.vue"), name: item.name })
        router.addRoute("index", { path: `/${item.category_url}/:type`, component: () => import("@/pages/front/recommend/index.vue") })
    })

    router.addRoute({
        path: "/:pathMatch(.*)*",
        name: 'NotFound',
        component: () => import("@/pages/notFound/index.vue")
    })
}

router.beforeEach(async (to, from, next) => {

    if (!hasRoute(to)) {
        const briefs = (await ArticleApi.getCategoryBriefs()) as [];
        const uiStore = useUIStore();
        uiStore.setCategoryBrief(briefs);
        addRoute(briefs);
        next(to.fullPath)
    } else {
        next()
    }
    // next({path: to.fullPath});
});


export default router;
