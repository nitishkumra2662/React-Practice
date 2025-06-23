import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage'

import ProductPage from './components/ProductPage'
import PageNotFound from './components/PageNotFound';

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <BrowserRouter>
      
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
        
        

      </BrowserRouter>
    </>
  )
}

export default App
