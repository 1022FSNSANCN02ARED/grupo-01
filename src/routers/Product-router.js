const { Router } = require("express")

const router = Router();

const productController = require("../controllers/product-controller");

router.get("/", productController.dashboard);

router.get("/product", productController.productosadmin);

router.get("/newproduct", productController.newproduct);

// router.get("/editProduct", productController.editarproducto);
router.get("/:id/editProduct", productController.editarproducto);

// Ver Producto en detalles en la Web
router.get("/:id", productController.detailproduct);

module.exports = router;  
