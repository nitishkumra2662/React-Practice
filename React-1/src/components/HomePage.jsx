import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const HomePage = () => {
    const [productsData, setProductsData] = useState([]);
    const [searchData, setSearchData] = useState();
    const Heading=styled.h1`
      color:red;
      border:1px solid green;
      border-radius:5px;
      padding:10px`

      const Heading2=styled.h2`
      color:blue;
      padding:10px`
    

    useEffect(() => {
        getProductsData();
    }, [])

    useEffect(() => {
        searchProductsData();
    }, [searchData])

    async function getProductsData() {
        const url = 'https://dummyjson.com/products'
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        setProductsData(data.products)
    }
const searchValue=localStorage.getItem("search")
    async function searchProductsData() {
        const searchQuery=searchData||searchValue
        const url = `https://dummyjson.com/products/search?q=${searchQuery.toLowerCase()}`
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        setProductsData(data.products)
    }


    return (
        <>
            <div>
                
                <Heading> Hello Eyeryone</Heading>
                <Heading2>Home Page</Heading2>
                <h1>
                    Products Informations
                </h1>
                <input onChange={(event) =>{
                    localStorage.setItem("search",event.target.value)
                    setSearchData(event.target.value)} }type="text" value={searchData} placeholder="Search product" />
                {
                    productsData && productsData.map((product, index) => (
                        <div key={index} style={{
                            border: '1px solid #ccc',
                            margin: '10px',
                            padding: '10px',
                            borderRadius: '10px',
                            width: '300px'
                        }}>

                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <Link to={`/product/${product.id}`}>
                                <ul>
                                    <li>Title: {product.title}</li>
                                    <li>Brand: {product.brand}</li>
                                    <li>Price:$ {product.price}</li>
                                </ul>
                            </Link>
                        </div>
                    ))

                }
                <Heading> Thankyou Visit Again</Heading>
            </div>
        </>
    )
}

export default HomePage