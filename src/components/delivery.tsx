import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import OrdersToDelivery from './ordersToDelivery';
import ShopsToDelivery from './shopsToDelivery';

function Delivery() {

    return (
        <div className="delivery">
            <Router> 
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/ShopsToDelivery">רשימת החנויות</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/OrdersToDelivery">הזמנות לביצוע</a>
                    </li>
                </ul>
            <Switch>
                <Route path="/ShopsToDelivery" component={ShopsToDelivery} />
                <Route path="/OrderToDelivery"  component={OrdersToDelivery}/> 
            </Switch>
            </Router>
        </div>
    );
}

export default Delivery;