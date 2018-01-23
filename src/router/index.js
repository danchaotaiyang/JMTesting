import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Quizzes from '@/views/quizzes'
import Report from '@/views/report'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/quizzes',
            component: Quizzes
        },
        {
            path: '/report',
            component: Report
        }
    ]
})
