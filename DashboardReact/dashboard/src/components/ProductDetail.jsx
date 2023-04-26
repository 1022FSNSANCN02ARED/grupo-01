import React, {Component} from "react"


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
            product:product,
          });
        });
    }

render(){
  if(this.state.product){
  return(
    
    <section class="u-section-row padding-tb detalle">
        {/*<!-- Imágenes del Producto -->*/}

      <div class="r-40">
        <img class="img-destacada" src={"http://localhost:3001/images/product/" + this.state.product.images[0].name_archive} />
        <div class="galeria">
          <img class="img-small" src={"http://localhost:3001/images/product/" + this.state.product.images[1].name_archive} />
              <img class="img-small" src={"http://localhost:3001/images/product/" + this.state.product.images[2].name_archive}  />
              <img class="img-small" src={"http://localhost:3001/images/product/" + this.state.product.images[3].name_archive} />
              <img class="img-small" src={"http://localhost:3001/images/product/" + this.state.product.images[4].name_archive}  />
        </div>
      </div>

      <div class="r-60 center padding-pr">

        {/*<!-- Nombre del Producto -->*/}
        <h2 class="nombre">{ this.state.product.name}</h2>
        
        {/*<!-- Precios -->*/}
        <p class="descuento"><s>{this.state.product.price}</s> <strong>{this.state.product.discount}</strong></p>

        {/*<!-- Descripción -->*/}
        <h5>Descripción:</h5>

        <p class="">{this.state.product.description}</p>
        <br/ >
        {/*<!-- Caracteristicas -->*/}
          <h5>Caracteristicas:</h5>
          <div class="table" id="results">
            <div class='theader'>
              <div class='table_header'>Genero</div>
              <div class='table_header'>Marca</div>
              <div class='table_header'>Material</div>
            </div>
            <div class='table_row'>
              <div class='table_small'>
                <div class='table_cell'>Genero</div>
                <div class='table_cell'>{this.state.product.genre.genre}</div>
              </div>
              <div class='table_small'>
                <div class='table_cell'>Marca</div>
                <div class='table_cell'>{this.state.product.brand.name}</div>
              </div>
              <div class='table_small'>
                <div class='table_cell'>Material</div>
                <div class='table_cell'>{this.state.product.material.type}</div>
              </div>
            </div>
          </div>

        {/*<!-- Talles disponibles-->*/}
        <div class="w-100 ">
                    
          <h5>Talle disponibles:</h5>
          <ul class="caja-talles">
          {this.state.product.sizes.map((size) => { 
          return(
           
                <li class="div-talles">{size.size}
                </li>
          )})}
            </ul>
        </div>
                 
          </div>            
            

      

    </section>
  )}
  else{
    return(
      <p>...cargando</p>
    )
  }
}
}

   

  export default ProductDetail