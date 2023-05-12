import React, { Component } from "react";
import { Link } from "react-router-dom";


class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],

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

      <>
        <div className=" u-section-row padding-tb">

          <h2 className="das-titulo">Productos</h2>

          {/*<!-- Body Dashboard -->*/}
          <div className="das-body">

            <div className="productDetail">


              {/*<!-- HACER EL FOREACH -->*/}
              {this.state.products.map((product) => {

                return (

                  <article className="productos" key={product.id}>

                    <div className="efect">
                      <img className="img-product efect-img1" src={"http://localhost:3001/images/product/" + product.images[0].name_archive} alt={"Imagen " + product.name} />
                      <img className="img-product efect-img2" src={"http://localhost:3001/images/product/" + product.images[1].name_archive} alt={"Imagen " + product.name} />
                    </div>
                    <div className="div-productos">

                      <h4 className="nombre">{product.name} </h4>

                      <p className="descuento"><s>{product.price}</s> <strong>${product.discount}</strong></p>

                      <div className="botones">

                        <Link to={"/productDetail/" + product.id} className="submit"><span className="fas fa-eye"  ></span></Link>


                        <Link to={"/Edit/:" + product.id} className="submit" ><span className="fas fa-pencil-alt"></span> </Link>



                        <button className="rest" onClick={() => this.deleteProduct(product)}>
                          <span className="far fa-trash-alt"></span></button>


                      </div>


                    </div>
                  </article>
                )
              }
              )}
            </div>
          </div>
          {/*<!-- Fin Body Dashboard -->*/}
        </div>
      </>
    )
  }
}

export default ProductList;
