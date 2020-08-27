import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from 'components/test/Test.vue'
import login from 'views/access/login/login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Test',
        component: Test
    },
    {
        path: '/login', // 登录界面
        name: 'login',
        component: login
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
