// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import HomePage from './components/HomePage'
// import SimpleDialog from './components/login'
// import SignUp from './components/signUp'

// function App() {
//   return (
//     <div className="App">
//        <HomePage></HomePage>
//        <SimpleDialog></SimpleDialog>
//        <SignUp></SignUp>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage   from './components/HomePage';
// import Login from "./components/login";
import SignUp from "./components/signUp";
import Order from './components/Order';

function App() {
  return (
  
  
  // <Router>
  //   <div className="App">
  //     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  //       <div className="container">
  //         <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
  //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  //           <ul className="navbar-nav ml-auto">
  //             <li className="nav-item">
  //               <Link className="nav-link" to={"/sign-in"}>Login</Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
        {/* <SignUp></SignUp> */}
        <Order></Order>
  {/* //         <Switch>
  //           <Route exact path='/' component={Login} />
  //           <Route path="/sign-in" component={Login} />
  //           <Route path="/sign-up" component={SignUp} />
  //         </Switch> */}
        </div>
     </div>
  //   </div></Router>
  );
}

export default App;