import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import './App.css';
import Customer from './components/customer';
import OrderHistory from './components/orderHistory';
import Pay from './components/pay';
import Manager from './components/manager';
import Delivery from './components/delivery';
import PackageDetails from './components/packageDetails';


function App() {

  return (
    <div>
      <Router>
        <Login></Login>
      </Router>
      {/* <Customer></Customer> */}
      {/* <Manager></Manager> */}
      {/* <Delivery></Delivery> */}
    </div>
  );
}

export default App;