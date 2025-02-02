export interface Article {
  id: number
  title: string
  summary: string
  created_at: string
  updated_at: string
  content: string
  sources: string
  external_article_id: number
  category_id: number
  image: string
  sentiment_score: number
  event_id: string | null
  location: string
  relevance: number
}
