const{body}=require("express-validator");
const users = require("../data/users");
const Sequelize = require("sequelize");
const { Users } = require("../database/models");




const validacionesRegistro=[
body("first_name").notEmpty().withMessage("Debes completar este campo"),
body("last_name").notEmpty().withMessage("Debes completar este campo"),
body("identification_document").notEmpty().withMessage("Debes completar este campo"),
body("email").notEmpty().withMessage("Debes completar este campo").bail()
.isEmail().withMessage("Debe ser un email válido").bail()
.custom(value => {
    return Users.findOne({where:{email:value}})
    .then(user => {
      if (user) {
        return Promise.reject('El Email ya se encuentra registrado');
      }
    });
  }), 
body("user").notEmpty().withMessage("Debes completar este campo"),
body("birthdate").notEmpty().withMessage("Debes completar este campo"),
body("adress").notEmpty().withMessage("Debes completar este campo"),
body("password1").notEmpty().withMessage("Debes completar este campo"),
body("confirmarpasswordReg").notEmpty().withMessage("Debes completar este campo")
.custom((value,{ req})=>{
    

    if(req.body.password1!==req.body.confirmarpasswordReg){
        throw new Error("La confirmación del password debe ser igual que el password");
    }    
    return true;
})
]

module.exports=validacionesRegistro;