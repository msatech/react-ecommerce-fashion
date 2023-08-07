import React from 'react'

import './OffersSlider.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Separator from '../Separator/Separator';


const OffersSlider = ({ products }) => {


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
            0: { items: 1 },
            575: { items: 3 },
            768: { items: 3 },
            991: { items: 3 },
            1199: { items: 3 }
        }
    }

    const element = 8;
    return (
        <div className="offerscarousel">
            <div className='offerslider'>
                <OwlCarousel  {...options} className='owl-theme' nav>


                    <div class='item'>
                        <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-1.jpg&w=640&q=100" alt="" />
                    </div>

                    <div class='item'>
                        <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-2.jpg&w=640&q=100" alt="" />
                    </div>


                    <div class='item'>
                        <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-1.jpg&w=640&q=100" alt="" />
                    </div>


                    <div class='item'>
                        <img src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fsmall%2Fbanner-3.jpg&w=640&q=100" alt="" />
                    </div>

                    

                    

                </OwlCarousel>
            </div>

        </div>
    )
}

export default OffersSlider
