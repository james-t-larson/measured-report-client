export interface Article {
  id: number
  title: string
  summary: string
  content: string
  sources: string
  externalArticleId: number
  categoryId: number
  image: string
  sentiment_score: number
  eventId: string | null
  location: string
  relevance: number
}
