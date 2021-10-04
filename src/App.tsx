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

// import Login from "./components/login";
import SignUp from "./components/signUp";
import Order from './components/Order';
import HomePage1 from './components/HomePage1'

function App() {
  return (
   <HomePage1></HomePage1>
  );
}

export default App;