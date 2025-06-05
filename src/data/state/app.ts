import type { Article } from '../article'
import type { Category } from '../category'
import type { BaseState } from './base'

export interface AppState extends BaseState {
  article: Article | null
  category: Category
  categories: Category[]
  categoryArticles: Article[]
  initialized: boolean
}
