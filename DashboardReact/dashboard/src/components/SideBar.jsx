import React from "react";
import {Link} from "react-router-dom";
import avatar from "../images/logo.png";



function SideBar() {
    return(
        
    <div className="a-panel-menu">
    {/*<!-- Logo -->*/}
    <Link to="/">
        <img width="100%" src={avatar} alt="Logo"/>
    </Link>

    {/*<!-- Menu Admin -->*/}
    <nav className="menu-admin">
        <li><Link to="/"> <i className="fas fa-home"></i> <span>Dashboard</span></Link></li>
        <li><Link to="/productList"> <i className="fas fa-store"></i> <span>Productos</span></Link></li>
        <li><Link to="/newProduct"> <i className="fas fa-store"></i> <span>Agregar producto</span></Link></li>
        <li><Link to="#"> <i className="fas fa-shopping-cart"></i> <span>Pedidos</span></Link></li>
        <li><Link to="/UserList"> <i className="fas fa-users"></i> <span>Usuarios</span></Link></li>
        <li><Link to="/dashboard/page"> <i className="fas fa-store"></i> <span>Paginas</span> </Link></li>
        <li><Link target="_blank" to="/"> <i className="fas fa-sign-out-alt"></i> <span>Ver Tienda</span></Link></li>
        <li><Link to="/deslogear"> <i className="fas fa-sign-out-alt"></i> <span>Cerrar Sesión</span></Link></li>
    </nav>

</div>

)
}
export default SideBar;
