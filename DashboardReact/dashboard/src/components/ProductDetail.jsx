import React, { Component } from "react"


class ProductDetail extends Component {
  constructor(props) {
    super(props);
    const id = props.match.params.id;
    this.state = {
      id,
      product: null,
    };
  };
  //Hace el llamado a la API
  componentDidMount() {
    const id = this.state.id;

    fetch(`http://localhost:3001/api/products/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const product = result.data;
        this.setState({
          id,
          product: product,
        });
      });
  }

  render() {
    if (this.state.product) {
      return (

        <section className="u-section-row padding-tb detalle">
          {/*<!-- Imágenes del Producto -->*/}

          <div className="r-40">
            <img className="img-destacada" src={"http://localhost:3001/images/product/" + this.state.product.images[0].name_archive} alt={"Imagen " + this.state.product.name} />
            <div className="galeria">
              <img className="img-small" src={"http://localhost:3001/images/product/" + this.state.product.images[1].name_archive} alt={"Imagen " + this.state.product.name} />
              <img className="img-small" src={"http://localhost:3001/images/product/" + this.state.product.images[2].name_archive} alt={"Imagen " + this.state.product.name} />
              <img className="img-small" src={"http://localhost:3001/images/product/" + this.state.product.images[3].name_archive} alt={"Imagen " + this.state.product.name} />
              <img className="img-small" src={"http://localhost:3001/images/product/" + this.state.product.images[4].name_archive} alt={"Imagen " + this.state.product.name} />
            </div>
          </div>

          <div className="r-60 center padding-pr">

            {/*<!-- Nombre del Producto -->*/}
            <h2 className="nombre">{this.state.product.name}</h2>

            {/*<!-- Precios -->*/}
            <p className="descuento"><s>{this.state.product.price}</s> <strong>{this.state.product.discount}</strong></p>

            {/*<!-- Descripción -->*/}
            <h5>Descripción:</h5>

            <p className="">{this.state.product.description}</p>
            <br />
            {/*<!-- Caracteristicas -->*/}
            <h5>Caracteristicas:</h5>
            <div className="table" id="results">
              <div className='theader'>
                <div className='table_header'>Genero</div>
                <div className='table_header'>Marca</div>
                <div className='table_header'>Material</div>
              </div>
              <div className='table_row'>
                <div className='table_small'>
                  <div className='table_cell'>Genero</div>
                  <div className='table_cell'>{this.state.product.genre.genre}</div>
                </div>
                <div className='table_small'>
                  <div className='table_cell'>Marca</div>
                  <div className='table_cell'>{this.state.product.brand.name}</div>
                </div>
                <div className='table_small'>
                  <div className='table_cell'>Material</div>
                  <div className='table_cell'>{this.state.product.material.type}</div>
                </div>
              </div>
            </div>

            {/*<!-- Talles disponibles-->*/}
            <div className="w-100 ">

              <h5>Talle disponibles:</h5>
              <ul className="caja-talles">
                {this.state.product.sizes.map((size) => {
                  return (

                    <li className="div-talles" key={size.id}>{size.size}
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>




        </section>
      )
    }
    else {
      return (
        <p>...cargando</p>
      )
    }
  }
}



export default ProductDetail