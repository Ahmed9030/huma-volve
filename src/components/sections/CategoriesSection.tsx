const categories = [
  { name: 'All Products' },
  { name: 'Skincare', icon: '/products/icons/skincare.png.svg' },
  { name: 'Haircare', icon: '/products/icons/haircare.svg' },
  { name: 'Makeup', icon: '/products/icons/makeup.svg' },
  { name: 'Bath & Body', icon: '/products/icons/bath-body.svg' },
]

export const CategoriesSection = () => (
  <section
    className="mx-6 mt-6 w-[calc(100%-48px)] max-w-[1392px] rounded-t-xl bg-white px-6 py-6 text-left max-[900px]:mx-4 max-[900px]:w-[calc(100%-32px)] max-[600px]:px-4 max-[600px]:py-4"
    aria-label="Product categories"
  >
    <nav aria-label="Browse product categories">
      <ul className="m-0 grid w-full max-w-[580px] list-none grid-cols-5 gap-0 p-0 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2">
        {categories.map(({ name, icon }) => {
          const isActive = name === 'All Products'

          return (
            <li key={name}>
              <button
                type="button"
                className={`flex h-11 w-auto items-center justify-center gap-2 justify-self-start rounded-lg border px-4 py-3 text-center font-[var(--sans)] text-[14px] leading-none font-medium tracking-normal text-[#242424] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-primary)] ${isActive ? 'w-[107px] border-[#D9D9D9] bg-[#D9D9D9]' : 'border-[#E7E7E7] bg-white hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]'}`}
                aria-pressed={isActive}
              >
                {icon && <img className="h-5 w-5 shrink-0 object-contain" src={icon} alt="" />}
                <span>{name}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  </section>
)
