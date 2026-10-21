const heroDecorations = [
  { src: '/hero/Burst-star.svg', className: 'left-[8%] top-[57%] w-[65px]' },
  { src: '/hero/Burst-pucker-1.svg', className: 'left-[37%] top-[12%] w-[95px]' },
  { src: '/hero/Burst-pucker-2.svg', className: 'left-[68%] top-[58%] w-12' },
  { src: '/hero/Burst-pucker-2-1.svg', className: 'left-[84%] top-[18%] w-8' },
  { src: '/hero/Vector 83 copy.svg', className: 'bottom-0 left-0 w-full max-w-none opacity-90' },
  { src: '/hero/Vector 83 copy-1.svg', className: 'bottom-0 left-0 w-full max-w-none opacity-90' },
]

export const Hero = () => (
  <section
    className="relative isolate mx-6 h-[260px] w-[calc(100%-48px)] max-w-[1392px] overflow-hidden rounded-xl bg-white text-left max-[900px]:mx-4 max-[900px]:h-auto max-[900px]:min-h-[420px] max-[900px]:w-[calc(100%-32px)]"
    aria-labelledby="hero-title"
  >
    <h1
      id="hero-title"
      className="absolute left-6 top-6 z-10 m-0 w-[591px] max-w-[calc(100%-48px)] font-[var(--heading)] text-[clamp(44px,5vw,72px)] leading-[1.4] font-bold tracking-normal text-black max-[900px]:static max-[900px]:px-5 max-[900px]:pt-5"
    >
      Explore Our Shop
    </h1>

    <p className="absolute left-[350px] top-[140px] z-10 m-0 w-[608px] max-w-[calc(100%-500px)] font-[var(--sans)] text-base leading-[1.4] font-medium tracking-[-0.02em] text-[#3B3B3B] max-[900px]:static max-[900px]:mx-5 max-[900px]:mt-3 max-[900px]:max-w-none max-[900px]:pb-8">
      From skincare to makeup, our platform features a wide range of products that cater to all your beauty needs. We strive to provide our customers with a luxury shopping experience, from browsing through our carefully selected products to receiving them in our signature packaging. Shop with us for the ultimate in beauty luxury.
    </p>

    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {heroDecorations.map(({ src, className }) => (
        <img key={src} className={`absolute h-auto ${className}`} src={src} alt="" />
      ))}
      <img
        className="absolute bottom-0 right-[4%] z-[1] h-[252px] w-[220px] object-contain object-bottom max-[900px]:right-[3%] max-[900px]:h-[170px] max-[900px]:opacity-50"
        src="/hero/Graphic%202.svg"
        alt=""
      />
    </div>
  </section>
)
