import React from 'react'
import './AppCard.css'


import { useDispatch } from "react-redux"
import { addToCart } from '../../Store/features/cart/cartSlice';
import { Link } from "react-router-dom";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';


function Card({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <div className='appcard'>
            <div className='appcard__product__image'>
                <Link to={`/viewproduct/${product.category}/${product.id}`} className="link">
                    <img src={product.product_featured_image.url} alt={product.product_name} />
                </Link>
            </div>
            <div className='appcard__product__info'>
                <p className='appcard__product__info__product__category'>{product.category}</p>

                <div className='appcard__product__desc__and__addtocart__btn'>
                    <div className='appcard__product__desc'>
                        <p className='appcard__product__name'>
                            <Link to={`/viewproduct/${product.category}/${product.id}`} className="link">
                                {product.product_name.substring(0, 18)}...
                            </Link>
                        </p>
                        {/* <p className='appcard__product__rating'><Rating className='appcard__product__desc__rating' name="half-rating-read" defaultValue={product.rating.rate} precision={0.5} readOnly /></p> */}
                        <div className='appcard__product__price'>
                            <p className='appcard__product__sale__price'><span>&#8377;</span> {product.selling_price}</p>
                            <p className='appcard__product__mrp__price'> <span>&#8377;</span> {product.original_price} </p>

                        </div>

                    </div>
                    <div className='appcard__product__addtocart__btn'>
                        <Tooltip className='tooltip' placement="top" TransitionProps={{ timeout: 600 }} title="Add to Cart" arrow>
                            <button onClick={() => handleAddToCart(product)}><ShoppingBasketOutlinedIcon className='shoppingcart__icon' /></button>
                        </Tooltip>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
