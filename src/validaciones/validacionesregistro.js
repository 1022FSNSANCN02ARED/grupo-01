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
 .custom((value,{req})=>{
    const email=req.body.email;
    
    Users.findOne({where:{email:email}})
    .then((user) => {       
        console.log("Hola " + user);
        if(user!=[]&& user!=null){
            throw new Error("El email ya se encuentra registrado");
      }
      console.log("chau" + user);

 return true;
});
}) , 
body("user").notEmpty().withMessage("Debes completar este campo"),
body("birthdate").notEmpty().withMessage("Debes completar este campo"),
body("adress").notEmpty().withMessage("Debes completar este campo"),
body("password").notEmpty().withMessage("Debes completar este campo"),
body("confirmarpassword").notEmpty().withMessage("Debes completar este campo")
.custom((value,{ req})=>{
    

    if(req.body.password!==req.body.confirmarpassword){
        throw new Error("La confirmación del password debe ser igual que el password");
    }    
    return true;
})
]

module.exports=validacionesRegistro;