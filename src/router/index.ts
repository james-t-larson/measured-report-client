import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/category/:categoryId',
      name: 'category',
      component: HomeView,
    },
    {
      path: '/category/:categoryId/article/:articleId',
      name: 'article',
      component: ArticleView,
    },
  ],
})

export default router
