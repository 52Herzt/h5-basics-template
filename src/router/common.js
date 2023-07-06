import { createRouter, createWebHashHistory } from 'vue-router'

import { isMobile } from '@/utils/utils'

const beforeEach = async (to, from, next) => {
  if (!isMobile()) {
    return (window.location = 'http://localhost:8080')
  }

  if (to.meta.requireLogin) {
    // 是否登录，暂未对接直接放行
    next()
  } else {
    next()
  }
}

export default function createRoutes(routes) {
  const finalRoutes = [
    ...routes,
    {
      path: '/:pathMatch(.*)*',
      name: 'errorPage',
      component: () => import(/* webpackChunkName: "error-page" */ '@/views/errorPage/ErrorPage.vue'),
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes: finalRoutes,
  })

  router.beforeEach(beforeEach)

  return router
}
