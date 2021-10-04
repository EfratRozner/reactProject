import React, { Component } from "react";

export default class Login extends Component {


  
    // const onSubmit=()=>{

    // }
    render() {
        return (
            <div>
                {/* <div className="divform">
                 <h1>ברוכים הבאים</h1>
                <h3>התחברו לפורטל המשלוחים של take it easy ותוכלו לנהל את המשלוחים שלכם בקלום ובמהירות</h3>
                </div> */}
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    {/* Forgot <a href="#">password?</a> */}
                </p>
   
            </form>
    
           
            </div>
            
       
        );
    }
}