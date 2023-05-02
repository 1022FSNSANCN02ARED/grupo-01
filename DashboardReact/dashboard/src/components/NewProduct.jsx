import React, { useState,useEffect} from "react";
//import { Link } from "react-router-dom";

                
function NewProduct(){
    
let [data,setdata]=useState(null)
let [formData, setFormData]=useState({
  name:"",
  description:"",
  category:"",
  colors:[],
  sizes:[],
  genre:"",
  brand:"",
  material:[],
  price:0,
  discount:0 
 })
console.log(formData)


/* Se obtienen los datos para armar el formulario*/ 
useEffect(()=>{
    fetch(`http://localhost:3001/api/products/newproduct`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          let dataresult= result.data;
          setdata({
            ...dataresult
          });
        });
},[]);

function change(event){
  setFormData(
    ...formData,
    {[event.target.name]:event.target.value})
}

/* Se envían los datos para guardar el formulario*/ 

function addProduct(event){
  event.preventDefault();
 /* setFormData({
  name:event.target.name.value,
  description:event.target.description.value,
  category:event.target.category.value,
  colors:event.target.colors.value,
  sizes:event.target.sizes.value,
  genre:event.target.genre.value,
  brand:event.target.brand.value,
  material:event.target.material.value,
  price:event.target.price.value,
  discount:event.target.discount.value
})  */

/* let formulario={
  name:event.target.name.value,
  description:event.target.description.value,
  category:event.target.category.value,
  colors:event.target.colors.value,
  sizes:event.target.sizes.value,
  genre:event.target.genre.value,
  brand:event.target.brand.value,
  material:event.target.material.value,
  price:event.target.price.value,
  discount:event.target.discount.value
} */
console.log(formData)
  fetch("http://localhost:3001/api/products/saveproduct",{
    method: "POST",
  // "body":formData,
    headers:{
      //"Accept":"application/json",
    //"Content-Type":"application/x-www-form-urlencoded"
    "Content-Type":"application/json"
     // "content-type":"multipart/form-data"

    },
  body:JSON.stringify(formData),
  

  }).then((result)=>{
    /* if(result){
    <Link to="/productList"></Link>} */}
  );
}



if(!data){ 
  return(
<p>...cargando</p>)
}else{
  return(
            
<div className=" u-section-row padding-tb">
<h2 className="das-titulo">Agregar Productos</h2>
{/*<!-- Body Dashboard -->*/}
<div className="das-body">

   {/* <!-- Formulario Crear Producto -->*/}
    <form  method="post" enctype="multipart/form-data"  
    onSubmit={addProduct} className="formulario bg-gris-claro">

      <div className="w-100">
        <label for="name" className="form-label">Nombre del producto:</label>
        <input type="text" id="name" name="name"  placeholder="Nombre del Producto" className="w-100" /*value={formData.name}*/   onChange={change}/>
      </div>

      <div className="w-100">
        <label for="description" className="form-label">Descripcion producto:</label>
        <textarea name="description" id="description"   placeholder="Descripción" className="w-100" rows="8" cols="50" /*value={formData.description}*/   onChange={change}></textarea>
      </div>

      <div className="w-100 flex">
        <div className="r-25">
          <label for="category" className="form-label">Categoría:</label>                     
          <select name="category" id="category" className="form-input" /* value={formData.category} */  onChange={change}>
             
            {data.category.map((cat)=>{ return( <option value={cat.id} key={cat.id}>{cat.type}</option>)})}
        
          </select>
        </div>
        <div className="r-25">
          <label for="colors" className="form-label" /* value={formData.colors} */>Colores:</label>      
                  <ul className="caja-talles">
                {data.colors.map((color)=>{
                return(<li className="div-talles" key={color.id}>
                    {color.color}
                    <input type="checkbox" name="colors" id="colors" value={color.id} onChange={change} />
                  </li>)})} 
                </ul>
        </div>
        <div className="r-25">
        
        <label for="sizes" className="form-label" /* value={formData.sizes} */onChange={change}>Seleccione el Talle:</label>                        
              <ul className="caja-talles">
              {data.sizes.map((size)=>{
                return(
                                <li className="div-talles" key={size.id}>{size.size}
                                   <input type="checkbox" name="sizes" id="sizes" value={size.id} onChange={change}/>
                                </li>
                               )})} 
              </ul>
        </div>
        
      </div>
      <div className="w-100 flex">
        <div className="r-33">
          <label for="genre" className="form-label">Genero:</label>
          <select name="genre" id="genre" className="form-input" /* value={formData.genre} */onChange={change}>
            {data.genre.map((genre)=>{
                return(<option value={genre.id} key={genre.id}>{genre.genre}</option>)
            })}           
        </select>
         
        </div>

        <div className="r-33">
          <label for="brand" className="form-label">Marca:</label>
          <select name="brand" id="brand" className="form-input" /* value={formData.brand} */ onChange={change}>
            {data.brand.map((brand)=>{
                return(<option value={brand.id} key={brand.id}>{brand.name}</option>)
            })} 
        </select>
        </div>
        <div className="r-33">
          <label for="material" className="form-label">Material:</label>
          <select name="material" id="material" className="form-input" /* value={formData.material} */onChange={change}>
            {data.material.map((mat)=>{
                return(<option value={mat.id} key={mat.id}>{mat.type}</option>)
            })}
        </select>
        </div> 
      </div> 
    

      <div className="r-50">
        <label for="price" className="form-label" >Precio:</label>
        <input type="text" id="price" name="price" placeholder="Precio" className="w-100" /* value={formData.price} */onChange={change}/>
      </div>

      <div className="r-50">
        <label for="discount" className="form-label">Precio Rebajado:</label>
        <input type="text" id="discount" name="discount" placeholder="Descuento" className="w-100" /* value={formData.discount} */onChange={change}/>
      </div>

{/* 
      <label for="images">Imagen destacada</label>
      <input type="file" name="images" accept="image/png,image/jpeg,image/jpg" className="border-box" multiple/>

 */}
      <div className="w-100 botones padding-tb">
        <button type="reset" className="rest"><span className="far fa-trash-alt"> </span> Limpiar</button>
        <button type="submit" className="submit">GUARDAR</button>
      </div>

    </form>
    {/*<!-- Fin Formulario Crear Producto -->*/}

</div>
{/*<!-- Fin Body Dashboard -->*/}

</div>
        )}     
    }

    export default NewProduct
