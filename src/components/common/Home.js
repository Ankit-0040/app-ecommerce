import React, { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";
import TextField from '@mui/material/TextField';
import MySlider from "../Products/Slider";
import { Grid } from '@mui/material';
import '../css/Home.css'

function Home() {
    const [data, setData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const filteredProducts = data.products && data.products.filter(product => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <div className="search">
                <TextField
                    id="standard-search"
                    label="Search Product"
                    type="search"
                    variant="standard"
                    style={{ minWidth: '200px', maxWidth: '400px', width: '100%' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

            </div>

            <div >

                <MySlider products={filteredProducts} />

            </div>
            <Grid container spacing={2}>
                {filteredProducts && filteredProducts.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Home;
