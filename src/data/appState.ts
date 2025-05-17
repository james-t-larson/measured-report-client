import type { Article } from './article'
import type { Category } from './category'

export interface AppState {
  article: Article | null
  category: Category
  categories: Category[]
  categoryArticles: Article[]
  loading: boolean
  initialized: boolean
  error: string | null
}
