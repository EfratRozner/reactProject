import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Login from "./login";
import { Console } from "console";
import Pay from './pay';
import Select from 'react-select';
// import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Block } from "@material-ui/icons";
import { Checkbox } from "@mui/material";

function OrderC() {
  const [click, setClick] = useState(false);
  const [pay, setPay] = useState(false);
  const [ok, setOk] = useState(false);
  const [sizeName, setSizeName] = useState("");
  const [sizeId, setSizeId] = useState("");
  const [shopId, setShopId] = useState("");
  const [sizePackage, setSizePackage] = useState(false);

  const add = () => {
    setClick(true);
  }
 
  const size = (value: number) => {
    if(value==1){
      setSizeName("קטנה");
      setSizeId("111");
    }
    else
      if(value==2){
        setSizeName("בינונית");
        setSizeId("222");
      }
      else{
        setSizeName("גדולה");
        setSizeId("333");
      }
    setSizePackage(true);
  }

  const options = [
    { value: '1', label: 'mango' },
    { value: '2', label: 'golf' }
  ]

  const handleChange=(event:any)=>{
    setShopId(event.value);
  }
  let pack={};
  
  const addPackage=(event:any)=>{
    event.preventDefault();
    pack={
      "packageId":"1",
      "shopId":shopId,
      "sizeId":sizeId,
      "arrivalTime":Date.now,
      "invaiteTime":Date.now,
      "customerId":"323111112",
      "breakable":true
    }
    console.log(pack)
    axios.put("https://localhost:44378/api/package/AddPackage",pack)
      .then((d:any) => {
        console.log(d.data)
      })
  }
  
  return (
    <div>
      <Form className="orderForm" onSubmit={addPackage}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>כתובת :</Form.Label>
          <Form.Control type="text" placeholder="כתובת"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> הערות :</Form.Label>
          <Form.Control type="text" placeholder="הערות לכתובת"/>
        </Form.Group>
    
        <Button variant="danger" className="btnOrder" onClick={add}>להוספת חבילה</Button><br />
        {
          click ?
          <div>
            <div className="iconAndChoos">
              {/* <ShoppingCartSharpIcon color="primary"/> */}
              <span className="choos">בחר גודל חבילה</span><br/>
            </div>
            <ToggleButtonGroup type="radio" className="radio" name="options" defaultValue={0}>
              <ToggleButton id="tbg-radio-1" className="toggleButton" title='גודל 30*30*40 עד 5 ק"ג' value={1} onClick={() =>  size(1)}>קטנה</ToggleButton>
              <ToggleButton id="tbg-radio-2" className="toggleButton" title='גודל 40*40*60 עד 10 ק"ג' value={2} onClick={() => size(2)}>בינונית</ToggleButton>
              <ToggleButton id="tbg-radio-3" className="toggleButton" title='גודל 50*50*80 עד 20 ק"ג' value={3} onClick={() => size(3)}>גדולה</ToggleButton>
            </ToggleButtonGroup><br/>
            <input type="Checkbox" name="breakable"/>
            <label>שביר</label>
            <Select options={options} className="select" onChange={(event)=>handleChange(event)}/>
            <Button variant="primary" className="btnOk" type="submit">אישור</Button>
           </div>
           
            : ''
        }<br />
        {
          sizePackage? <span>בחרת חבילה:{sizeName}</span> :''
        } 
       

      </Form>
      <Router>
        <Button variant="primary" className="btnOrder" type="submit" href="/Pay">להזמנה</Button>
        <a href="/Pay"></a>
        <Switch>
          <Route path="/Pay" component={Pay} />
        </Switch>
      </Router>
    </div>
  );
}

export default OrderC;