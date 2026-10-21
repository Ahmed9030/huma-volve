import { useProducts } from '@/hooks/useProducts'

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(price)

export const ProductsSection = () => {
  const { data, isPending, isError, error } = useProducts()

  return (
    <section
      id="products"
      className="mx-6 w-[calc(100%-48px)] max-w-[1392px] rounded-b-xl bg-white px-6 pb-8 pt-2 text-left max-[900px]:mx-4 max-[900px]:w-[calc(100%-32px)] max-[600px]:px-4"
      aria-labelledby="products-title"
    >
      
      {isPending ? (
        <p className="py-10 text-center text-sm text-[#989898]" role="status">Loading products…</p>
      ) : isError ? (
        <p className="py-10 text-center text-sm text-red-700" role="alert">
          {error instanceof Error ? error.message : 'Products could not be loaded.'}
        </p>
      ) : data.products.length === 0 ? (
        <p className="py-10 text-center text-sm text-[#989898]">No products found.</p>
      ) : (
        <ul className="m-0 grid list-none grid-cols-4 gap-1 p-0 max-[1100px]:grid-cols-3 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
          {data.products.map((product) => (
            <li key={product.id}>
              <article className="flex h-[301px] flex-col items-center rounded-xl border border-[#F5F5F5] bg-[#F5F5F5] px-4 pb-5 pt-3">
                <img
                  className="h-[180px] w-full max-w-[182px] shrink-0 object-contain"
                  src={product.thumbnail}
                  alt={product.title}
                  loading="lazy"
                />
                <h3 className="mt-3 w-full truncate text-center font-[var(--heading)] text-[18px] leading-[140%] font-bold tracking-[-0.02em] text-[#3B3B3B]" title={product.title}>
                  {product.title}
                </h3>
                <p className="mt-1 w-full truncate text-center font-[var(--sans)] text-[14px] leading-none font-normal text-[#989898]" title={product.brand || product.category}>
                  {product.brand || product.category}
                </p>
                <p className="mt-auto w-full text-center font-[var(--sans)] text-[18px] leading-[140%] font-medium tracking-[-0.02em] text-[#3B3B3B]">
                  {formatPrice(product.price)}
                </p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
