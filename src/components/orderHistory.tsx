import react, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
function OrderHistory() {
  console.log("order history")
  return(
    
    <div>
      <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>תאריך הזמנה</th>
                    <th>מחיר</th>      
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
    </div>)
  }


export default OrderHistory;