import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function Shop() {
    const [shops, setShops] = useState([]);
    const [shop,setShop] = useState("");
   

    useEffect(() => {
        axios.get('https://localhost:44378/api/shop/GetAll')
        .then((d:any) => {
            console.log(d.data)
            setShops(d.data)
        }) 
    }, [])
    const addShop=()=>{
        let shopTo={
            "shopId":"12",
            "shopName":shop,
            "categoryId":2
        }
        axios.put("https://localhost:44378/api/shop/AddShop",shopTo)
        .then((d:any) => {
          console.log(d.data)
          setShops(d.data)
        })
    }
    const deleteShop=()=>{
        let shopToD={
            "shopId":"12",
            "shopName":shop,
            "categoryId":2
        }
        
        axios.delete(`https://localhost:44378/api/shop/DeleteShop/${"1"}`)
        .then((d:any) => {
          console.log(d.data)
          setShops(d.data)
        })
    }
    return (
        <div>
           <Table responsive>
                <thead>
                    <tr>
                        <th>שם חנות</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    shops.map((s:any) => (
                        <tr key={s.shopId}>
                            <td>{s.shopName}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
            <label>שם חנות</label>
            <input type="text" className="form-control" placeholder="שם חנות" onChange={(e) => setShop(e.target.value)}/>
            <button type="button" className="btn btn-primary btn-block" onClick={()=>addShop()}>הוספת חנות</button>
            <button type="button" className="btn btn-primary btn-block" onClick={()=>deleteShop()}>מחיקת חנות</button>
        </div>
    );
}

export default Shop;