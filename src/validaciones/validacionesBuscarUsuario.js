const{body}=require("express-validator");
const users = require("../data/users");
const { Users } = require("../database/models");



const validacionesBuscarUsuario=[

body("email").notEmpty().withMessage("Debes completar el campo").bail()
             .isEmail().withMessage("Debes ingresar un email válido").bail()
             .custom((value,{req})=>{
                //Se controla que el email que se intenta ingresar no exita en otro usuario
                if(!users.findByemail(req.body.email)){
                    throw new Error("El email no se encuentra registrado");
                };
                return true;
                }),     
                              
]

module.exports=validacionesBuscarUsuario;