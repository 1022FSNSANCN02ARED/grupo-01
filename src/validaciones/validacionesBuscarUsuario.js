const{body}=require("express-validator");
const users = require("../data/users");
const { Users } = require("../database/models");



const validacionesBuscarUsuario=[

body("email").notEmpty().withMessage("Debes completar el campo").bail()
             .isEmail().withMessage("Debes ingresar un email válido").bail()
             .custom((value,{req})=>{
                return Users.findOne({where:{email:value}})
                 .then(user => {
              //Se controla que el email que se intenta ingresar no exita en otro usuario
                 if (!user) {
                 return Promise.reject('El Email no se encuentra registrado');
                  }
                }); 
         }),  
                              
]

module.exports=validacionesBuscarUsuario;