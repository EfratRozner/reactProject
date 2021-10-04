import React, { Component, useState } from "react";
import login from "./login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { stat } from "fs";
import { any } from "prop-types";

const state = {
    name:"",
    last:"",
    mail:"",
    pass:123
  };

function SignUp(){
let bool:number=0;
    let [ok,setOk]=useState(false);

const OK=(event:any)=>{
    event.preventDefault();        
    setOk(true);
};


return (
            <div>
                {ok&&bool==0?
                <form name="signUp">
                    <h3>הרשמה</h3>

                    <div className="form-group">
                        <label>שם פרטי</label>
                        <input type="text" name="name"  className="form-control" placeholder="First name" />
                    </div>

                    <div className="form-group">
                        <label>שם משפחה</label>
                        <input type="text" name="last"   className="form-control" placeholder="Last name" />
                    </div>

                    <div className="form-group">
                        <label>כתובת מייל</label>
                        <input type="email" name="mail"   className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>סיסמא</label>
                        <input type="password" name="pass"   className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" >הרשמה</button>
               
                    {/* <Router>
                        Already registered <a> <Link to="/login" >sign in?</Link></a>
                <Switch>
                <Route path="/login" component={login} />
                    </Switch>
                    </Router> */}
                 
                </form>
                : ''}
          {
                !ok&&bool==0?
             
            <form   name="login" >
            <h3>התחברות</h3>

            <div className="form-group">
                <label>כתובת מייל</label>
                <input type="email" name="m"  className="form-control" placeholder="Enter email"  />
            </div>

            <div className="form-group">
                <label>סיסמא</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input name="r" type="checkbox" className="custom-control-input" id="customCheck1"  />
                    <label className="custom-control-label" htmlFor="customCheck1">זכור אותי</label>
                </div>
            </div>


           
            <p className="forgot-password text-right">
                {/* Forgot <a href="#">password?</a> */}
                 <a href=""  onClick={OK}> הרשמה</a>
            </p>

        
            </form>
          
             : '' } 
                  {
                bool==1?
             <button type="submit" className="btn btn-primary btn-block">התחל הזמנה</button>:''
            }
            </div>
        );
    }


export default SignUp;
