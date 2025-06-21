import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const ProductPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const url = `https://dummyjson.com/products/${id}`;
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    setProduct(data)
  }
  if (!product) {
    return <p>Loading...</p>;
  }
function handelBack() {
        navigate(-1)
    }

  return (
    <div>

       <button onClick={handelBack}>
                Go To Back

            </button>
      <h1> Product Title</h1>
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: '50%', height: '250px', objectFit: 'cover' }}
        /></div>
      <ul>
        <li>Title: {product.title}</li>
        <li>Brand: {product.brand}</li>
        <li>category: {product.category}</li>
        <li>rating:{product.rating}</li>
        <li>Price:$ {product.price}</li>
        <li>Description: {product.description}</li>
      </ul>

    </div>
  )
}

export default ProductPage