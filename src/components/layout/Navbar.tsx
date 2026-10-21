import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const links = ['SHOP', 'COLLECTIONS', 'CONTACT', 'ABOUT']

export const Navbar = () => (
  <header className="flex min-h-[108px] w-full items-center gap-2 bg-[var(--surface-muted)] p-6 text-left max-[980px]:flex-wrap max-[980px]:px-5 max-[560px]:gap-2.5 max-[560px]:p-4">
    <nav className="flex min-w-0 flex-1 items-center gap-2 max-[980px]:basis-full max-[560px]:gap-3" aria-label="Main navigation">
     
     <a className="flex h-[60px] w-[200px] flex-[0_0_180px] items-center justify-center gap-2 rounded-xl bg-[var(--surface)] text-[18px] font-semibold tracking-[-0.3px] text-[var(--text-h)] no-underline max-[560px]:h-12 max-[560px]:w-[140px] max-[560px]:flex-[0_0_140px] max-[560px]:text-base" href="#home" aria-label="Home">
        <img className="size-6" src="/diamond_black_24dp%201.svg" alt="" />
        <span>crystal.</span>
      </a>

      <div className="flex min-w-0 flex-1 items-center gap-0 max-[560px]:justify-between">
        {links.map((link, index) => (
          <a
            className={`relative inline-flex h-[60px] w-[150px] flex-[1_1_150px] items-center justify-center whitespace-nowrap rounded-xl bg-[var(--surface)] px-1.5 font-[var(--sans)] text-[14px] leading-[140%] font-medium tracking-normal text-[var(--text-h)] no-underline max-[560px]:h-12 max-[560px]:w-auto max-[560px]:flex-auto max-[560px]:px-1.5${index === 0 ? " after:absolute after:left-1/2 after:top-10 after:size-[6px] after:-translate-x-1/2 after:rounded-full after:bg-[#3b3b3b] after:content-[''] max-[560px]:after:top-[34px]" : ''}`}
            href={`#${link.toLowerCase()}`}
            aria-current={index === 0 ? 'page' : undefined}
            key={link}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>

    <label className=" flex h-[60px] w-[min(356px,30vw)] min-w-0 flex-[0_1_356px] items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 text-[var(--text)] max-[980px]:w-auto max-[980px]:flex-[1_1_220px] max-[560px]:ml-0 max-[560px]:h-[52px] max-[560px]:w-full max-[560px]:flex-[1_1_100%]">
      <Input className="h-auto min-w-0 flex-1 border-0 bg-transparent p-0 text-sm shadow-none outline-none focus-visible:border-0 focus-visible:ring-0" type="search" placeholder="Search" aria-label="Search" />
      <Search className="size-5 shrink-0" aria-hidden="true" />
    </label>

    <Button className="h-[60px] w-[200px] flex-[0_0_200px] gap-3 rounded-xl bg-[var(--brand-primary)] text-[14px] font-semibold tracking-[0.4px] text-white hover:bg-[var(--brand-primary)]/90 max-[560px]:h-[52px] max-[560px]:w-full max-[560px]:flex-[1_1_100%]" type="button">
      <img className="size-5 brightness-0 invert" src="/shopping_cart_black_24dp%201.svg" alt="" />
      <span>VIEW CART</span>
    </Button>
  </header>
)
