import VueRouter from 'vue-router'
import routes from "./routes";
import store from '../store'

const router = new VueRouter({
    mode: "history",
    routes
});

router.beforeEach((to, from, next) => {
    if (!store.getters.isLogged && to.meta.auth) {
        return next('/login')
    }

    if (store.getters.isLogged && to.name === 'Login') {
        return next('/')
    }

    next()
})
export default router
