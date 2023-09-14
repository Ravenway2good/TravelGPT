import Vue from 'vue';
import VueRouter from 'vue-router';
import {constantRouterMap} from './router.config'

// 显式使用 Vue Router 插件
Vue.use(VueRouter);

let router = new VueRouter({
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap,
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;