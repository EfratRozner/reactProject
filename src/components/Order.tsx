import React, { useState } from "react"
import { ok } from "assert";

function Order() {
   

    let [ok,setOk]=useState(false);//

const OK=(event:any)=>{
    event.preventDefault();        
    setOk(true);
};

let [ok1,setOk1]=useState(false);

const OK1=(event:any)=>{
    event.preventDefault();        
    setOk1(true);
};


    return (
      <div dir="rtl">
     { !ok1?
      <form>
              
                <h3>התחל הזמנה</h3>

                <div className="form-group">
                    <label>יעד החבילה</label>
                    <input type="text" className="form-control" placeholder="Enter target addres" name="" />
                </div>

                <div className="form-group">
                    <label>מוצא החבילה (חנות)</label>
                    <input type="text" className="form-control" placeholder="Enter password" />
                </div>
                <button className="plus" onClick={OK}>
                    <span className="plusElement">+</span>
                </button>
                
                {
                    ok&&!ok1?
                    <form>
                    <h3>מתחלים</h3>
                    <div className="form-group content" >
                        <div className="content text">
                        גודל חבילה
                        </div>
                         <div>
                            <button type="button" className="big"> מעטפה</button>
                            <button type="button" className="big"> קטנה</button>
                            <button type="button" className="big"> בינונית</button>
                            <button type="button" className="big"> גדולה</button>
                        </div>
                    </div>
                    </form>
                        :''
                }
                </form>
             :''
            }
            {
            !ok1?
                <button type="submit" className="btn btn-primary btn-block" onClick={OK1}>סיים הזמנה</button>
            :''
            }
             {ok1?
                 <span>תודה שהזמנת!</span>
                :''

                 }
             
   
      
      </div>
    );
  }

  export default Order;