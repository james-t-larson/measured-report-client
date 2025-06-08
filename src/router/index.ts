import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import SignInView from '../views/SignInView.vue'
import LandingPageView from '../views/LandingPageView.vue'

const routes = [
  { path: '/', redirect: '/landing-page' },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignInView,
    meta: { requiresAuth: false, },
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true, redirectToLandingPage: true },
  },
  {
    path: '/category/:categoryId',
    name: 'category',
    component: HomeView,
    meta: { requiresAuth: true, redirectToLandingPage: true },
  },
  {
    path: '/category/:categoryId/article/:articleId',
    name: 'article',
    component: ArticleView,
    meta: { requiresAuth: false, redirectToLandingPage: false },
  },
  {
    path: '/landing-page',
    name: 'landing-page',
    component: LandingPageView,
    meta: { requiresAuth: false, redirectToLandingPage: false },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, _, next) => {
  if (to.meta.redirectToLandingPage) {
    return next({
      name: 'landing-page'
    })
  }

  const store = useUserStore()
  await store.hydrate()
  let signedIn = store.user?.signedIn;


  if (to.meta.requiresAuth && !signedIn) {
    return next({ name: 'signIn' })
  }
  if (to.name === 'signIn' && signedIn) {
    return next({ name: 'home' })
  }
  next()
})

export default router
