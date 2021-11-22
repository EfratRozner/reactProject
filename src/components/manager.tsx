import React from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch ,
    Route,
    Link
} from "react-router-dom";
import OrdersDetails from "./ordersDetails";
import CustomersDetails from "./customersDetails";
import Management from "./management";
import DeliveriesDetails from './deliveriesDetails';
import AddUser from './addUser';
import Shop from './shop';

function Manager(){
    return(
        <div className="manager">
            <Router>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/ordersDetails">צפייה בהזמנות</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/CustomersDetails">צפייה בפרטי לקוחות</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/DeliveriesDetails">צפייה בפרטי משלוחנים</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/Management">ניהול הגדרות הזמנות ותשלום</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/AddUser">הוספת מנהל/משלוחן</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link-light" href="/Shop">חנויות</a>
                    </li>    
                </ul>
                <Switch>
                    <Route path="/OrdersDetails" component={OrdersDetails}/>
                    <Route path="/CustomersDetails" component={CustomersDetails}/>
                    <Route path="/DeliveriesDetails" component={DeliveriesDetails}/>
                    <Route path="/Management" component={Management}/>
                    <Route path="/AddUser" component={AddUser}/>
                    <Route path="/Shop" component={Shop}/>
                </Switch>
            </Router>
        </div>
    )
}
export default Manager;