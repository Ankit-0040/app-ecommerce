import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton, Rating, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../../features/wishlist/wishSlice';
import { addToCart } from '../../features/cart/cartSlice';
import { useHistory } from "react-router-dom";
import '../css/ProductCard.css';

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const addToWishlist = () => {
        dispatch(addToWishList(product));
        history.push('/wishlist');
    }

    const addToCartHandler = () => {
        dispatch(addToCart(product));
        history.push('/cart');
    }

    return (
        <Card className="product-card">
            <Link className="nav-link" to={`/productdetails/${product.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.thumbnail}
                    alt={product.title}
                    className="card-media"
                />
                <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="div" className="card-title">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="card-description">
                        {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="card-price">
                        <b>Price: ${product.price}</b>
                    </Typography>
                    <Rating name="read-only" value={product.rating} readOnly className="card-rating" />
                </CardContent>
            </Link>
            <CardActions className="card-actions">
                <Tooltip title="Wishlist" placement="top">
                    <IconButton aria-label="add to favorites" onClick={addToWishlist}>
                        <FavoriteBorderOutlinedIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add to cart" placement="top">
                    <IconButton aria-label="add to cart" onClick={addToCartHandler}>
                        <AddShoppingCartIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}
