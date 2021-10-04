import React, { useContext } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function HomePage() {
    return (
      <div>
   
   <Router>
      

      <nav>
          <ul>
            <li>
              <Link to="/" >דף הבית</Link>
            </li>
            <li>
              <Link to="/About">אודות</Link>
            </li>
            <li>
              <Link to="/Products" className="yellow-blue">כל מוצרים</Link>
            </li>
            <li>
              <Link to="/Payment">לתשלום</Link>
            </li>
            <li>
              <Link to="/Management">ניהול</Link>
            </li>
            <li>
              <Link to="/ShopingCart" className="white-blue">עגלת קניות</Link>
            </li>
          </ul>
        </nav>

      <Switch>
        <Route path="#" />
        <Route path="#" />
        <Route path="#"  />
        <Route path="#"  />
        <Route path="#"  />
        <Route path="#"   />
      </Switch>
    </Router>



      </div>
    );
  }
  
  export default HomePage;