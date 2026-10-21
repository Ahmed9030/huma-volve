import type { Product, ProductsResponse } from '@/types/product'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://dummyjson.com').replace(/\/$/, '')

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`)

  if (!response.ok) {
    throw new Error(`API request failed (${response.status} ${response.statusText})`)
  }

  return response.json() as Promise<T>
}

export function getProducts(limit = 10, skip = 0): Promise<ProductsResponse> {
  const params = new URLSearchParams({ limit: String(limit), skip: String(skip) })
  return request<ProductsResponse>(`/products?${params.toString()}`)
}

export function getProduct(id: number | string): Promise<Product> {
  return request<Product>(`/products/${encodeURIComponent(String(id))}`)
}

export function searchProducts(query: string, limit = 10, skip = 0): Promise<ProductsResponse> {
  const params = new URLSearchParams({
    q: query,
    limit: String(limit),
    skip: String(skip),
  })
  return request<ProductsResponse>(`/products/search?${params.toString()}`)
}
