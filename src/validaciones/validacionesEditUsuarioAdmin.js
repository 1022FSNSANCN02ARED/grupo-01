const{body}=require("express-validator");
const users = require("../data/users");
const { Users } = require("../database/models");




const validacionesEditUsuario=[
    body("first_name").notEmpty().withMessage("Debes completar este campo"),
    body("last_name").notEmpty().withMessage("Debes completar este campo"),
    body("identification_document").notEmpty().withMessage("Debes completar este campo"),
    body("email").notEmpty().withMessage("Debes completar este campo").bail()
    .isEmail().withMessage("Debe ser un email válido").bail()
   // .custom((value,{req})=>{
    //Se controla que el email que se intenta ingresar no exita en otro usuario
    
    /* if(users.findByemail(req.body.email) && users.findByemail(req.body.email).id!==req.session.userToEdit.id ){
        throw new Error("El correo ya se encuentra registrado");
    };
    return true;
    }) */,
    body("user").notEmpty().withMessage("Debes completar este campo"),
    body("birthdate").notEmpty().withMessage("Debes completar este campo"),
    body("adress").notEmpty().withMessage("Debes completar este campo"),
    ]
module.exports=validacionesEditUsuario;
