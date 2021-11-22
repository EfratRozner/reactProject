import react, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import 'bootstrap/dist/css/bootstrap.css';
// import '../App';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Feedback from 'react-bootstrap/Feedback';
import Login from "./login";
import OrderHistory from "./orderHistory";
import UpdateDetails from "./updateDetails";
import Pay from './pay';
import OrderC from "./orderC";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";

function Customer() {
  let match = useRouteMatch();
  return (<div className="customerB">
    <Router >

      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active link-light" aria-current="page" href={`${match.url}/OrderHistory`}>הסטוריית הזמנות</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light" href={`${match.url}/UpdateDetails`}>עדכון פרטים</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light" href={`${match.url}/OrderC`}>התחל הזמנה</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-light" href="/Login">יציאה </a>

        </li>
        <li className="nav-item">
          <a className="nav-link link-light" href={`${match.url}/Pay`}></a>

        </li>
      </ul>
      <Switch>
      {/* <Route exact path="/Login" component={Login} /> */}
        <Route exact path={`${match.path}/OrderHistory`} component={OrderHistory} />
        <Route exact path={`${match.path}/UpdateDetails`} component={UpdateDetails} />
        <Route exact path={`${match.path}/OrderC`} component={OrderC} />
        <Route exact path={`${match.path}/Pay`} component={Pay} />
      </Switch>
    </Router>
  </div>)
}



export default Customer;