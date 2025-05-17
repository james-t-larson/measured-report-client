import { defineStore } from 'pinia'
import { reactive } from 'vue'
import api from '@/api'
import type { Category } from '../data/category'
import type { Article } from '../data/article'
import type { AppState } from '../data/appState'

// TODO: Move error logic to api.ts
// It doesn't belong here
// All the fetch functions could just be set functions that get call the fetch functions if state is empty

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    article: reactive({} as Article),
    category: reactive({} as Category),
    categories: reactive([] as Category[]),
    categoryArticles: reactive([] as Article[]),
    loading: false,
    initialized: false,
    error: null,
  }),
  actions: {
    async fetchInitialState(categoryId: number, articleId?: number) {
      if (this.initialized) return;

      this.loading = true

      try {
        if (!!articleId) await this.fetchArticle(articleId)
        await this.fetchCategories(categoryId)
        await this.fetchCategoryArticles(categoryId)

        this.initialized = true
      } catch {
        this.error = 'Failed to fetch initial state'
      } finally {
        this.loading = false
        this.initialized = true
      }
    },
    async fetchCategories(id: number = 1) {
      this.loading = true
      this.error = null

      try {
        const response = await api.fetchCategories()
        this.categories = response
        this.category = response.find(c => c.id === id) ?? response[0]
      } catch {
        this.loading = false
        this.error = 'Failed to fetch categories'
      } finally {
        this.loading = false
      }
    },
    async fetchCategoryArticles(id: number) {
      this.loading = true
      this.error = null

      try {
        const response = await api.fetchCategoryArticles(id)
        this.categoryArticles = response
      } catch {
        this.error = 'Failed to fetch category articles'
      } finally {
        this.loading = false
      }
    },
    async fetchArticle(id: number) {
      this.loading = true
      this.error = null

      try {
        const response = await api.fetchArticle(id)
        this.article = response
      } catch {
        this.loading = false
        this.error = 'Failed to fetch article'
      } finally {
        this.loading = false
      }
    },
    setCategory(category: Category) {
      this.fetchCategoryArticles(category.id)
      this.category = category
    },
    setArticle(article: Article) {
      this.article = article
    },
  },
})
