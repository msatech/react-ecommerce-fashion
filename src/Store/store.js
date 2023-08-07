import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './features/products/productSlice'
import { productsApi } from './features/products/productsApi'
import cartReducer from './features/cart/cartSlice';
import addressReducer from './features/Address/AddressSlice'
import LocationReducer from './features/Location/LocationSlice'
import OrdersRedcuer from './features/Orders/OrdersSlice'
import authReducer from './features/auth/authSlice'
import generateOtpReducer from './features/auth/otpSlice'
import { bannersApi } from './features/Banners/Banners';


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    address: addressReducer,
    location: LocationReducer,
    orders: OrdersRedcuer,
    auth: authReducer,
    otp: generateOtpReducer,
    
    [productsApi.reducerPath]: productsApi.reducer,
    [bannersApi.reducerPath]: bannersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(productsApi.middleware),
    getDefaultMiddleware().concat(bannersApi.middleware)

  )
})