/*import logo from '../images/logo.png';*/
import React from "react";
import { Route, Switch } from "react-router-dom";


import SideBar from "./SideBar.jsx";
import MainContent from "./MainContent.jsx";
import ProductList from "./ProductList";
import UserList from "./UserList";
import Page404 from "../pages/page404.jsx";

function Main () {
  return (
<Switch>
    <Route path="/" exact>
    
    <MainContent/>

    </Route>

    <Route path="/ProductList" >
    
      <ProductList/>
     
    </Route>
    <Route path="/UserList" >
    
      <UserList/>
     
    </Route>
    <Route path="*" component={Page404} />


</Switch>
  );
}

export default Main;
