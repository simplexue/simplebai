import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/mainIndex.vue'
import Login from '@/views/userLogin.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
