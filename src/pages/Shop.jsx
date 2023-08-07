import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import MobileFooter from '../components/MobileFooter/MobileFooter'
import MobileHeader from '../components/MobileHeader/MobileHeader'
import ShopFilter from '../components/ShopFilter/ShopFilter'
import TopHeader from '../components/TopHeader'
import './Shop.css'
import AppCard from '../components/AppCard/AppCard'
import { Link } from 'react-router-dom'

// Drawer imports
import Drawer from "react-bottom-drawer";
import MobileFilter from '../components/MobileFilter/MobileFilter'

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import { useGetAllProductsQuery } from '../Store/features/products/productsApi'
import ProductSkeleton from '../components/SkeletonLoaders/ProductSkeleton'
import ShopLeftFilter from '../components/FashionComponent/ShopLeftFilter/ShopLeftFilter'
import ShopPriceCatFilter from '../components/FashionComponent/ShopLeftFilter/ShopPriceCatFilter'
import MobileShopFilter from '../components/FashionComponent/ShopLeftFilter/MobileShopFilter'
import Select from 'react-select';


const options = [
    { value: 'lowtohigh', label: 'Price: Low to high' },
    { value: 'hightolow', label: 'High to Low' },
    { value: 'toprated', label: 'Top Rated' },
    { value: 'latesrelease', label: 'Latest Release' },
];

function Shop() {

    const [isOfferVisible, setIsOfferVisible] = React.useState(false);
    const openOffersDrawer = React.useCallback(() => setIsOfferVisible(true), []);
    const closeOffersDrawer = React.useCallback(() => setIsOfferVisible(false), []);

    const { data: products = [], error, isLoading } = useGetAllProductsQuery()

    const [selectedOption, setSelectedOption] = useState(null);


    return (
        <div className='shoppage'>
            <div className="header">
                <TopHeader />

            </div>
            <div className='mobileheader__section'>
                <MobileHeader />
            </div>
            <div className='shoppage__container'>
                <div className='shopcontainer__section'>
                    <div className='filter__section'> <ShopLeftFilter /> <ShopPriceCatFilter /> </div>
                    <div className='product__section'>
                        <div className='product__section__header'>
                            <h2 className='product__section__title'>Bedsheets</h2>
                            <div className="product__section__quickfilters">
                                <Select
                                    className='sortby__filter'
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                    placeholder={`Sort by:`}
                                    isSearchable={false}
                                    
                                />
                            </div>
                        </div>
                        <div className='products__grid'>

                            {
                                error ? (
                                    <> Data Not Found </>
                                ) : isLoading ? (
                                    <ProductSkeleton />
                                ) : products.data ? (
                                    <>
                                        {
                                            products.data?.map(product => (


                                                <div class='item'>
                                                    <AppCard product={product} key={product.id} />
                                                </div>



                                            ))
                                        }
                                    </>

                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='mobile__filter__section' onClick={openOffersDrawer}>

                <FilterAltOutlinedIcon style={{ color: "#fff", fontSize: "28px" }} />

            </div>
            <Drawer
                duration={250}
                hideScrollbars={true}
                onClose={closeOffersDrawer}
                isVisible={isOfferVisible}
                className='mobile__filter__section__drawer'
            >
                {/* <MobileFilter closeOffersDrawer={closeOffersDrawer} /> */}
                <MobileShopFilter />
            </Drawer>

            <div className='footer__section'>
                <Footer />
            </div>
            <div className='mobile__footer__section'>
                <MobileFooter />
            </div>
        </div>
    )
}

export default Shop
