import React, { useState } from "react";
import Manager from './manager';
import Customer from './customer';
import { BrowserRouter as Router, Switch, Route, Link, withRouter, useHistory } from "react-router-dom";
import { stat } from "fs";
import { any } from "prop-types";
import axios from "axios";
import createHistory from 'history/createBrowserHistory';

const state = {
    name: "",
    last: "",
    mail: "",
    pass: 123
};

function SignIn(props:any) {

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
                    props.SetTypeOfUser(d.data);
                    history.push('/Manager')
                }

            })
        axios.get(`https://localhost:44378/api/messenger/logIn/${mail}/${pass}`)
            .then((d: any) => {
                console.log(d.data)
                if (d.data == "messenger") {
                    props.SetTypeOfUser(d.data);
                    history.push('/Messenger')
                }
            })
        axios.get(`https://localhost:44378/api/customer/logIn/${mail}/${pass}`)
            .then((d: any) => {
                console.log(d.data)
                if (d.data == "customer") {
                    props.SetTypeOfUser(d.data);
                    setOk(false);
                    history.push('/Customer')
                    history.go(0);
                }
            })
    }

    return (
        <div id="back" dir="rtl">
            <h1 className="come">ברוכים הבאים!</h1>
            <p className="p">התחברו לפורטל המשלוחים של GetPackage
                ותוכלו לנהל את המשלוחים שלכם בקלות ובמהירות.</p>
            {ok && bool == 0 ?

                <form id="signUp" name="signUp" onSubmit={handleSubmit1}>
                    <div className="form-group">
                        <label>מספר זהות</label>
                        <input type="text" name="last" className="form-control" placeholder="מספר זהות" onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>שם משתשמש</label>
                        <input type="text" name="last" className="form-control" placeholder="שם משתמש" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>כתובת</label>
                        <input type="text" name="name" className="form-control" placeholder="כתובת" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>טלפון</label>
                        <input type="text" name="telephone" className="form-control" placeholder="טלפון" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>מייל</label>
                        <input type="email" name="mail" className="form-control" placeholder="מייל" onChange={(e) => setMail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>סיסמה</label>
                        <input type="password" name="pass" className="form-control" placeholder="סיסמה" onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block" >הרשמה</button>
                </form>
                : ''}
            {
                !ok && bool == 0 ?

                    <form id="signUp" name="login" onSubmit={handleSubmit} >
                        <div id="signUp" className="form-group">
                            <label>מייל</label>
                            <input type="email" name="m" className="form-control" placeholder="Enter email" onChange={(e) => setMail(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>סיסמה</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPass(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input name="r" type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">זכור אותי</label>
                                <button type="submit" className="btn btn-primary btn-block">התחברות</button>
                            </div>
                        </div>
                        <p className="forgot-password text-right">Forgot <a href="#">password?</a>
                            <a href="" onClick={OK}>הרשמה</a>
                        </p>
                    </form>
                    : ''}
            {
                bool == 1 ?
                    <button type="submit" className="btn btn-primary btn-block">התחל הזמנה</button> : ''
            }

        </div>
    );
}


export default SignIn;
