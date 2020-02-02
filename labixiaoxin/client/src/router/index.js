import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
        path: '/user',
        name: 'user',
        component: () =>
            import ('../views/user'),
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('../views/home'),
    },

    {
        path: '/',
        redirect: '/user',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;