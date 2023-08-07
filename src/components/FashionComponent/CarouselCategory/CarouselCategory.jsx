import React from 'react'

import './CarouselCategory.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Separator from '../../Separator/Separator';



const CarouselCategory = ({ title, products }) => {


    const options = {
        loop: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        dots: false,
        lazyLoad: true,
        animateOut: true,
        responsiveClass:true,
        responsive:
        {
            0: { items: 2 },
            575: { items: 2 },
            768: { items: 3 },
            991: { items: 5 },
            1199: { items: 6 }
        }
    }

    const element = 8;
    return (
        <div className="carouselcategory">
            <div className="carouselcategory__header">
                <div><h2>{title}</h2></div>

            </div>
            
            <div className='carouselcategory__slider'>
                <OwlCarousel  {...options} className='owl-theme' nav>


                    <div class='item'>
                        <img src="https://media.spaces.in/media/catalog/product/1/0/1056346-1_npubha4xuqxhvyv7.jpg" alt="" />
                        <p className='carouselcategory__text'>Bedsheets</p>
                    </div>

                    <div class='item'>
                        <img src="https://ii1.pepperfry.com/media/catalog/product/p/i/1100x1210/pink-poly-cotton-double-size-bed-covers-by-saral-home-pink-poly-cotton-double-size-bed-covers-by-sar-pecsbd.jpg" alt="" />
                        <p className='carouselcategory__text'>Bedcovers</p>
                    </div>

                    <div class='item'>
                        <img src="https://assets.ajio.com/medias/sys_master/root/20220419/5c20/625e5f0bf997dd03e26826c5/-473Wx593H-462636842-blue-MODEL.jpg" alt="" />
                        <p className='carouselcategory__text'>Quilts/Dohars</p>
                    </div>

                    <div class='item'>
                        <img src="https://www.ikea.com/in/en/images/products/gurli-cushion-cover-white__0551402_pe658563_s5.jpg?f=s" alt="" />
                        <p className='carouselcategory__text'>Cushions</p>
                    </div>

                    <div class='item'>
                        <img src="https://saritahanda.com/media/catalog/product/cache/197124c5a84385c63d0ab035b45f3e67/s/h/sh000951-1_2.jpg" alt="" />
                        <p className='carouselcategory__text'>cotton quilted</p>
                    </div>

                    <div class='item'>
                        <img src="https://i0.wp.com/feminisminindia.com/wp-content/uploads/2020/12/Kantha.jpg?fit=950%2C685&ssl=1" alt="" />
                        <p className='carouselcategory__text'>Kantha</p>
                    </div>
                    <div class='item'>
                        <img src="https://5.imimg.com/data5/UY/HR/KT/SELLER-257665/non-woven-fabric-500x500.jpg" alt="" />
                        <p className='carouselcategory__text'>Woven</p>
                    </div>

                    

                    

                    

                </OwlCarousel>
                <Separator />
            </div>

        </div>
    )
}

export default CarouselCategory
