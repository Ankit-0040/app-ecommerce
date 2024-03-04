import React from 'react'
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/cart/cartSlice';
import { CardActionArea } from '@mui/material';

function CartCard({ cart }) {
    const dispatch = useDispatch();

    const removefromCartHandler = (cart) => {
        dispatch(removeFromCart(cart))
    }

    return (
        <div>
            <Paper elevation={12}>
                <div style={{ display: "flex" , margin: "10px"}}>

                   <Card style={{maxWidth: '200'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                width="20"
                                image={cart.thumbnail}
                                alt=""
                            />
                        </CardActionArea>
                     </Card>

                    <CardActions>
                        <CardContent>

                            <Typography>{cart.brand}</Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {cart.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {cart.description}
                            </Typography>
                        </CardContent>
                        <div>

                        <Typography >
                            ${cart.price}
                        </Typography>

                        <IconButton aria-label="remove from wishlist" onClick={() => removefromCartHandler(cart)}>
                            <RemoveCircleIcon />
                        </IconButton>
                        </div>
                    </CardActions>
                </div>
            </Paper>

        </div>
    )
}

export default CartCard
