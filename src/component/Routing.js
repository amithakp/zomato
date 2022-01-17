import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './Listing/Listing';//param
import Details from './Details/restDetails';
import PlaceOrder from './Booking/placeOrder';
import ViewApi from './Booking/ViewApi';
import Login from './Login/Login';
import Register from './Login/Register';


const Routing = () => {
    return(
        <BrowserRouter>
           
                <Route exact path="/" component={Home}/>
                <Route path="/list/:id" component={Listing}/>
                <Route path="/details/:id" component={Details}/>
                <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                <Route path="/viewBooking" component={ViewApi}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing;