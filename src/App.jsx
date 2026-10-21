import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { CategoriesSection } from './components/sections/CategoriesSection'
import { ProductsSection } from './components/sections/ProductsSection'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main id="home" className="-mt-3">
        <Hero  className="bg-white border-lg"/>
        <CategoriesSection />
        <ProductsSection />
      </main>
    </>
  )
}

export default App
