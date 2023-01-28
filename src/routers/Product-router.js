const { Router } = require("express")

const router = Router();

const productController = require("../controllers/product-controller");

router.get("/", productController.dashboard);

router.get("/product", productController.productosadmin);

router.get("/newproduct", productController.newproduct);

// router.get("/editProduct", productController.editarproducto);
router.get("/:id/editProduct", productController.editarproducto);

// Ver Lista de Producto en Escritorio
router.get("/productDetail/:id", productController.productos);

module.exports = router;  
