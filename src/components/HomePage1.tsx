import React, { useContext } from 'react';
import TopManu from './TopManu';
import HomePageContent from './HomePageContent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function HomePage1() {
    return (
      <div>
       <TopManu></TopManu>
       <HomePageContent></HomePageContent>
      </div>
    );
  }
  
  export default HomePage1;