import React, { useState, useEffect } from 'react'
import './TopHeader.css'
import { useSelector, useDispatch } from "react-redux"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Cart from './Cart/Cart';
import LoginModal from '../components/LoginModal/LoginModal'
import SearchComponent from './SearchComponent/SearchComponent';
import Logo from '../assets/logo.png'

import { Link, useHistory } from "react-router-dom";

import { useGetAllProductsQuery } from '../Store/features/products/productsApi'

// For advanced Filtering using fuse library
import Fuse from 'fuse.js'
import { toast } from "react-toastify";
import { register, reset } from '../Store/features/auth/authSlice';
import { generateOtp } from '../Store/features/auth/otpSlice';


// Login


function TopHeader() {
    const history = useHistory()
    const dispatch = useDispatch()


    let useruuid = localStorage.getItem("user-uid")
    const [expanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function close() {
        setExpanded(false);
    }


    const [searchproducts, setSearchproducts] = useState([])
    const cart = useSelector((state) => state.cart);
    const { data: products = [], isFetching, error } = useGetAllProductsQuery();
    // Fuse Setting 

    const options = {
        includeScore: true,
        // Search in `author` and in `tags` array
        keys: ['category', 'product_name']
    }


    const fuse = new Fuse(products.data, options)


    const FindSearchResult = (value) => {
        const result = fuse.search(value)
        setSearchproducts(result)
    }

    // Handle Search result

    const handleSearchResult = (e) => {
        FindSearchResult(e.target.value)
    }


    // End

    // Login Modal Settings

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
    const otpData = useSelector((state) => state.otp)


    const [open, setOpen] = useState(false);
    const [phonenumber, setPhonenumber] = useState("");
    const [otp, setOtp] = useState(null);
    const [show, setShow] = useState(false)
    const [disable, setDisable] = useState(true)



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };





    useEffect(() => {

        if (phonenumber.length === 12) {
            setDisable(false)
        }
        else {
            setDisable(true)

        }
    }, [phonenumber]);


    const handlePhoneChange = (value) => {
        setPhonenumber(value)
    }


    const GetOtp = () => {
        if (!phonenumber.length === 10) {
            setDisable(true)
        }
        else {
            const otpDate = {
                otp_for: 'Login',
                phone_number: "9717418634"
            }

            dispatch(generateOtp(otpDate))


            setShow(true)


        }

    }

    const VerifyOtp = (e) => {
        let otp = e.target.value;
        setOtp(otp);
        console.log(otpData)
        console.log(phonenumber)
        if (otp.length === 6) {
            if (otpData.otp) {
                const loginDate = {
                    phone_number: phonenumber.substring(2, phonenumber.length),
                    order_id: otpData.otp.order_id,
                    otp: otp
                }
                dispatch(register(loginDate))
                setOpen(false)
            }
        }

    }





    const GoBackPhoneFiled = () => {
        setShow(false)
    }


    const values = { phonenumber, open, show, disable, otp }


    // End Login Modal 


    // Cart Drawer Setting

    const [draweropen, setDraweropen] = useState(false)

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDraweropen(open);
    };


    // End cart Drawer Setting




    return (
        <div className='main__header'>
            <div className='main__header__left'>
                <Link className='link' to="/">
                    <img src={Logo} alt="logo" width="180" />
                </Link>

                {/* <p><span> <CategoryIcon className="location__icon" /></span> Shop</p> */}
            </div>
            <div className='main__header__center'>
                <div className='search__section'>
                    <input type="text" placeholder='Bedsheets, Bedcover..' onFocus={expand} onChange={handleSearchResult} />
                    <SearchIcon className="searchicon" />
                    {/* Search Result Section */}
                    {expanded ? (
                        <>


                            {
                                searchproducts.length === 0 ? (
                                    null
                                )

                                    : (
                                        <div className='search__field__result'>
                                            {
                                                searchproducts?.map(searchItem => (
                                                    <SearchComponent searchItem={searchItem} key={searchItem.id} />

                                                ))
                                            }
                                        </div>


                                    )
                            }


                        </>
                    ) : null}

                    {/* End search Result section */}
                </div>

            </div>
            <div className='main__header__right'>
                <div className='cart__section' onClick={toggleDrawer(true)}>
                    <IconButton> <Badge badgeContent={cart.cartItems.length} className="cart__badge" color="primary"><ShoppingCartIcon className="carticon" /></Badge></IconButton>
                    <p>cart</p>
                </div>

                {
                    !useruuid ?
                        <div className='login__section'>
                            <IconButton onClick={handleClickOpen}><PersonIcon className='loginicon' /></IconButton>
                            <p>Login</p>
                        </div>
                        :
                        <div className='myaccount__section'>
                            <Link className='link' to="/myaccount">
                                <IconButton><PersonIcon className='loginicon' /></IconButton>
                                <p>Account</p>
                            </Link>
                        </div>

                }
                {/* <Cart /> */}

                <Cart draweropen={draweropen} toggleDrawer={toggleDrawer} />


            </div>



            {/* Login Modal */}
            {
                !useruuid ?
                    <LoginModal className="login__modal__section" VerifyOtp={VerifyOtp} handlePhoneChange={handlePhoneChange} GetOtp={GetOtp} values={values} GoBackPhoneFiled={GoBackPhoneFiled} handleClose={handleClose} handleClickOpen={handleClickOpen} />
                    : null
            }
        </div>
    )
}

export default TopHeader
