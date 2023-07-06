import createRoutes from './common'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "entry" */ '@/layout/Layout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),
        meta: { isChild: true },
      },
      {
        path: '/deposit',
        name: 'deposit',
        component: () => import(/* webpackChunkName: "deposit" */ '@/views/deposit/Deposit.vue'),
        meta: { isChild: true },
      },
      {
        path: '/promotion',
        name: 'promotion',
        component: () => import(/* webpackChunkName: "promotion" */ '@/views/promotion/Promotion.vue'),
        meta: { requireLogin: true, isChild: true },
      },
      {
        path: '/withdraw',
        name: 'withdraw',
        component: () => import(/* webpackChunkName: "withdraw" */ '@/views/withdraw/Withdraw.vue'),
        meta: { requireLogin: true, isChild: true },
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/Profile.vue'),
        meta: { requireLogin: true, isChild: true },
      },
    ],
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import(/* webpackChunkName: "about-us" */ '@/views/aboutUs/AboutUs.vue'),
  },
]

export default createRoutes(routes)
