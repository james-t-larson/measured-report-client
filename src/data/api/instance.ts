import type { AxiosInstance } from 'axios'
import type { Article } from '../article'
import type { Category } from '../category'

export interface ApiInstance extends AxiosInstance {
  fetchArticle: (id: number) => Promise<Article>
  fetchCategories: () => Promise<Category[]>
  fetchCategoryArticles: (id: number) => Promise<Article[]>
}
