import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Tooltip } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { removeWishlist } from '../../features/wishlist/wishSlice';
import { addToCart } from '../../features/cart/cartSlice';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function WishListCard({ wishlist }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const removeWishlisthandler = () => {
        dispatch(removeWishlist(wishlist))
    }

    const addToCartHandler = () => {
        dispatch(addToCart(wishlist))
        history.push('/Cart');
    }

    return (
        <div >
        <Card sx={{ maxWidth: 300, margin: '10px' }}>
            <CardActionArea>
            <Link className="nav-link" to={`/productdetails/${wishlist.id}`} style={{ textDecoration: 'none' }}>
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
                </Link>
            </CardActionArea>
            <CardActions>
                <Tooltip title="Add to Cart" placement="left" >
                <IconButton aria-label="add to cart" onClick = {() => addToCartHandler(wishlist)}>
                    <AddShoppingCartIcon />
                </IconButton>
                </Tooltip>
                <Tooltip title="Remove " placement="right"  >
                <IconButton aria-label="remove from wishlist" onClick={() => removeWishlisthandler(wishlist)}>
                    <RemoveCircleIcon  />
                </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
        </div>
    );
}
