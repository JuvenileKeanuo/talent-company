import Vue from 'vue'
import Router from 'vue-router'
import Guide from './views/Guide.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import ChangePassword from './views/ChangePassword.vue'
import Form from './views/Form.vue'
import CompanyInfo from '@/views/CompanyInfo.vue'
import TalentStatus from '@/components/TalentStatus.vue'
import FlowIn from '@/components/FlowIn.vue'
import FlowOut from '@/components/FlowOut.vue'
import FlowTalentInfo from '@/components/FlowTalentInfo.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'guide',
            component: Guide
        },
        {
            path: '/changePassword',
            name: 'changePassword',
            component: ChangePassword
        },
        {
            path: '/form',
            name: 'form',
            component: Form,
            children: [
                {
                    path: 'companyInfo',
                    name: 'companyInfo',
                    component: CompanyInfo
                },
                {
                    path: 'talentStatus',
                    name: 'talentStatus',
                    component: TalentStatus
                },
                {
                    path: 'flowIn',
                    name: 'flowIn',
                    component: FlowIn
                },
                {
                    path: 'flowOut',
                    name: 'flowOut',
                    component: FlowOut
                },
                {
                    path: 'flowTalentInfo',
                    name: 'flowTalentInfo',
                    component: FlowTalentInfo
                },
            ]
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
		{
		    path: '/home',
		    name: 'home',
		    component: Home
		},
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
