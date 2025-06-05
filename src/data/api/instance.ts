import type { AxiosInstance } from 'axios'
import type { Article } from '../article'
import type { Category } from '../category'
import type { User } from '../user'

export interface ApiInstance extends AxiosInstance {
  signIn: (email: string, password: string) => Promise<User>
  fetchCurrentUser: () => Promise<User>
  fetchArticle: (id: number) => Promise<Article>
  fetchCategories: () => Promise<Category[]>
  fetchCategoryArticles: (id: number) => Promise<Article[]>
}
