const users = require("../data/users");
const bscryptjs = require("bcryptjs");
const { Users } = require("../database/models");



const userControllers = {

    /** Registro de usuario nuevo **/


    processRegister: (req, res) => {

        const user = {
            ...req.body,
            password: bscryptjs.hashSync(req.body.password1, 10),
        }
        Users.create({
            ...user,
            image: req.file ? req.file.filename : "default-image.png",

            role_id: 2
        }).then((user) => {
            res.redirect("/");
        });
    },

    /** Login de usuario **/
    processLogin: (req, res) => {
        console.log(req.body)
        let registro = 0;
        const usuarioLogeado = Users.findOne({ where: { email: req.body.emailLogin } })
            .then(user => {
                /* Se verifica que el email ingresado exista en nuestra base de datos */
                if (!user) {
                    return res.render("login", {
                        errors: {
                            emailLogin: { msg: "Credenciales inválidas" }
                        }, registro: registro
                    })
                } else {
                    /* Si el email existe se verifica el password */
                    if (!bscryptjs.compareSync(req.body.password, user.dataValues.password)) {
                        return res.render("login", {
                            errors: {
                                email: { msg: "Credenciales inválidas" }
                            }, registro: registro
                        })
                    }
                }
                delete user.dataValues.password;
                req.session.usuarioLogeado = user.dataValues;
                return res.redirect("/");
            });
    },

    /** Logout de usuario **/

    logout: (req, res) => {
        req.session.destroy()
        res.redirect("/")
    },

    /**Edición del perfil del usuario **/

    editarUsuario: (req, res) => {
        //obtener datos de usuario logeado
        //enviar datos del usuariologeado a la vista
        const oldValues = req.session.usuarioLogeado;
        return res.render("editarUsuario", { oldValues: oldValues, usuario: oldValues })
    },

    /**Proceso de edición del perfil del usuario **/

    processeditarUsuario: (req, res) => {
        //Obtener los datos del formulario y adecuarlos 

        const user = {
            ...req.body,
            id: req.session.usuarioLogeado.id,
            image: req.file ? req.file.filename : "default-image.png",
        };
        //Guardar los datos en la base de datos    
        Users.update(user, {
            where: {
                id: user.id,
            }
        })
            .then((user) => {
                //Se actualizan los datos de req.session 
                Users.findOne({
                    where: {
                        email: req.body.email,
                    }
                })
                    .then((user) => {
                        req.session.usuarioLogeado = user.dataValues;
                        //Después de guardar los datos, retorna a la misma vista.
                        const oldValues = req.session.usuarioLogeado;
                        return res.render("editarUsuario", { oldValues: oldValues, usuario: oldValues })
                    })
            })
    },

    /* CONTROLADORES DE ADMINISTRADOR */

    /**Edición del perfil del usuario por el administrador **/

    editUser: (req, res) => {
        let registro = 0;
        res.render("dashboard/editUser", { registro: registro })
    },
    /*Se ingresa el email del usuario a editar por el administrador */
    userToEdit: (req, res) => {
        Users.findOne({
            where: {
                email: req.body.email,
            }
        })
            .then((user) => {
                req.session.userToEdit = user.dataValues;

                //Después de guardar los datos, retorna a la misma vista.
                const oldValues = req.session.userToEdit;
                res.render("dashboard/userToEdit", { oldValues: oldValues, usuario: oldValues })
            })

    },


    ///////Guardar datos del usuario editado por el administrador/////////////

    editUserAdmin: (req, res) => {
        //Obtener los datos del formulario y adecuarlos  

        const user = {
            ...req.body,
            id: req.session.userToEdit.id,
            image: req.file ? req.file.filename : "default-image.png",

            //image:req.session.userToEdit.imagen, 

        };

        //Guardar los datos en la base de datos    
        Users.update(user, {
            where: {
                id: user.id,
            }
        })
            .then((user) => {
                //Se actualizan los datos de req.session 
                Users.findOne({
                    where: {
                        email: req.body.email,
                    }
                })
                    .then((user) => {
                        //Después de guardar los datos, retorna a la misma vista.
                        const oldValues = user.dataValues;
                        res.render("dashboard/userToEdit", { oldValues: oldValues, usuario: oldValues })
                    })
            })

    },

    ///////Creación de un usuario nuevo por el administrador/////////////

    createUserAdmin: (req, res) => {

        const user = {
            ...req.body,
            password: bscryptjs.hashSync(req.body.password, 10),
            image: req.file ? req.file.filename : "default-image.png",

        }
        Users.create({
            ...user,

        }).then((user) => {
            res.render("dashboard/dashboard");
        });
    },


};

module.exports = userControllers;