import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Categories from './pages/Categories'
import Products from './pages/Products'



function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to='/products' />} />
          <Route path='/products' element={<Products />} />
          <Route path='/categories' element={<Categories />} />


        </Routes>

      </main>
    </>
  )
}

export default App
