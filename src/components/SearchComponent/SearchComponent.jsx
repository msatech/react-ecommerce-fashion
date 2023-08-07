import React from 'react'
import './SearchComponent.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart, decreaseCartQuantity } from '../../Store/features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function SearchComponent({ searchItem }) {
    const { product_name, product_featured_image, category, selling_price, id } = searchItem.item
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const FilterData = cart.cartItems.filter(
        (cartItem) => { return cartItem.id === id }
    )

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }


    const decreaseCartQuantityValue = (cartItem) => {
        dispatch(decreaseCartQuantity(cartItem))
    }
    const addCartQuantityValue = (cartItem) => {
        dispatch(addToCart(cartItem))
    }


    return (
        <div className='searchcomponent'>
            <div className='searchcomponent__image'>
                <img src={product_featured_image.url} alt={product_name} />
            </div>
            <p className='searchcomponent__product__title'>

                {`${product_name.substring(0, 15)}...`}
            </p>
            <p className='searchcomponent__product__price'>
                <span>&#8377;</span> {selling_price}
            </p>
            {/* <p className='searchcomponent__product__unit'>
                100g
            </p> */}
            <div className='searchcomponent__addtocart__btn'>
                {
                    FilterData.length > 0 ? (
                        <div className='cartitem__product__btn'>
                            <button> <RemoveIcon className='cartitem__product__btn__remove' onClick={() => decreaseCartQuantityValue(searchItem.item)} /> </button>
                            <p> {FilterData[0].cartQuantity} </p>
                            <button> <AddIcon className='cartitem__product__btn__add' onClick={() => addCartQuantityValue(searchItem.item)} /> </button>
                        </div>
                    ) : (

                        <button className='add__cart' onClick={() => handleAddToCart(searchItem.item)}>
                            <ShoppingCartIcon className='add__cart__icon' />
                            ADD
                        </button>
                    )

                }



            </div>

        </div>
    )
}

export default SearchComponent
