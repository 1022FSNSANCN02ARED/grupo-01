
import React from "react";
import { Route, Switch } from "react-router-dom";



import MainContent from "./MainContent.jsx";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import UserDetail from "./UserDetail";
import UserList from "./UserList";
import Page404 from "../pages/page404.jsx";

function Main() {
  return (
    <Switch>
      {/*Main*/}
      <Route path="/" exact>
        <MainContent />
      </Route>

      {/*Lista de productos*/}
      <Route path="/productList" >
        <ProductList />
      </Route>

      {/*Detalle de productos*/}
      <Route path="/productDetail/:id" component={ProductDetail} />

      {/*Lista de usuarios*/}
      <Route path="/UserList" >
        <UserList />
      </Route>

      {/*Detalle de usuario*/}
      <Route path="/userDetail/:id" component={UserDetail} />

      {/*Página no encontrada*/}
      <Route path="*" component={Page404} />

    </Switch>
  );
}

export default Main;
