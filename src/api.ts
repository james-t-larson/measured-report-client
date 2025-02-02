import axios from 'axios'

const api = axios.create({
  baseURL: 'https:/neutralnews.dev',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.fetchCategories = async () => {
  console.log('testing in fetchCategories')
  const response = await api.get('v2/categories?api_key=asdfasdfasdf')
  return response.data
}

api.fetchCategoryArticles = async (category) => {
  const response = await api.get(`v2/categories/${category.id}/articles?api_key=asdfasdfasdf`)
  return response.data
}

export default api
