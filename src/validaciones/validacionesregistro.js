const{body}=require("express-validator");
const users = require("../data/users");


const validacionesRegistro=[
body("nombre").notEmpty().withMessage("Debes completar este campo"),
body("apellido").notEmpty().withMessage("Debes completar este campo"),
body("dni").notEmpty().withMessage("Debes completar este campo"),
body("email").notEmpty().withMessage("Debes completar este campo").bail()
.isEmail().withMessage("Debe ser un email válido").bail()
.custom((value,{req})=>{
if(users.findByemail(req.body.email)){
    throw new Error("El email ya se encuentra registrado");
};
return true;
}),
body("usuario").notEmpty().withMessage("Debes completar este campo"),
body("fechanacimiento").notEmpty().withMessage("Debes completar este campo"),
body("domicilio").notEmpty().withMessage("Debes completar este campo"),
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