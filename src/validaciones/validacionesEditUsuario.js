const{body}=require("express-validator");
const users = require("../data/users");



const validacionesEditUsuario=[
    body("nombre").notEmpty().withMessage("Debes completar este campo"),
    body("apellido").notEmpty().withMessage("Debes completar este campo"),
    body("dni").notEmpty().withMessage("Debes completar este campo"),
    body("email").notEmpty().withMessage("Debes completar este campo").bail()
    .isEmail().withMessage("Debe ser un email válido").bail()
    .custom((value,{req})=>{
    //Se controla que el email que se intenta ingresar no exita en otro usuario
    if(users.findByemail(req.body.email) && users.findByemail(req.body.email).id!==req.session.usuarioLogeado.id ){
        throw new Error("El email ya se encuentra registrado");
    };
    return true;
    }),
    body("usuario").notEmpty().withMessage("Debes completar este campo"),
    body("fechanacimiento").notEmpty().withMessage("Debes completar este campo"),
    body("domicilio").notEmpty().withMessage("Debes completar este campo"),
    ]
module.exports=validacionesEditUsuario;
