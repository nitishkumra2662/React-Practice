import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage'
import ProductPage from './components/ProductPage'
import PageNotFound from './components/PageNotFound';
import AddToCartPage from './components/AddToCartPage';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/cart" element={<AddToCartPage />}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
