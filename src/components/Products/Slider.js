import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMedia from '@mui/material/CardMedia';

function MySlider({ products }) {
    if (!products || !products.length) {
        return null;
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000
    };

    return (
        <Slider {...settings}>
            {products.map(product => (
                <div key={product.id} style={{ margin: '10px', maxWidth: '700', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia
                        component="img"
                        alt={product.title}
                        image={product.thumbnail}
                        style={{ maxHeight: '300px', width: '700' }}
                    />
                </div>
            ))}
        </Slider>
    );
}

export default MySlider;
