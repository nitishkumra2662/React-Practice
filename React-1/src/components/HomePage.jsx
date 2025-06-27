import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useDebouncedValue from '../hooks/useDebouncedValue';
import { useCartStore } from '../store/useCartStore';
import { Grid, Card, CardContent, CardMedia, Button ,Stack} from '@mui/material';

const HomePage = () => {
    const [productsData, setProductsData] = useState([]);
    const [searchData, setSearchData] = useState();
    const [sortOption, setSortOption] = useState('');
    const addToCart = useCartStore((state) => state.addToCart);
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

    const sortedProducts = [...productsData].sort((a, b) => {
        if (sortOption === 'priceLowHigh') {
            return a.price - b.price;
        } else if (sortOption === 'priceHighLow') {
            return b.price - a.price;
        } else if (sortOption === 'ratingHighLow') {
            return b.rating - a.rating;
        } else if (sortOption === 'ratingLowHigh') {
            return a.rating - b.rating;
        }
        return 0;

    });
    return (
        
            <Stack maxWidth="lg" mt={8}  justifyContent="center">
                
                <select onChange={(event) => setSortOption(event.target.value)} value={sortOption}>
                    <option value="">Sort By</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="ratingHighLow">Rating: High to Low</option>
                    <option value="ratingLowHigh">Rating: Low to High</option>
                </select>

                <input onChange={(event) => {
                    localStorage.setItem("search", event.target.value)
                    setSearchData(event.target.value)
                }} type="text" value={searchData} placeholder="Search product" />

                <Grid container spacing={3}>
                    {sortedProducts && sortedProducts.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ width: '100%' }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={product.thumbnail}
                                    alt={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Brand: {product.brand}
                                    </Typography>
                                    <Typography variant="body1" color="text.primary">
                                        Rating: {product.rating}
                                    </Typography>
                                    <Typography variant="body1" color="text.primary">
                                        Price: Rs{product.price}
                                    </Typography>

                                    <Link to={`/product/${product.id}`}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            sx={{ mt: 1 }}
                                        >
                                            View Details
                                        </Button>
                                    </Link>

                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        fullWidth
                                        sx={{ mt: 1 }}
                                        onClick={() => addToCart(product)}>
                                        Add to Cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>  
            </Stack>
        
    )
}
export default HomePage;