import React, { useState, useEffect } from "react";

/* import {Link, Route} from "react-router-dom";
import avatar from "../images/logo.png"; */



 function MainContent(){
  const [products, setTotal] = useState(null)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setTotal({
          total: result,
        });
      });
  }, []);


  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setUsers({
          users: result.meta.total,
        });
      });
  }, []);
  /* console.log(products.total) */
  let totalp = 0
  let product = 0;
  let totalUsers = 0

 /*  let continuar=Promise.all([products, users])
  .then(
    totalp = products.total.meta.total, 
    product = products.total.data.pop(),
    totalUsers = users.users
  )
   */
   



if(products && users){
    totalp = products.total.meta.total 
    console.log(products)
    product = products.total.data[0]
    totalUsers = users.users;
    console.log(product)
  return (
    <div className=" u-section-row padding-tb">

      <h2 className="das-titulo">Dashboard</h2>

      {/*<!-- Body Dashboard -->*/}
      <div className="das-body">

        <div className="w-100 flex ">
          <div className="r-50 databox">
            <h3>PRODUCTOS</h3>

            <h3>Productos cargados: {totalp}</h3>
          </div>
          <div className="r-50 databox">
            <h3 >USUARIOS</h3>
            <h3>Usuarios cargados: {totalUsers}</h3>
          </div>
          
          {/* último producto*/}
          
          <article className="productos pd_lastProduct">
            <h4>Ultimo producto cargado</h4>
            <div >
              <img className="img-product efect-img1" src={"http://localhost:3001/images/product/" + product.images[0].name_archive} alt={"Imagen " + product.name} />
            </div>
            <div className="div-productos">

              <h4 className="nombre">{product.name} </h4>

              <p className="descuento"><s>{product.price}</s> <strong>${product.discount}</strong></p>
            </div>
          </article>

        </div>

      </div>
      {/*<!-- Fin Body Dashboard -->*/}

    </div>
  )}else{
    return(
    <h2>...cargando</h2>
  )}
}
export default MainContent;
