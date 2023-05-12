const path = require("path");

const { Router , urlencoded} = require("express")

const router = Router();
const productController = require("../controllers/product-controller");


const validacionesCreateProduct= require("../validaciones/validacionesCreateProduct");
const validacionesEditProduct= require("../validaciones/validacionesEditProduct");
const resultadoValidacionesCreateProduct= require("../middlewares/resultadoValidacionesCreateProduct");
const resultadoValidacionesEditProduct= require("../middlewares/resultadoValidacionesEditProduct");


/*** Se requiere Multer ***/
const multer = require("multer");
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/product"),
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, "image-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
});


router.get("/", productController.dashboard);

router.get("/product", productController.productosadmin);


/*** Crear un PRODUCTO ***/
router.get("/newproduct", productController.newproduct);
router.post("/", upload.array("images",5), validacionesCreateProduct, resultadoValidacionesCreateProduct, productController.addProduct);

/*** Editar un PRODUCTO ***/
router.get("/:id/editProduct",productController.editarproducto);
 
router.put("/:id",upload.array("images",5), productController.actualizar);

/*** Elimina un PRODUCTO***/
router.delete("/:id", productController.eliminar);

module.exports = router;  
