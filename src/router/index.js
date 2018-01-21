import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Quizzes from '@/views/quizzes'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/quizzes',
            name: 'Quizzes',
            component: Quizzes
        }
    ]
})
