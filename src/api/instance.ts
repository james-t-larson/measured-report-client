import axios from 'axios'
import type { ApiInstance } from '../data/api/instance'

// NOTE: As this project expands this will need to move somewhere more sane
declare global {
  interface Window {
    __API_CONFIG__?: {
      API_DOMAIN?: string;
      API_KEY?: string;
    };
  }
}

const development_api_domain = import.meta.env.VITE_API_DOMAIN
const development_api_key = import.meta.env.VITE_API_KEY

const api = axios.create({
  baseURL: `${window.__API_CONFIG__?.API_DOMAIN || development_api_domain}/api/v1`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}) as ApiInstance

api.interceptors.request.use((config) => {
  config.params = { ...config.params, api_key: window.__API_CONFIG__?.API_KEY || development_api_key }
  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (!error.response || error.response.status >= 400) {
      console.error('API Error:', error)
    }
    return Promise.reject(error)
  }
)

export default api
