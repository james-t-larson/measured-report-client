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

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (!error.response || error.response.status >= 400) {
      console.error('API Error:', error)
    }
    return Promise.reject(error)
  }
)

const getAndExtract = async <T>(url: string): Promise<T> => {
  try {
    const response = await api.get<ApiResponse<T>>(url)
    return response.data.data
  } catch {
    const name = url.split('/').filter(Boolean).pop()?.replace(/-/g, ' ')
    const label = name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Resource'
    throw new Error(`There was a problem getting the ${label}`)
  }
}

api.fetchArticle = (id: number) => getAndExtract<Article>(`/articles/${id}`)

api.fetchCategories = () => getAndExtract<Category[]>('/categories')

api.fetchCategoryArticles = (id: number = 1) =>
  getAndExtract<Article[]>(`/categories/${id}/articles`)

export default api
