import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton, Rating, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../../features/wishlist/wishSlice';
import { addToCart } from '../../features/cart/cartSlice';
import { useHistory } from "react-router-dom";

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
        <Card sx={{ maxWidth: 300, margin: '10px' }}>
            <Link className="nav-link" to={`/productdetails/${product.id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.thumbnail}
                    alt={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        maxHeight: '3em',
                        textOverflow: 'ellipsis',
                    }}>
                        {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Price: ${product.price}</b>
                    </Typography>
                    <Rating name="read-only" value={product.rating} readOnly />
                </CardContent>
            </Link>
            <CardActions>
                <Tooltip title = 'Wishlist' placement='top'>
                <IconButton aria-label="add to favorites" onClick={addToWishlist}>
                    <FavoriteBorderOutlinedIcon />
                </IconButton>
                </Tooltip>
                <Tooltip title = 'Add to card' placement='top'>
                <IconButton aria-label="add to cart" onClick={addToCartHandler}>
                    <AddShoppingCartIcon />
                </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}
