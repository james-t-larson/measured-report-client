import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import api from '@/api'
import axios from 'axios'

export const useAppStore = defineStore('articles', {
  state: () => ({
    article: null,
    articles: reactive([]),
    category: reactive({}),
    categories: reactive([]),
    categoryArticles: {},
    loading: false,
    initialized: false,
  }),
  actions: {
    async fetchInitialState() {
      if (this.initialized) {
        return
      }

      this.loading = true

      try {
        const categoriesRes = await api.fetchCategories()
        this.categories = categoriesRes.data
        this.category = categoriesRes.data[0]
        const categoryArticlesRes = await api.fetchCategoryArticles(this.category)
        this.categoryArticles[this.category.name] = categoryArticlesRes.data
        this.articles = categoryArticlesRes.data
        this.initialized = true
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
        this.initialized = true
      }
    },
    async fetchCategoryArticles(category) {
      if (this.categoryArticles[category.name] !== undefined) {
        this.articles = this.categoryArticles[category.name]
        return
      }

      this.loading = true
      this.error = null

      try {
        const response = await api.fetchCategoryArticles(this.category)
        this.categoryArticles[category.name] = response.data
        this.articles = this.categoryArticles[category.name]
      } catch (err) {
        this.error = 'Failed to fetch categories'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    setCategory(category) {
      this.category = category
    },
    setArticles(articles) {
      this.articles = articles
    },
    setArticle(id: number) {
      const article = this.articles.find((article) => article.id === id)
      this.article = article
    },
  },
})
