import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'
import CooperateView from '../views/CooperateView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '首頁',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: '關於',
      },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
      meta: {
        title: '作品集',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: '聯絡我',
      },
    },
    {
      path: '/cooperate',
      name: 'cooperate',
      component: CooperateView,
      meta: {
        title: '合作機會',
      },
    },
    {
      path: '/404',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: '找不到頁面',
      },
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
