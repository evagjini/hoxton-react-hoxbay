import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Basket from './pages/Basket'
import Categories from './pages/Categories'
import CategoryItem from './pages/CategoryItem'
import Products from './pages/Products'
import SingleProductDetails from './pages/SingleProductDetails'





function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to='/products' />} />
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:id' element={<CategoryItem />} />
          <Route path='/products/:id' element={< SingleProductDetails />} />
          <Route path='/basket' element={<Basket />} />

        </Routes>

      </main>
    </>
  )
}

export default App
