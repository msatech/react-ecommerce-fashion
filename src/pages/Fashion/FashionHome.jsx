
import Footer from '../../components/Footer/Footer'
import React, { useEffect } from 'react'
import MobileFooter from '../../components/MobileFooter/MobileFooter'
import MobileHeader from '../../components/MobileHeader/MobileHeader'
import TopHeader from '../../components/TopHeader'
import './FashionHome.css'
import CenteredSlider from '../../components/FashionComponent/CenteredSlider/CenteredSlider'
import OffersSlider from '../../components/OffersSlider/OffersSlider'
import CarouselCategory from '../../components/FashionComponent/CarouselCategory/CarouselCategory'
import AppCard from '../../components/AppCard/AppCard'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal } from '../../Store/features/cart/cartSlice'
import { useGetAllProductsQuery } from '../../Store/features/products/productsApi'
import SkeletonCarouel from '../../components/SkeletonLoaders/SkeletonCarouel'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'
import BestSeller from '../../components/FashionComponent/BestSeller/BestSeller'
import { useGetBannersQuery } from '../../Store/features/Banners/Banners'
import BannerSliderSkeleton from '../../components/SkeletonLoaders/BannerSliderSkeleton'


const FashionHome = () => {

    const BannerData = useGetBannersQuery()
    console.log(BannerData)

    const { data, error, isLoading } = useGetAllProductsQuery()

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getTotal())
    }, [cart, dispatch])

    return (
        <div className='fashionhome'>
            <div className="header">
                <TopHeader />

            </div>
            <div className='mobileheader__section'>
                <MobileHeader />
            </div>

            <div className='main__section'>
                {
                    BannerData.error ? <>SOmetthing Went Wrong...</> :
                    BannerData.isLoading ? <BannerSliderSkeleton height={400} count={1} /> :
                    BannerData.data ? 
                    <CenteredSlider BannerImages={BannerData.data.data} />
                    : null
                }
                <div className='main__section__container'>
                    {/* <OffersSlider /> */}
                    <CarouselCategory title="Shop By Category" />

                    <div className='prdocuts__sections'>
                        {
                            error ? (
                                <> Error Occured </>
                            ) : isLoading ? (
                                <SkeletonCarouel />
                            ) : data ? (
                                <ProductCarousel title="New Launch" Products={data.data} viewall={true} />

                            ) : null
                        }
                    </div>

                    <div className='prdocuts__sections'>
                        {
                            error ? (
                                <> Error Occured </>
                            ) : isLoading ? (
                                <SkeletonCarouel />
                            ) : data ? (
                                <ProductCarousel title="Best Seller" Products={data.data} viewall={true} />

                            ) : null
                        }
                    </div>

                    

                    <div className='prdocuts__sections'>
                        {
                            error ? (
                                <> Error Occured </>
                            ) : isLoading ? (
                                <SkeletonCarouel />
                            ) : data ? (
                                <ProductCarousel title="For A Better Sleep" Products={data.data} viewall={true} />

                            ) : null
                        }
                    </div>

                </div>



            </div>

            {/* <div>

                {
                    error ? (
                        <> Error Occured </>
                    ) : isLoading ? (
                        <SkeletonCarouel />
                    ) : data ? (
                        <BestSeller Products={data} />

                    ) : null
                }

            </div> */}


            <div className='footer__section'>
                <Footer />
            </div>

            <div className='mobile__footer__section'>
                <MobileFooter />
            </div>
        </div>
    )
}

export default FashionHome