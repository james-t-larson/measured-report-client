import type { Article } from './article'
import type { Category } from './category'

export interface AppState {
  article: Article | null
  articles: Article[]
  category: Category
  categories: Category[]
  categoryArticles: Record<string, Article[]>
  loading: boolean
  initialized: boolean
  error: string | null
}
