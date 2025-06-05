import type { ApiResponse } from '../data/api/response'
import api from './instance.ts'

const toCamel = (s: string): string =>
  s.replace(/_([a-z])/g, (_, c) => c.toUpperCase());

const keysToCamel = <T>(obj: any): T => {
  if (Array.isArray(obj)) {
    return obj.map(v => keysToCamel(v)) as any;
  } else if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [k, v]) => {
      acc[toCamel(k)] = keysToCamel(v);
      return acc;
    }, {} as any);
  }
  return obj;
};

export const getNormalized = async <T>(url: string): Promise<T> => {
  try {
    return await api.get<ApiResponse<T>>(url).then(res => keysToCamel(res.data.data))
  } catch {
    const name = url.split('/').filter(Boolean).pop()?.replace(/-/g, ' ')
    const label = name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Resource'
    throw new Error(`There was a problem getting the ${label}`)
  }
}

export const postNormalized = async <T>(url: string, body: unknown): Promise<T> => {
  try {
    return await api.post<ApiResponse<T>>(url, body).then(res => keysToCamel(res.data.data))
  } catch {
    const name = url.split('/').filter(Boolean).pop()?.replace(/-/g, ' ')
    throw new Error(`There was a problem with the ${name} request`)
  }
}
