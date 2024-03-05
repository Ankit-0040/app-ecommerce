// import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../features/cart/cartSlice';
import { CardActionArea } from '@mui/material';
import { TextField } from '@mui/material';

function CartCard({ cart }) {
    const dispatch = useDispatch();
    // const [quantity, setQuantity] = useState(1);

    const removefromCartHandler = (cart) => {
        dispatch(removeFromCart(cart));
    };

    const increaseQuantityHandler = () => {
        // setQuantity(quantity + 1);
        dispatch(increaseQuantity(cart));

    };

    const decreaseQuantityHandler = () => {
        if (cart.quantity > 1) {
            // setQuantity(quantity - 1)
            dispatch(decreaseQuantity(cart));
        }
    };

    return (

        <Paper elevation={2} style={{ padding: "10px", margin: "10px" }} >
            <div style={{ display: "flex", margin: "10px", flexWrap: "wrap" }}>

                <Card style={{ maxWidth: '200px' }}>
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

                <CardActions style={{ maxWidth: '600px' }}>
                    <CardContent style={{ width: '600px' }}>
                        <Typography>{cart.brand}</Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {cart.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {cart.description}
                        </Typography>

                        <Tooltip title="Remove" placement="right" style={{ margin: '5px' }}>
                            <IconButton aria-label="remove from wishlist" onClick={() => removefromCartHandler(cart)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </CardContent>
                    <div>
                        <Typography>
                            ${cart.price}
                        </Typography>
                    </div>
                </CardActions>

                <div style={{ display: "flex", alignItems: "center", width: '150px' }}>
                    <IconButton onClick={() => increaseQuantityHandler(cart)}>
                        <KeyboardArrowUpIcon />
                    </IconButton>
                    <TextField id="outlined-basic" value={cart.quantity} sx={{ width: '50px' }} />
                    <IconButton onClick={decreaseQuantityHandler}>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </div>

            </div>
        </Paper>

    );
}

export default CartCard;
