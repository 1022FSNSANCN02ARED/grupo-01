import React, { Component } from "react";
import {Link} from "react-router-dom";


class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      images:[],
    };
  }

  componentDidMount() {
    this.fetchAllUsers();

  }

  fetchAllUsers() {
    fetch("http://localhost:3001/api/users")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          images:this.state.images,
          users: result.data,
          
        });

      });
  }

  deleteUser(user) {
    fetch("http://localhost:3001/api/users/delete/" + user.id, {
      method: "delete",
    }).then(() => {
      this.fetchAllUsers();
    });
  } 



  render() {
    return (
      <div className=" u-section-row padding-tb">

          <h2 className="das-titulo">Productos</h2>

          {/*<!-- Body Dashboard -->*/}
          <div className="das-body">

            {/*<div className="productDetail">*/}

          
        
        
        <table className="table">
        <thead >
          <tr className="tableheader">
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user) => {
            return (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th>{user.first_name}</th>
                <th>{user.last_name}</th>
                <th>{user.email}</th>
                <th>
                  <Link to={`/userDetail/${user.id}`}>
                    <button className="btn text-success">
                      <i className="fas fa-eye"></i>
                    </button>
                  </Link>
                  <button
                    className="btn text-danger"
                    onClick={() => this.deleteUser(user)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table> 
    </div>
  </div>
  
    );
  
        }
}

export default UserList;
