import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { removeWishlist } from '../../features/wishlist/wishSlice';
import { addToCart } from '../../features/cart/cartSlice';


export default function WishListCard({ wishlist }) {

    const dispatch = useDispatch();

    const removeWishlisthandler = () => {
        dispatch(removeWishlist(wishlist))
    }

    const addToCartHandler = () => {
        dispatch(addToCart(wishlist))
    }

    return (
        <div >
        <Card sx={{ maxWidth: 300, margin: '10px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={wishlist.thumbnail}
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {wishlist.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {wishlist.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton aria-label="add to cart" onClick = {() => addToCartHandler(wishlist)}>
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="remove from wishlist" onClick={() => removeWishlisthandler(wishlist)}>
                    <RemoveCircleIcon  />
                </IconButton>
            </CardActions>
        </Card>
        </div>
    );
}
