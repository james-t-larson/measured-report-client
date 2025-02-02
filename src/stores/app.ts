import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import api from '@/api'
import axios from 'axios'
import type { Category } from '../data/category'
import type { Article } from '../data/article'
import type { AppState } from '../data/appState'

export const useAppStore = defineStore('articles', {
  state: (): AppState => ({
    article: reactive({} as Article),
    articles: reactive([] as Article[]),
    category: reactive({} as Category),
    categories: reactive([] as Category[]),
    categoryArticles: reactive({} as Record<number, Article[]>),
    loading: false,
    initialized: false,
    error: null,
  }),
  actions: {
    async fetchInitialState() {
      if (this.initialized) {
        return
      }

      this.loading = true

      try {
        const categoriesRes = await api.fetchCategories()
        this.categories = categoriesRes
        this.category = categoriesRes[0]
        const categoryArticlesRes = await api.fetchCategoryArticles(this.category)
        this.categoryArticles[this.category.name] = categoryArticlesRes
        this.articles = categoryArticlesRes
        this.initialized = true
      } catch {
        this.error = 'Failed to fetch initial state'
      } finally {
        this.loading = false
        this.initialized = true
      }
    },
    async fetchCategoryArticles(category: Category) {
      if (this.categoryArticles[category.name] !== undefined) {
        this.articles = this.categoryArticles[category.name]
        return
      }

      this.loading = true
      this.error = null

      try {
        const response = await api.fetchCategoryArticles(this.category)
        this.categoryArticles[category.name] = response
        this.articles = this.categoryArticles[category.name]
      } catch {
        this.error = 'Failed to fetch categories'
      } finally {
        this.loading = false
      }
    },
    async fetchArticle(id: number) {
      this.loading = true
      this.error = null

      try {
        const response = await api.fetchArticle(id)
        console.log('testing')
        this.article = response
      } catch {
        this.error = 'Failed to fetch categories'
      } finally {
        this.loading = false
      }
    },

    setCategory(category: Category) {
      this.category = category
    },
    setArticles(articles: Article[]) {
      this.articles = articles
    },
    setArticle(article: Article) {
      this.article = article
    },
  },
})
