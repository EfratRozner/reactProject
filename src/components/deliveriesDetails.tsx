import react, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
//import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

function DeliveriesDetails() {

    const [delivery, setDelivery] = useState([]);
    //  לשליפת הנתונים מהשרת get
    useEffect(() => {
        axios.get('https://localhost:44378/api/messenger/GetAll')
          .then((d:any) => {
            console.log(d.data)
            setDelivery(d.data)
          })
    }, [])

    return(
        <div>
            {/* <SearchIcon/> */}
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
                        <th>שם משלוחן</th>
                        <th>טלפון</th>
                        <th>מייל</th>
                        <th>סיסמה</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        delivery.map((d:any) => (
                            <tr key={d.messengerId}>
                                <td >{d.messengerId}</td>
                                <td>{d.messengerName}</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td>{d.password}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}


export default DeliveriesDetails;