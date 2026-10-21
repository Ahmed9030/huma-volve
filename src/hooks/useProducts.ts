
import { useQuery } from '@tanstack/react-query'
import { getProducts, searchProducts } from '@/lib/api'

const DEFAULT_PAGE_SIZE = 10

export function useProducts(search = '', page = 0, pageSize = DEFAULT_PAGE_SIZE) {
  const normalizedSearch = search.trim()
  const skip = page * pageSize

  return useQuery({
    queryKey: ['products', { search: normalizedSearch, page, pageSize }],
    queryFn: () => normalizedSearch
      ? searchProducts(normalizedSearch, pageSize, skip)
      : getProducts(pageSize, skip),
    placeholderData: (previousData) => previousData,
  })
}
