import React, {  useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";
import TextField from '@mui/material/TextField';
import MySlider from "../Products/Slider";

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
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <TextField
                    id="standard-search"
                    label="Search Product"
                    type="search"
                    variant="standard"
                    sx={{ width: '400px' }} 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div >
              
                <MySlider products={filteredProducts} />
                
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {filteredProducts && filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} style={{ margin: '10px' }} />
                ))}
            </div>
        </div>
    );
}

export default Home;
