import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/actualité",
        name: "Actualité",
        // route level code-splitting
        // this generates a separate chunk (Actualité.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Actualité" */ "../views/Actualité.vue"),
    },
    {
        path: "/horoscope",
        name: "Horoscope",
        // route level code-splitting
        // this generates a separate chunk (Horoscope.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Horoscope" */ "../views/Horoscope.vue"),
    },
    {
        path: "/crypto",
        name: "Crypto",
        // route level code-splitting
        // this generates a separate chunk (Crypto.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Crypto" */ "../views/Crypto.vue"),
    },
    {
        path: "/film_Série",
        name: "Film_Série",
        // route level code-splitting
        // this generates a separate chunk (Film_Série.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Film_Série" */ "../views/Film_Série.vue"),
    },
    {
        path: "/Météo",
        name: "Météo",
        // route level code-splitting
        // this generates a separate chunk (Météo.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Météo" */ "../views/Météo.vue"),
    },
    {
        path: "/Sport",
        name: "Sport",
        // route level code-splitting
        // this generates a separate chunk (Sport.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Sport" */ "../views/Sport.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;