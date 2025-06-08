import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import SignInView from '../views/SignInView.vue'
import StaticContentView from '../views/StaticContentView.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/signIn', name: 'signIn', component: SignInView },
  { path: '/home', name: 'home', component: HomeView, meta: { requiresAuth: true } },
  {
    path: '/category/:categoryId',
    name: 'category',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/category/:categoryId/article/:articleId',
    name: 'article',
    component: ArticleView,
    meta: { requiresAuth: true },
  },
  {
    path: '/static-content/:slug',
    name: 'static-content',
    component: StaticContentView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, _, next) => {
  const store = useUserStore()
  await store.hydrate()
  let signedIn = store.user?.signedIn;
  let deviceID = store.user?.deviceID;

  const toStaticView = to.name === 'static-content'
  if (!signedIn && !deviceID && !toStaticView) {
    return next({
      name: 'static-content',
      params: { slug: 'landing-page' }
    })
  }

  if (to.meta.requiresAuth && !signedIn) {
    return next({ name: 'signIn' })
  }
  if (to.name === 'signIn' && signedIn) {
    return next({ name: 'home' })
  }
  next()
})

export default router
