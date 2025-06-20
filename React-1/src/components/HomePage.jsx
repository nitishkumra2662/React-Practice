import React, { useState, useEffect } from 'react'
import{Link} from 'react-router-dom'

const HomePage = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProductsData();
    }, [])

    async function getProductsData() {
        const url = 'https://dummyjson.com/products'
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        setProductsData(data.products)
    }
    return (
        <>
            <div>
                <p>Home Page</p>
                <h1>
                    Products Information
                </h1>
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
            </div>
        </>
    )
}

export default HomePage