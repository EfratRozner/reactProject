import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import axios from "axios";

function UpdateDetails(){
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [customer, setCustomer] = useState({
    "customerId":"",
    "customerName":name,
    "address":address,
    "phone":phone,
    "email":mail,
    "password":pass
  });

  let newCustomer={},c:any;
  
   
  
  
  const find = (id:string)=>{
    axios.get(`https://localhost:44378/api/customer/findById/${id}`)
    .then((d:any) => {
      console.log(d.data)
      
      setCustomer(d.data)
      console.log(customer.customerId)
    })    
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    find('46')
    
    newCustomer={
      "customerId":customer.customerId,
      "customerName":name,
      "address":address,
      "phone":phone,
      "email":mail,
      "password":pass
    }
    console.log(newCustomer);
    
    
    axios.post(`https://localhost:44378/api/customer/UpdateCustomer`,newCustomer)
    .then((d:any) => {
      console.log(d.data)
    })
  }

  // const updatD=(event:any)=>{
  //   console.log(event);
  //   axios.get(`https://localhost:44378/api/customer/findById/${event}`)
  //   .then((d:any) => {
  //       console.log(d.data)
  //       setCustomer(d.data)
  //   })
// }onClick={(event:any) => update(event.target.value)}
    return(
      <div>
        <Form className="orderForm" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="FormLabel">שם משתמש:</Form.Label>
            <Form.Control type="text" placeholder="שם משתמש" onChange={(e) => setName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="FormLabel">כתובת:</Form.Label>
            <Form.Control type="text" placeholder="כתובת" onChange={(e) => setAddress(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="FormLabel">טלפון:</Form.Label>
            <Form.Control type="text" placeholder="טלפון" onChange={(e) => setPhone(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="FormLabel">מייל:</Form.Label>
            <Form.Control type="text" placeholder="מייל" onChange={(e) => setMail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="FormLabel">סיסמה:</Form.Label>
            <Form.Control type="password" placeholder="סיסמה" onChange={(e) => setPass(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" className="btnUpdate" type="submit">לעדכון</Button>
        </Form>
      </div>
  )
}

export default UpdateDetails;