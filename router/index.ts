import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import MainLayout from '../layouts/MainLayout.vue'
import Security from '../views/Security.vue'
import Education from '../views/Education.vue'
import AI from '../views/AI.vue'
import FacebookFraud from '../views/FacebookFraud.vue'
import StateServices from '../views/StateServices.vue'

const routes = [
    {
        path: '/',
        name: 'DefaultLayout',
        component: DefaultLayout,
        redirect: '/security',
        children: [
            { path: '/security', name: 'Security', component: Security, },
            { path: '/education', name: 'Education', component: Education },
            { path: '/ai', name: 'AI', component: AI },
            { path: '/state-services', name: 'SS', component: StateServices },
        ]
    },
    {
        path: '/facebook',
        name: 'MainLayout',
        component: MainLayout,
        children: [
            { path: '', name: 'FacebookFraud', component: FacebookFraud }
        ],
    },
    // { path: '/about', name: 'About', component: () => import('../views/About.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
