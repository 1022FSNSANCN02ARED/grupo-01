import React, { useState,useEffect} from "react";
//import { Link } from "react-router-dom";

let arrayColors=[];
let arrayValue=[];
let arrayImages=[];


                
function NewProduct(){
    
let [data,setdata]=useState(null)
let [formData, setFormData]=useState({
  name:"",
  description:"",
  category:"1",
  colors:[],
  sizes:[],
  genre:"1",
  brand:"1",
  material:"1",
  price:0,
  discount:0, 

   /* imagendestacada:"",
  imagen2:"",
  imagen3:"",
  imagen4:"",
  imagen5:"",  */
 })



/* Se obtienen los datos para armar el formulario desde la API*/ 
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


/*Se capturan los datos desde el formulario */
function change(event){
switch(event.target.type){

  case "checkbox":
    if(event.target.name==="colors"){
    if(event.target.checked){
    arrayColors.push(event.target.value);
    setFormData({
      ...formData,
      [event.target.name]:arrayColors});}
      else{
       arrayColors=arrayColors.filter(item=>item!==event.target.value);
    setFormData({
      ...formData,
      [event.target.name]:arrayColors});
      }
    }else{
      if(event.target.checked){
        arrayValue.push(event.target.value);
        setFormData({
          ...formData,
          [event.target.name]:arrayValue});}
          else{
           arrayValue=arrayValue.filter(item=>item!==event.target.value);
        setFormData({
          ...formData,
          [event.target.name]:arrayValue});}
    }
  break;


  case "file":
    arrayImages=[]
    for (let i = 0; i < 5; i++) { 
      let img=event.target.files[i]?event.target.files[i]:"default-image.png";
      arrayImages.push(img );
      
    } 
    /* setFormData({
      ...formData,
      images:arrayImages}); */

  break;

  default:
    setFormData({
      ...formData,
      [event.target.name]:event.target.value})  
  break;
  
  
               
}

 /*  if(event.target.name==="images"){
    console.log(event.target)
    setFormData({
      ...formData,
      
      [event.target.name]:event.target.files})
  
}
  else{ setFormData({
    ...formData,
    
    [event.target.name]:event.target.value})
  } */
   
}


  console.log(formData)
  //console.log(arrayImages)
  
 
/* Se envían los datos para guardar el formulario*/ 

function addProduct(event){
event.preventDefault();
/* console.log(formData)
console.log(arrayImages)
   let sendData=new FormData();
   sendData.append("body",JSON.stringify(formData) );
   sendData.append("images",arrayImages);
    console.log(sendData) */
      
  fetch("http://localhost:3001/api/products/saveproduct",{
    method: "POST",
  // "body":formData,
     headers:{
    //"Accept":"application/json",
    //"Content-Type":"application/x-www-form-urlencoded"
    "Content-Type":"application/json",
     //"content-type": `multipart/form-data; boundary=${formData._boundary}` 

    },  
    body:JSON.stringify(formData)
  //body:sendData,
  

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
    <form  /* method="post" enctype="multipart/form-data"   */
    onSubmit={addProduct} className="formulario bg-gris-claro">

      <div className="w-100">
        <label htmlFor="name" className="form-label">Nombre del producto:</label>
        <input type="text" id="name" name="name"  placeholder="Nombre del Producto" className="w-100" /*value={formData.name}*/   onBlur={change}/>
      </div>

      <div className="w-100">
        <label htmlFor="description" className="form-label">Descripcion producto:</label>
        <textarea name="description" id="description"   placeholder="Descripción" className="w-100" rows="8" cols="50" /*value={formData.description}*/   onBlur={change}></textarea>
      </div>

      <div className="w-100 flex">
        <div className="r-25">
          <label htmlFor="category" className="form-label">Categoría:</label>                     
          <select name="category" id="category" className="form-input" /* value={formData.category} */  onClick={change}>
             
            {data.category.map((cat)=>{ return( <option value={cat.id} key={cat.id}>{cat.type}</option>)})}
        
          </select>
        </div>
        <div className="r-25">
          <label htmlFor="colors" className="form-label" /* value={formData.colors} */>Colores:</label>      
                  <ul className="caja-talles">
                {data.colors.map((color,i)=>{
                return(<li className="div-talles" key={color.id}>
                    {color.color}
                    <input type="checkbox" /* name={`colors${i}`} */ name="colors" id="colors" value={color.id} onChange={change} />
                  </li>)})} 
                </ul>
        </div>
        <div className="r-25">
        
        <label htmlFor="sizes" className="form-label" /* value={formData.sizes} *//* onChange={change} */>Seleccione el Talle:</label>                        
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
          <label htmlFor="genre" className="form-label" >Genero:</label>
          <select name="genre" id="genre" className="form-input" onChange={change} /* value={formData.genre} */>
            {data.genre.map((genre)=>{
                return(<option value={genre.id} key={genre.id} >{genre.genre}</option>)
            })}           
        </select>
         
        </div>

        <div className="r-33">
          <label htmlFor="brand" className="form-label">Marca:</label>
          <select name="brand" id="brand" className="form-input" /* value={formData.brand} */ onClick={change}>
            {data.brand.map((brand)=>{
                return(<option value={brand.id} key={brand.id}>{brand.name}</option>)
            })} 
        </select>
        </div>
        <div className="r-33">
          <label htmlFor="material" className="form-label">Material:</label>
          <select name="material" id="material" className="form-input" /* value={formData.material} */onClick={change}>
            {data.material.map((mat)=>{
                return(<option value={mat.id} key={mat.id}>{mat.type}</option>)
            })}
        </select>
        </div> 
      </div> 
    

      <div className="r-50">
        <label htmlFor="price" className="form-label" >Precio:</label>
        <input type="text" id="price" name="price" placeholder="Precio" className="w-100" /* value={formData.price} */onChange={change}/>
      </div>

      <div className="r-50">
        <label htmlFor="discount" className="form-label">Precio Rebajado:</label>
        <input type="text" id="discount" name="discount" placeholder="Descuento" className="w-100" /* value={formData.discount} */onChange={change}/>
      </div>
       <label htmlFor="images">Imagenes</label>
       <input type="file" name="images" accept="image/png,image/jpeg,image/jpg" className="border-box" multiple onChange={change}/>
       
      {/* <label htmlFor="imagendestacada">Imagen destacada</label>
      <input type="file" name="imagendestacada" accept="image/png,image/jpeg,image/jpg" className="border-box"  onChange={change}/>
      <label htmlFor="imagen2">Imagen 2</label>
      <input type="file" name="imagen2" accept="image/png,image/jpeg,image/jpg" className="border-box" onChange={change}/>
      <label htmlFor="imagen3">Imagen 3</label>
      <input type="file" name="imagen3" accept="image/png,image/jpeg,image/jpg" className="border-box"  onChange={change}/>
      <label htmlFor="imagen4">Imagen 4</label>
      <input type="file" name="imagen4" accept="image/png,image/jpeg,image/jpg" className="border-box"  onChange={change}/>
      <label htmlFor="imagen5">Imagen 5</label>
      <input type="file" name="imagen5" accept="image/png,image/jpeg,image/jpg" className="border-box"  onChange={change}/>
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


/*  <label for="imagendestacada">Imagen destacada</label>
      <input type="file" name="imagendestacada" accept="image/png,image/jpeg,image/jpg" className="border-box"  onChange={change}/>
      <label for="imagen2">Imagen 2</label>
      <input type="file" name="imagen2" accept="image/png,image/jpeg,image/jpg" className="border-box" onChange={change}/>
      <label for="imagen3">Imagen 3</label>
      <input type="file" name="imagen3" accept="image/png,image/jpeg,image/jpg" className="border-box"  onChange={change}/>
      <label for="imagen4">Imagen 4</label>
      <input type="file" name="imagen4" accept="image/png,image/jpeg,image/jpg" className="border-box"  onChange={change}/>
      <label for="imagen5">Imagen 5</label>
      <input type="file" name="imagen5" accept="image/png,image/jpeg,image/jpg" className="border-box"  onChange={change}/>

 */
