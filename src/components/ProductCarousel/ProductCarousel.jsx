import React from 'react'

import './ProductCarousel.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Separator from '../Separator/Separator';
import AppCard from '../AppCard/AppCard'


import { Link } from "react-router-dom";


const ProductCarousel = ({ title, Products, viewall }) => {

    console.log(Products);



    const options = {
        loop: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        dots: false,
        lazyLoad: true,
        animateOut: true,
        responsive:
        {
            0: { items: 1, margin: 10 },
            575: { items: 2 },
            768: { items: 3 },
            991: { items: 3 },
            1199: { items: 3 },
            1290: { items: 4 }
        }
    }

    const element = 8;
    return (
        <div className="productcarousel">
            <div className="productcarousel__header">
                <div><h2>{title}</h2> {viewall && <span> <Link to="/shop" className="link">( View all )</Link> </span>} </div>



            </div>
            
            <div className='itemslider'>
                <OwlCarousel  {...options} className='owl-theme' nav>

                    {
                        Products?.map(product => (

                            // <Link to={`/viewproduct/${product.category}/${product.id}`} className="link">
                            //     <div class='item'>
                            //         <AppCard product={product} key={product.id} />
                            //     </div>

                            // </Link>

                            <div class='item'>
                                <AppCard product={product} key={product.id} />
                            </div>



                        ))
                    }

                </OwlCarousel>
                
            </div>
            <Separator />

        </div>
    )
}

export default ProductCarousel
