import React, { Component } from "react";


class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      images:[],
    };
  }

  componentDidMount() {
    this.fetchAllProducts();

  }

  fetchAllProducts() {
    fetch("http://localhost:3001/api/products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          images:this.state.images,
          products: result.data,
          
        });

      });
  }

 

   deleteProduct(product) {
    fetch("http://localhost:3001/api/products/delete/" + product.id, {
      method: "delete",
    }).then(() => {
      this.fetchAllProducts();
    });
  } 

  render() {
    return (

    <><div className=" u-section-row padding-tb">
    
        <h2 className="das-titulo">Productos</h2>

{/*<!-- Body Dashboard -->*/}
<div className="das-body">

    <div className="productDetail">


        {/*<!-- HACER EL FOREACH -->*/}
        {this.state.products.map((product) => { 

          return(
            
            <article className="productos" key={product.id}>
              
                <div className="efect">
                     {/*<img className="img-product efect-img1" src={product.images[0].name_archive} alt={"Imagen "+ product.name}/>
                    <img className="img-product efect-img2" src="/images/product/<%= product.images[1].name_archive %>" alt="Imagen remera">
                     */}</div>
                <div className="div-productos">

                    <h4 className="nombre">{product.name} </h4>

                    <p className="descuento"><s>{product.price}</s> <strong>${product.discount}</strong></p>

                    <div className="botones">
                    
                        <a href="../<%= product.id %>/productDetail" className="submit"><span className="fas fa-eye" onClick={() => this.productDetail(product)}  ></span></a>

                    
                        <a href="<%= product.id %>/editProduct" className="submit" onClick={() => this.editProduct(product)}><span className="fas fa-pencil-alt"></span> </a>

                        
                    
                            <button className="rest" onClick={() => this.deleteProduct(product)}>
                              <span className="far fa-trash-alt"></span></button> 
                      
                        
                    </div>


                </div>     
        </article>
         )}
         )}
       {/*} <!-- HACER EL FOREACH -->*/}

    </div>
</div>
{/*<!-- Fin Body Dashboard -->*/}
</div>
        </>
    )
  }
}

export default ProductList;
