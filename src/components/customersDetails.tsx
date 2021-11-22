import react, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

function CustomersDetails() {

    const [value, setValue] = useState(null);
    const [customer, setCustomer] = useState([]);
    //לשליפת הנתונים מהשרת get
    useEffect(() => {
      axios.get('https://localhost:44378/api/customer/GetAll')
        .then((d:any) => {
          console.log(d.data)
          setCustomer(d.data)
        })
    }, [])

    const findId=(event:any)=>{
      console.log(event);
      axios.get(`https://localhost:44378/api/customer/findById/${event}`)
      .then((d:any) => {
          console.log(d.data)
          setCustomer(d.data)
      })
    }

    return(
      <div>
        <SearchIcon/>
        <span className="serchBy">חפש לפי:</span>
        <Form.Group className="mb-3 searchField" controlId="formBasicPassword">
          <Form.Label >תעודת זהות</Form.Label>
          <Form.Control type="text" placeholder="תעודת זהות" onChange={(event:any) => findId(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3 searchField" controlId="formBasicPassword">
          <Form.Label>שם פרטי</Form.Label>
          <Form.Control type="text" placeholder="שם פרטי"/>
        </Form.Group>
        <Form.Group className="mb-3 searchField" controlId="formBasicPassword">
          <Form.Label>טלפון</Form.Label>
          <Form.Control type="text" placeholder="טלפון"/>
        </Form.Group>      
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>שם לקוח</th>
              <th>כתובת</th>
              <th>טלפון</th>
              <th>מייל</th>
              <th>סיסמה</th>
            </tr>
          </thead>
          <tbody>
            {
              customer.map((c:any) => (
                <tr key={c.customerId}>
                  <td >{c.customerId}</td>
                  <td>{c.customerName}</td>
                  <td>{c.address}</td>
                  <td>{c.phone}</td>
                  <td>{c.email}</td>
                  <td>{c.password}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
  )  
}
export default CustomersDetails;