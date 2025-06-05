import { defineStore } from 'pinia'
import { reactive } from 'vue'
import api from '../api/service.ts'
import type { Category } from '../data/category'
import type { Article } from '../data/article'
import type { AppState } from '../data/state/app'

// TODO: Move error logic to api.ts
// TODO: if the article can be found in state, there should not be an api call
// TODO: Break into a couple different stores

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
    async initializeState(categoryId: number, articleId?: number) {
      if (this.initialized) return;

      this.loading = true

      try {
        if (!!articleId) await this.setArticle(articleId)
        await this.setCategories(categoryId)
        await this.setCategoryArticles(categoryId)

        this.initialized = true
      } catch {
        this.error = 'Failed to fetch initial state'
      } finally {
        this.initialized = true
      }

      this.loading = false
    },
    async setCategories(id: number = 1) {
      this.loading = true
      this.error = null

      try {
        const response = await api.fetchCategories()
        this.categories = response
        this.category = response.find(c => c.id === id) ?? response[0]
      } catch {
        this.loading = false
        this.error = 'Failed to fetch categories'
      }
      this.loading = false
    },
    async setCategoryArticles(id: number) {
      this.loading = true
      this.error = null

      try {
        const response = await api.fetchCategoryArticles(id)
        this.categoryArticles = response
      } catch {
        this.error = 'Failed to fetch category articles'
      }
      this.loading = false
    },
    async setArticle(id: number) {
      this.loading = true
      this.error = null

      try {
        const response = await api.fetchArticle(id)
        this.article = response
      } catch {
        this.loading = false
        this.error = 'Failed to fetch article'
      }
      this.loading = false
    },
    setCategory(category: Category) {
      this.setCategoryArticles(category.id)
      this.category = category
    },
  },
})
