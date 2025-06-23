import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"



const ProductPage = () => {
  const Btn = styled.button`
  color: yellow;
  border: 1px solid green;
  border-radius: 5px;
  padding: 10px;
  background-color: black;
  cursor: pointer;
  margin-top: 20px;
`

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

       <Btn onClick={handelBack}>
                Go To Back

            </Btn>
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