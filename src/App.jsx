
import './App.css';
import Geolocation from './components/Location/Geolocation';
import Home from './pages/Home';
import ProductView from './pages/ProductView';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CustomSwitch from './routes/CustomSwitch';
import Shop from './pages/Shop';
import Myaccount from './pages/Myaccount'
import Location from './components/Location/Location';
import { ToastContainer } from "react-toastify";
import MobileSearchScreen from './components/MobileSearchScreen/MobileSearchScreen';
import MobileCartSection from './components/Cart/MobileCartSection';

import { ClientJS } from 'clientjs';
import { useState, useEffect } from 'react'
import Checkout from './pages/Checkout';
import MobileOrder from './components/MobileAccount/MobileOrder';
import MobileAddress from './components/MobileAccount/MobileAddress';
import MobileCartPage from './components/Cart/MobileCartPage';

import { getSubdomain } from './tenant'
import CircularProgress from '@mui/material/CircularProgress';
import FashionHome from './pages/Fashion/FashionHome';

function App() {

  const [fingerprint, setFingerprint] = useState('')

  useEffect(() => {
    const client = new ClientJS();
    const fingerprint = client.getFingerprint();
    if (localStorage.getItem("user_unique_id") !== fingerprint) {
      localStorage.setItem("user_unique_id", fingerprint)
    }
    setFingerprint(fingerprint)
    
  }, []) // initiate on the first load


  return (
    <>
      
          <div className="App">
            <Router>
              <ToastContainer />
              <ScrollToTop />
              <CustomSwitch>
                {/* <Route path="/" exact>
                  <Home />
                </Route> */}
                <Route path="/" exact>
                  <FashionHome />
                </Route>
                <Route path="/viewproduct/:category/:id" exact>
                  <ProductView />
                </Route>
                <Route path="/shop" exact>
                  <Shop />
                </Route>
                <Route path="/myaccount" exact>
                  <Myaccount />
                </Route>
                <Route path="/checkout" exact>
                  <Checkout />
                </Route>
                <Route path="/location" exact>
                  <Location />
                </Route>
                <Route path="/search" exact>
                  <MobileSearchScreen />
                </Route>
                <Route path="/orders" exact>
                  <MobileOrder />
                </Route>
                <Route path="/address" exact>
                  <MobileAddress />
                </Route>

                <Route path="/cart" exact>
                  <MobileCartPage />
                </Route>

              </CustomSwitch>


            </Router>

          </div>
          


    </>
  );
}

export default App;
