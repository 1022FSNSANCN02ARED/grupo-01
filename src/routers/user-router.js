const { Router , urlencoded} = require("express");
const path=require("path");



const router = Router();
const userController = require("../controllers/user-controller");
const validacionesRegistro=require("../validaciones/validacionesregistro");
const validacionesLogin=require("../validaciones/validacionesLogin");
const validacionesEditUsuario=require("../validaciones/validacionesEditUsuario");
const validacionesEditUsuarioAdmin=require("../validaciones/validacionesEditUsuarioAdmin");
const validacionesBuscarUsuario=require("../validaciones/validacionesBuscarUsuario");
const resultadoValidaciones=require("../middlewares/resultadoValidaciones");
const resultadoValidacionesLogin=require("../middlewares/resultadoValidacionesLogin");
const resultadoValidacionesBuscarUsuario=require("../middlewares/resultadoValidacionesBuscarUsuario");
const resultadoValidacionesEdit=require("../middlewares/resultadoValidacionesEdit");
const resultadoValidacionesEditAdmin=require("../middlewares/resultadoValidacionesEditAdmin");
const resultadoValidacionesCreateUserByAdmin=require("../middlewares/resultadoValidacionesCreateUserByAdmin");
const middlewareAdminLogeado=require("../middlewares/middlewareAdminLogeado");
//const middlewareusuarioNoLogeado=require("../middlewares/middlewareUsuarioNoLogeado");
const middlewareusuarioLogeado=require("../middlewares/middlewareUsuarioLogeado");



/* multer */
const multer = require("multer");
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/avatars"),
    filename: (req, file, cb) => {
        cb(null, "image-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
});


/*** procesamiento registro de usuario nuevo***/
router.post("/registroUsuario",upload.single("image"),validacionesRegistro,resultadoValidaciones,userController.processRegister);

/*** procesamiento login de usuario***/
router.post("/login",upload.single("image"),validacionesLogin,resultadoValidacionesLogin,userController.processLogin);

/*** procesamiento logout de usuario***/
router.get("/deslogear",userController.logout)

/*** Edición del perfil del usuario***/
router.get("/editarUsuario",upload.single("image"),middlewareusuarioLogeado,userController.editarUsuario);
router.put("/guardarUsuario",upload.single("image"),middlewareusuarioLogeado,validacionesEditUsuario,resultadoValidacionesEdit,userController.processeditarUsuario);

/*** Edición del perfil del usuario para administrador***/

router.get("/editUser",upload.single("image"),middlewareusuarioLogeado,userController.editUser)
router.post("/userToEdit",upload.single("image"),validacionesBuscarUsuario,resultadoValidacionesBuscarUsuario,userController.userToEdit)
router.put("/editUserAdmin",upload.single("image"),middlewareAdminLogeado,validacionesEditUsuarioAdmin,resultadoValidacionesEditAdmin,userController.editUserAdmin)
router.post("/createUserAdmin",upload.single("image"),middlewareAdminLogeado,validacionesEditUsuarioAdmin,resultadoValidacionesCreateUserByAdmin,userController.createUserAdmin)
module.exports = router;
