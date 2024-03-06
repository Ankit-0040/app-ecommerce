import React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../features/cart/cartSlice';
import { Button, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CartCard({ cart }) {
    const dispatch = useDispatch();

    const removefromCartHandler = (cart) => {
        dispatch(removeFromCart(cart));
    };

    const increaseQuantityHandler = () => {
        dispatch(increaseQuantity(cart));
    };

    const decreaseQuantityHandler = () => {
        if (cart.quantity > 1) {
            dispatch(decreaseQuantity(cart));
        }
    };

    return (
        <Paper elevation={2} style={{ padding: "10px", margin: "10px" }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                <Link className="nav-link" to={`/productdetails/${cart.id}`} style={{ textDecoration: 'none' }}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={cart.thumbnail}
                            alt=""
                        />
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <CardContent>
                        <Typography variant="subtitle1" gutterBottom>
                            {cart.brand}
                        </Typography>
                        <Typography variant="h5" component="div" gutterBottom>
                            {cart.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {cart.description}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            Price: ${cart.price}
                        </Typography>
                        <div>
                        <Tooltip title="Remove from cart" placement="right">
                            <Button aria-label="remove from cart" onClick={() => removefromCartHandler(cart)}>
                                Remove
                            <DeleteIcon />
                            </Button>
                        </Tooltip>
                       
                        </div>
                    </CardContent>
                </Grid>
                <Grid item xs={3} container justifyContent="center" alignItems="center">
                    <IconButton onClick={increaseQuantityHandler}>
                    <KeyboardArrowUpIcon />
                    </IconButton>
                    <TextField id="outlined-basic" value={cart.quantity} variant="outlined" size="small" sx={{ maxWidth: '50px' }}  />
                    <IconButton onClick={decreaseQuantityHandler}>
                    <KeyboardArrowDownIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default CartCard;
