const{body}=require("express-validator");

const validacionesRegistro=[
body("nombre").notEmpty().withMessage("Debes completar este campo"),
body("apellido").notEmpty().withMessage("Debes completar este campo"),
body("dni").notEmpty().withMessage("Debes completar este campo"),
body("email").notEmpty().withMessage("Debes completar este campo").bail()
.isEmail().withMessage("Debe ser un email válido"),
body("usuario").notEmpty().withMessage("Debes completar este campo"),
body("fechanacimiento").notEmpty().withMessage("Debes completar este campo"),
body("domicilio").notEmpty().withMessage("Debes completar este campo"),
body("password").notEmpty().withMessage("Debes completar este campo"),
body("confirmarpassword").notEmpty().withMessage("Debes completar este campo")
]

module.exports=validacionesRegistro;