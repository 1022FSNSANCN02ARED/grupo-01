const path = require("path");

const { Router } = require("express")

const router = Router();

const productController = require("../controllers/product-controller");


/*** Se requiere Multer ***/
const multer = require("multer");
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/product"),
    filename: (req, file, cb) => {
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
router.post("/", upload.single("image"), productController.addProduct);

/*** Editar un PRODUCTO ***/
router.get("/:id/editProduct", productController.editarproducto);
router.put("/:id", productController.actualizar);

/*** Elimina un PRODUCTO***/
router.delete("/:id", productController.eliminar);


module.exports = router;  
