const{body}=require("express-validator");
const users = require("../data/users");
const Sequelize = require("sequelize");
const { Users } = require("../database/models");




const validacionesRegistro=[
body("nombre").notEmpty().withMessage("Debes completar este campo"),
body("apellido").notEmpty().withMessage("Debes completar este campo"),
body("dni").notEmpty().withMessage("Debes completar este campo"),
body("email").notEmpty().withMessage("Debes completar este campo").bail()
.isEmail().withMessage("Debe ser un email válido").bail()
 .custom((value,{req})=>{
    
    Users.findOne({where:{email:req.body.email}
    }).then((user) => {       
        console.log(user);
        if(user!=[]&& user!=null){
            throw new Error("El email ya se encuentra registrado");
      }
      console.log(user);

 return true;
});
}), 
body("usuario").notEmpty().withMessage("Debes completar este campo"),
body("fechanacimiento").notEmpty().withMessage("Debes completar este campo"),
body("domicilio").notEmpty().withMessage("Debes completar este campo"),
body("password").notEmpty().withMessage("Debes completar este campo"),
body("confirmarpassword").notEmpty().withMessage("Debes completar este campo")
.custom((value,{ req})=>{
    console.log(user);

    if(req.body.password!==req.body.confirmarpassword){
        throw new Error("La confirmación del password debe ser igual que el password");
    }    
    return true;
})
]

module.exports=validacionesRegistro;