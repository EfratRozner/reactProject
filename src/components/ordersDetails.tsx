import react, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import SearchIcon from '@mui/icons-material/Search';
function ordersDetails() {

return(
    <div>
    {/* <SearchIcon/> */}
      <span className="serchBy">חפש לפי:</span>
      <Form.Group className="mb-3 searchField" controlId="formBasicPassword">
        <Form.Label>שם לקוח</Form.Label>
        <Form.Control type="text" placeholder="מספר זהות לקוח"/>
      </Form.Group>
      <Form.Group className="mb-3 searchField" controlId="formBasicPassword">
        <Form.Label>מספר זהות משלוחן</Form.Label>
        <Form.Control type="text" placeholder="מספר זהות לקוח"/>
      </Form.Group>
      <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>שם משפחה</th>
                        <th>שם פרטי</th>
                        <th>טלפון</th>
                        <th>עיר</th>
                        
                    </tr>
                </thead>
            <tbody>
            <tr>  
                </tr>
                {
                //  item.map((it) => (
                //    <tr key={it.id}><img src={it.image} className="image"></img>
                //         <td >{it.id}</td>
                //         <td>{it.name}</td>
                //         <td>{it.supplier}</td>
                //     </tr>
                // ))
                }
            </tbody>
        </Table>
    </div>
    )
 
}


export default ordersDetails;