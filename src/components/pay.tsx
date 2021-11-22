import react, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Pay() {

  const[save, setSave]=useState(false);

  return(
    <div>
    {
      !save?
        <Form className="orderForm">
          <span>הסכום לתשלום:</span>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>מספר אשראי :</Form.Label>
            <Form.Control type="text" placeholder="מספר אשראי"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>תוקף :</Form.Label>
            <Form.Control type="text" placeholder="תוקף"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>שלוש ספרות בגב הכרטיס :</Form.Label>
            <Form.Control type="text" placeholder="שלוש ספרות בגב הכרטיס"/>
          </Form.Group>
          <Button variant="primary" className="btnOrder" type="submit" onClick={()=>{setSave(true)}}>אישור</Button>
        </Form>
        :
        <span className="save">ההזמנה בוצעה בהצלחה בקרוב היא תגיע לביתך</span> 
    }
    </div>)
  }

export default Pay;