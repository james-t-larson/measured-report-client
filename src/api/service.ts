import type { Category } from '../data/category'
import type { Article } from '../data/article'
import type { User } from '../data/user'
import api from './instance.ts'
import { getNormalized, postNormalized } from './helpers.ts'

api.signIn = async (email: string, password: string) => postNormalized<User>('users/sign_in', { user: { email, password } })
api.fetchCurrentUser = () => getNormalized<User>(`/users/me`)
api.fetchArticle = (id: number) => getNormalized<Article>(`/articles/${id}`)
api.fetchCategories = () => getNormalized<Category[]>('/categories')
api.fetchCategoryArticles = (id: number = 1) =>
  getNormalized<Article[]>(`/categories/${id}/articles`)

export default api
