import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import useDebouncedValue from '../hooks/useDebouncedValue';



const HomePage = () => {
    const [productsData, setProductsData] = useState([]);
    const [searchData, setSearchData] = useState();
    const debouncedSearch = useDebouncedValue(searchData, 600);


    useEffect(() => {
        getProductsData();
    }, [])


    useEffect(() => {
        searchProductsData();
    }, [debouncedSearch]);


    async function getProductsData() {
        const url = 'https://dummyjson.com/products'
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        setProductsData(data.products)
    }
    const searchValue = localStorage.getItem("search")
    async function searchProductsData() {
        const searchQuery = searchData || searchValue
        const url = `https://dummyjson.com/products/search?q=${searchQuery.toLowerCase()}`
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        setProductsData(data.products)
    }


    return (
        <>
            <Container maxWidth="md">

                <Typography color="secondary" variant="contained" component="h1">
                    Hello Everyone
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"> Welcome to the Home Page</Typography>
                <Typography variant="h5" component="h1" color="primary">
                    Products Informations
                </Typography>
                <input onChange={(event) => {
                    localStorage.setItem("search", event.target.value)
                    setSearchData(event.target.value)
                }} type="text" value={searchData} placeholder="Search product" />
                {
                    productsData && productsData.map((product, index) => (
                        <Paper key={index} elevation={3} sx={{ p: 2, mb: 2 }}>

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
                        </Paper>
                    ))

                }
                <h1> Thankyou Visit Again</h1>
            </Container>
        </>
    )
}

export default HomePage