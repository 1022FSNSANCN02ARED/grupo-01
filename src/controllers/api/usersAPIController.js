const Sequelize = require('sequelize');
const { Users } = require("../../database/models");

const usersAPIController = {
  // Lista de usuarios en el Escritorio
  list: async (req, res) => {
    let users = await Users.findAll()
    let usersToSend = users.map((user) => {
      delete user.dataValues.password
      return user;
    })
    console.log(usersToSend);

    let respuesta = {
      meta: {
        status: 200,
        total: usersToSend.length,
        url: "api/users",
      },


      data: usersToSend,
    };
    res.json(respuesta);
  },

  // Eliminar: elimina un usuario de la base de datos
  destroy: async (req, res) => {
    //Eliminar datos de la tabla usuarios
    await Users.destroy({
      where: {
        id: req.params.id
      }
    })
      .then((confirm) => {
        let respuesta;
        console.log("confirm", confirm);
        if (confirm) {
          respuesta = {
            meta: {
              status: 200,
              total: confirm.length,
              url: "api/users/delete/:id",
            },
            data: confirm,
          };
        } else {
          respuesta = {
            meta: {
              status: 204,
              total: confirm.length,
              url: "api/users/destroy/:id",
            },
            data: confirm,
          };
        }
        res.json(respuesta);
      })
      .catch((error) => {
        console.log(error);
        res.send(error);
      });

  },


}
module.exports = usersAPIController;
