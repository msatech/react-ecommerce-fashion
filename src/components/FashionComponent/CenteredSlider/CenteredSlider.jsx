import React from 'react'
import './CenteredSlider.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Banner2 from '../../../assets/banner2.jpeg'
import Banner3 from '../../../assets/banner3.jpeg'
import Banner4 from '../../../assets/banner4.jpeg'
import Banner5 from '../../../assets/banner5.jpeg'
import Banner6 from '../../../assets/banner6.jpeg'

function BannerSlider({ BannerImages }) {
    const options = {
        center: true,
		loop:true,
		autoplay:true,
		autoplayTimeout:6000,
		nav:false,
		dots:true,
		lazyLoad:true,
        autoWidth:true,
       
		margin:20,
		animateOut: 'fadeOut',
		responsive:
		{
		0:{items:1, autoWidth:false, center: false},
		575:{items:1, autoWidth:false, center: false},
		768:{items:1, autoWidth:false, center: false},
		991:{items:1, autoWidth:false, center: false},
		1199:{items:1, autoWidth:false, center: false},
		1220:{items:2}

		}
	}

    return (
        <div className="centerslider">
            <OwlCarousel  {...options} className='owl-theme'  nav>
                {
                    BannerImages.map(banner => (

                <div class='item' key={banner.id}>
                    <img src={banner.media.url} />
                </div>
                    ))
                }
                
                

            </OwlCarousel>
        </div>
    )
}

export default BannerSlider
