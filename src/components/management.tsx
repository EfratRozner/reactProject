import react, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Management() {
    const[small, setSmall] = useState("");
    const[medium, setMedium] = useState("");
    const[big, setBig] = useState("");
    const[basic, setBasic] = useState("");
    const[height, setHeight] = useState("");
    const[width, setWidth] = useState("");
    const[depth, setDepth] = useState("");

    let s={
        "sizeId":111,
        "sizeName":"חבילה קטנה",
        "price":Number.parseInt(small),
        "height":height,
        "width":width,
        "depth":depth
    }
    let m={
        "sizeId":222,
        "sizeName":"בינונית",
        "price":Number.parseInt(medium),
        "height":height,
        "width":width,
        "depth":depth
    }
    let b={
        "sizeId":333,
        "sizeName": "גדולה",
        "price":Number.parseInt(big) 
    }
    let base={
        "sizeId":444,
        "sizeName": "בסיס",
        "price":Number.parseInt(basic)
    }
  
   

    const handleSubmit = () => {       
        axios.post("https://localhost:44378/api/size/UpdateSize",s)
          .then((d:any) => {
            console.log(d.data)
        })
        axios.post("https://localhost:44378/api/size/UpdateSize",m)
          .then((d:any) => {
            console.log(d.data)
        })
        axios.post("https://localhost:44378/api/size/UpdateSize",b)
          .then((d:any) => {
            console.log(d.data)
        })
        axios.post("https://localhost:44378/api/size/UpdateSize",base)
          .then((d:any) => {
            console.log(d.data)
        })
        //   axios.post("https://localhost:44378/api/size/UpdateSize",m)
        //   .then((d:any) => {
        //       console.log(d.data)
        //   })
        //   axios.post("https://localhost:44378/api/size/UpdateSize",b)
        //   .then((d:any) => {
        //       console.log(d.data)
        //   })
        }
      

    // //לשליפת הנתונים מהשרת get
    // useEffect(() => {
    //     axios.get('https://localhost:44378/api/size/GetAll')
    //       .then((d:any) => {
    //         console.log(d.data)
    //         setSize(d.data)
    //       })
    // }, [])
  
    return(
        <div>
            <Form className="orderForm" >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >חבילה קטנה</Form.Label>
                    <Form.Control type="text" placeholder="חבילה קטנה" onChange={(e) => setSmall(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>אורך</Form.Label>
                    <Form.Control type="text" placeholder="אורך" onChange={(e) => setHeight(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>רוחב</Form.Label>
                    <Form.Control type="text" placeholder="רוחב" onChange={(e) => setWidth(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>עומק</Form.Label>
                    <Form.Control type="text" placeholder="עומק" onChange={(e) => setDepth(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>חבילה בינונית</Form.Label>
                    <Form.Control type="text" placeholder="חבילה בינונית" onChange={(e) => setMedium(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>חבילה גדולה</Form.Label>
                    <Form.Control type="text" placeholder="חבילה גדולה" onChange={(e) => setBig(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>אורך</Form.Label>
                    <Form.Control type="text" placeholder="אורך" onChange={(e) => setHeight(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>רוחב</Form.Label>
                    <Form.Control type="text" placeholder="רוחב" onChange={(e) => setWidth(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>עומק</Form.Label>
                    <Form.Control type="text" placeholder="עומק" onChange={(e) => setDepth(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>מחיר בסיסי</Form.Label>
                    <Form.Control type="text" placeholder="מחיר בסיסי" onChange={(e) => setBasic(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>אורך</Form.Label>
                    <Form.Control type="text" placeholder="אורך" onChange={(e) => setHeight(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>רוחב</Form.Label>
                    <Form.Control type="text" placeholder="רוחב" onChange={(e) => setWidth(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>עומק</Form.Label>
                    <Form.Control type="text" placeholder="עומק" onChange={(e) => setDepth(e.target.value)}/>
                </Form.Group>
                <Button variant="danger" className="btnOrder" onClick={handleSubmit}>לעדכון</Button><br/>
            </Form>
        </div>)    
}
export default Management;