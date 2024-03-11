import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, Typography, Button, Rating } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { addToWishList } from '../../features/wishlist/wishSlice';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCartHandler = () => {
    dispatch(addToCart(product))
    history.push('/cart');
  }

  const addToWishlist = () => {
    dispatch(addToWishList(product));
    history.push('/wishlist');
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <Card style={{ padding: 20 }}>
        <Typography variant="h4" gutterBottom>
          {product.title}
        </Typography>
        <Grid container>

          <Grid item md={6}>
            <Carousel showArrows={true} showThumbs={true}>
              {
                product.images.map((url, index) => (
                  <img key={index} src={url} alt={`${index}`} />
                ))
              }
            </Carousel>
          </Grid>

          <Grid item md={6} style={{ padding: 20 }}>

            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Price
            </Typography>
            <Typography variant="body1" paragraph>
              ${product.price}

            </Typography>
            <Typography variant="h6" gutterBottom>
              Rating
            </Typography>
            <Typography>
              <Rating name="read-only" value={product.rating} readOnly />
            </Typography>

            <Grid container spacing={2} justifyContent="flex-start" style={{ marginTop: '10px' }}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={addToCartHandler}>
                  Add to Cart <AddShoppingCartIcon />
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={addToWishlist}>
                  Wishlist <FavoriteBorderOutlinedIcon />
                </Button>
              </Grid>
            </Grid>
            {/* <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p> */}

          </Grid>
        </Grid>
      </Card>



    </div>
  );
}

export default ProductPage;
