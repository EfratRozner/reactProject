import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function ShopsToDelivery() {

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
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>שם חנות</th>
                        <th>כמות משלוחים</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    orders.map((o:any) => (
                        <tr key={o.packageToTransportId}>
                            <td >{o.packageToTransportId}</td>
                            <td>{o.address}</td>
                            <td>{o.customerName}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ShopsToDelivery;