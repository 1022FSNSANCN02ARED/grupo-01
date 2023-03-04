const { Router , urlencoded} = require("express");
const path=require("path");


const router = Router();
const userController = require("../controllers/user-controller");
const validacionesRegistro=require("../validaciones/validacionesregistro");
const validacionesLogin=require("../validaciones/validacionesLogin");
const validacionesEditUsuario=require("../validaciones/validacionesEditUsuario");
const resultadoValidaciones=require("../middlewares/resultadoValidaciones");
const resultadoValidacionesLogin=require("../middlewares/resultadoValidacionesLogin");
const resultadoValidacionesEdit=require("../middlewares/resultadoValidacionesEdit");
const middlewareAdminLogeado=require("../middlewares/middlewareAdminLogeado");
const middlewareusuarioNoLogeado=require("../middlewares/middlewareusuarioNoLogeado");
const middlewareusuarioLogeado=require("../middlewares/middlewareusuarioLogeado");



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
router.post("/registroUsuario",upload.single("imagen"),validacionesRegistro,resultadoValidaciones,userController.proccesRegister);

/*** procesamiento login de usuario***/
router.post("/login",urlencoded(),validacionesLogin,resultadoValidacionesLogin,userController.proccesLogin);

/*** procesamiento logout de usuario***/
router.get("/deslogear",userController.logout)

/*** Edición del perfil del usuario***/
router.get("/editarUsuario",upload.single("imagen"),middlewareusuarioLogeado,userController.editarUsuario);
router.put("/guardarUsuario",upload.single("imagen"),middlewareusuarioLogeado,validacionesEditUsuario,resultadoValidacionesEdit,userController.procceseditarUsuario);

module.exports = router;
