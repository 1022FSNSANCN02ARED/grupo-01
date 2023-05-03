import React, { useState,useEffect} from "react";

function UserDetail(props){

    const[user,setuser]=useState(null)

useEffect(()=>{
    const id = props.match.params.id;
    
    fetch(`http://localhost:3001/api/users/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let dataresult= result.data;
          setuser({
            ...dataresult
          });
        });
},[]);

if(user){
return(
   <div className=" u-section-row padding-tb">

<h2 className="das-titulo">Datos de usuario { user.first_name}</h2>

{/*<!-- Body Dashboard -->*/}
<div className="das-body-userDetail">
<table className="table-userDetail">
        
          <th >
            <tr>Id</tr>
            <tr>Nombre</tr>
            <tr>Apellido</tr>
            <tr>Email</tr>
            <tr>Documento</tr>
            <tr>Usuario</tr>
            <tr>Fecha de nacimiento</tr>
            <tr>Rol</tr>
            <tr>Dirección</tr>
          </th>
    
              <td>
                <tr>{user.id}</tr>
                <tr>{user.first_name}</tr>
                <tr>{user.last_name}</tr>
                <tr>{user.email}</tr>
                <tr>{ user.identification_document}</tr>
                <tr>{ user.user}</tr>
                <tr>{ user.birthdate}</tr>
                <tr>{ user.role.role}</tr>
                <tr>{ user.adress}</tr>
          
              </td>
            
      
      </table> 
  {/*<div className="productDetail">*/}

    {/* <h2 className="nombre">Nombre:{ user.first_name}</h2>
    <h2 className="nombre">Apellido:{ user.last_name}</h2>
    <h2 className="nombre">Email:{ user.email}</h2>
    <h2 className="nombre">Documento:{ user.identification_document}</h2>
    <h2 className="nombre">User:{ user.user}</h2>
    <h2 className="nombre">Fecha de nacimiento:{ user.birthdate}</h2>
    <h2 className="nombre">Rol:{ user.role.role}</h2>
    <h2 className="nombre">Dirección:{ user.adress}</h2> */}
</div>




</div>
)}else{
    return(
        <h2>...cargando</h2>
    )
}
}

export default UserDetail
