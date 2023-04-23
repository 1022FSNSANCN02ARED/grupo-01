const{body}=require("express-validator");
const users = require("../data/users");
const bscryptjs=require("bcryptjs");


const validacionesLogin=[

body("emailLogin").notEmpty().withMessage("Debes completar el campo").bail()
             .isEmail().withMessage("Debes ingresar un email válido").bail()
                              
]

module.exports=validacionesLogin;