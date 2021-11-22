import react,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import axios from 'axios';

function AddUser() {
  
  const[user, setUser] = useState("");
  const[id, setId] = useState("");
  const[name, setName] = useState("");
  const[phone, setPhone] = useState("");
  const[mail, setMail] = useState("");
  const[pass, setPass] = useState("");
  const[obje, setObje] = useState({});

  let manager={},messenger={};

  
  const whichUser = (value: number) => {
    if(value==1){
      setUser("מנהל");
      manager={
        "managerId":id,
        "managerName":name,
        "phone":phone,
        "email":mail,
        "password":pass
      };
    }
    else{
      setUser("משלוחן");
      messenger={
        "messengerId":id,
        "messengerName":name,
        "phone":phone,
        "email":mail,
        "password":pass
      };
    }
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if(user=="מנהל"){
      axios.put("https://localhost:44378/api/manager/AddManager",manager)
      .then((d:any) => {
          console.log(d.data)
      })
    }
    
    else{
      axios.put("https://localhost:44378/api/messenger/AddMessenger",messenger)
      .then((d:any) => {
          console.log(d.data)
      })
    }
  }
  
  
    return(
      <div>
        <form id="signUp" name="signUp" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>מספר זהות</label>
              <input type="text" name="last" className="form-control" placeholder="מספר זהות" onChange={(e) => setId(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>שם משתמש</label>
              <input type="text" name="last" className="form-control" placeholder="שם משפחה" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>טלפון</label>
              <input type="text" name="telephone" className="form-control" placeholder="טלפון" onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>מייל</label>
              <input type="email" name="mail" className="form-control" placeholder="מייל" onChange={(e) => setMail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>סיסמה</label>
              <input type="password" name="pass" className="form-control" placeholder="סיסמה" onChange={(e) => setPass(e.target.value)}/>
            </div>
            <ToggleButtonGroup type="radio" className="radio" name="options" defaultValue={0}>
              <ToggleButton id="tbg-radio-1" className="toggleButton" value={1} onClick={() =>  whichUser(1)}>מנהל</ToggleButton>
              <ToggleButton id="tbg-radio-2" className="toggleButton"  value={2} onClick={() => whichUser(2)}>משלוחן</ToggleButton>
            </ToggleButtonGroup>
            <button type="submit" className="btn btn-primary btn-block">הוספה</button>
        </form>
      </div>
  )  
}
export default AddUser;