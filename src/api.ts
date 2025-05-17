import axios from 'axios'
import type { ApiResponse } from './data/api/response'
import type { ApiInstance } from './data/api/instance'
import type { Category } from './data/category'
import type { Article } from './data/article'

const apiKey = import.meta.env.VITE_API_KEY
const apiBaseURL = import.meta.env.VITE_API_BASE_URL
const api = axios.create({
  baseURL: `${apiBaseURL}/api/v1`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
}) as ApiInstance

api.interceptors.request.use((config) => {
  config.params = { ...config.params, api_key: apiKey }
  return config
})

// TODO: Add interceptor that catches errors and sets the error in state

api.fetchArticle = async (id: number): Promise<Article> => {
  const response = await api.get<ApiResponse<Article>>(`/articles/${id}`)
  return response.data.data
}

api.fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get<ApiResponse<Category[]>>('/categories')
  return response.data.data
}

api.fetchCategoryArticles = async (id: number = 1): Promise<Article[]> => {
  const response = await api.get<ApiResponse<Article[]>>(`/categories/${id}/articles`)
  return response.data.data
}

export default api
