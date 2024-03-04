import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../../features/wishlist/wishSlice';
import { addToCart } from '../../features/cart/cartSlice';
import { useHistory } from "react-router-dom";
// import WhishList from '../common/WhishList';


export default function ProductCard({ product }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const addToWishlist = () =>{
        dispatch(addToWishList(product))
        history.push('/Wishlist');
    }

    const addToCartHandler = () => {
        dispatch(addToCart(product))
        history.push('/Cart');
    }


    return (
        <Card key={product.id} style={{ margin: '10px', maxWidth: '300px' }}>
            <CardMedia
                component="img"
                alt={product.title}
                height="140"
                image={product.thumbnail}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <b>Price: {product.price}</b>
                </Typography>

                <Rating name="read-only" value={product.rating} readOnly />
            </CardContent>

            <CardActions disableSpacing>

                <IconButton aria-label="add to favorites" onClick = {() => addToWishlist(product)} >
                    <FavoriteBorderOutlinedIcon />
                </IconButton>

                <IconButton aria-label="add to shopping cart" onClick = {() => addToCartHandler(product)}>
                    <AddShoppingCartIcon />
                </IconButton>

            </CardActions>

        </Card>

    );
}
