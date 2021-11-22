import React, { useState } from "react";
import Manager from './manager';
import Customer from './customer';
import { BrowserRouter as Router, Switch, Route, Link, withRouter, useHistory } from "react-router-dom";
import { stat } from "fs";
import { any } from "prop-types";
import axios from "axios";
import createHistory from 'history/createBrowserHistory';
import SignIn from "./signIn";
import OrderHistory from './orderHistory';
import Pay from './pay';
import Delivery from './delivery';
import PackageDetails from './packageDetails';

const state = {
    name: "",
    last: "",
    mail: "",
    pass: 123
};

function Login() {

    const history = useHistory();

    const [customer, setCustomer] = useState([]);
    let bool: number = 0;
    let [ok, setOk] = useState(false);
    const [show, setShow] = useState(false);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [user, setUser] = useState("");

    const OK = (event: any) => {
        event.preventDefault();
        setOk(true);
    };

    const SetTypeOfUser = (d: string) => {
        
        setUser(d);
        history.push('/Customer')
    }

    const handleSubmit1 = (event: any) => {
        event.preventDefault();
        let customer = {
            "customerId": id,
            "customerName": name,
            "address": address,
            "phone": phone,
            "email": mail,
            "password": pass
        };
        axios.put("https://localhost:44378/api/customer/AddCustomer", customer)
            .then((d: any) => {
                console.log(d.data)
            })
    }


    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`The name you entered was: ${mail}`)

        axios.get(`https://localhost:44378/api/manager/logIn/${mail}/${pass}`)
            .then((d: any) => {
                console.log(d.data)
                if (d.data == "manager") {
                    SetTypeOfUser(d.data);
                    history.push('/Manager')
                }

            })
        axios.get(`https://localhost:44378/api/messenger/logIn/${mail}/${pass}`)
            .then((d: any) => {
                console.log(d.data)
                if (d.data == "messenger") {
                    SetTypeOfUser(d.data);
                    history.push('/Messenger')
                }
            })
        axios.get(`https://localhost:44378/api/customer/logIn/${mail}/${pass}`)
            .then((d: any) => {
                console.log(d.data)
                if (d.data == "customer") {
                    SetTypeOfUser(d.data);
                    setOk(false);
                    
                    history.push('/Customer')
                    history.go(0);
                }
            })
    }

    return (
        <div >
            <Router >

                <Switch>
                    <Route exact path="/" render={() => <SignIn SetTypeOfUser={SetTypeOfUser} />} /> 
                    <Route exact path="/Login" render={() => <SignIn SetTypeOfUser={SetTypeOfUser} />} /> 
                    <Route exact path="/Manager" component={Manager} />
                    <Route path="/Customer" component={Customer} />
                </Switch>
            </Router>
        </div>
    );
}


export default Login;
