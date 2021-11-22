import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function OrdersToDelivery() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:44378/api/messenger/GetAllOrders')
        .then((d:any) => {
            console.log(d.data)
            setOrders(d.data)
        }) 
    }, [])

    return (
        <div>
            <span className="serchBy">חפש לפי:</span>
            <Form.Group className="mb-3 searchField" controlId="formBasicPassword">
                <Form.Label>שם משפחה</Form.Label>
                <Form.Control type="text" placeholder="שם משפחה"/>
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
                        <th>כתובת</th>
                        <th>שם המזמין</th>
                        <th>טלפון המזמין</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    orders.map((o:any) => (
                        <tr key={o.packageToTransportId}>
                            <td >{o.packageToTransportId}</td>
                            <td>{o.address}</td>
                            <td>{o.customerName}</td>
                            <td>{o.phone}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default OrdersToDelivery;