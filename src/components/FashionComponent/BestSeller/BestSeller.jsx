import React from 'react'
import ProductCarousel from '../../ProductCarousel/ProductCarousel'
import './BestSeller.css'
import AppCard from '../../AppCard/AppCard'

const BestSeller = ({Products}) => {
  return (
    <div className='bestseller'>
        <div className='bestseller__header__section'> 
            <h2>Monthly Best Seller</h2>
            <div className='bestseller__filters'>
                <div className='bestseller__filters__btn active'>
                    Featured
                </div>
                <div className='bestseller__filters__btn'>
                    Popular
                </div>
                <div className='bestseller__filters__btn'>
                    New added
                </div>
            </div>
        </div>
        <div className='bestseller__main__section'>
            <div className='bestseller__main__secction__banner'>
                <img src="http://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/banner/banner-9.jpg" alt="" />
            </div>
            <div className='bestseller__main__section__carousel'>
                
            </div>
        </div>
    </div>
  )
}

export default BestSeller