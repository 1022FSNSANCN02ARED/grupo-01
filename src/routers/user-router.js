const { Router , urlencoded} = require("express");
const path=require("path");


const router = Router();
const userController = require("../controllers/user-controller");
const validaciones=require("../validaciones/validacionesregistro")
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
router.post("/registroUsuario", upload.single("avatar"),validaciones,userController.proccesRegister);


module.exports = router;
