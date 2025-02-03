import axios from 'axios'
import type { ApiResponse } from './data/api/response'
import type { ApiInstance } from './data/api/instance'
import type { Category } from './data/category'
import type { Article } from './data/article'

const api = axios.create({
  baseURL: 'https://staging.api.measured-gazette.com/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
}) as ApiInstance

api.fetchArticle = async (id: number): Promise<Article> => {
  const response = await api.get<Article>(`v2/articles/${id}`)
  return response.data
}

api.fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get<ApiResponse<Category[]>>('v2/categories')
  return response.data.data
}

api.fetchCategoryArticles = async (category: Category): Promise<Article[]> => {
  const response = await api.get<ApiResponse<Article[]>>(`v2/categories/${category.id}/articles`)
  return response.data.data
}

export default api
