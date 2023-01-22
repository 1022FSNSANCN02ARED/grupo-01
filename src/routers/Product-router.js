const { Router } = require("express")
const router = Router();

const productController = require("../controllers/Product-controller");

router.get("/", productController.dashboard);
router.get("/editProduct", productController.editarproducto);

router.get("/product", productController.productosadmin);
router.get("/productdetail", productController.productosadmindetail);
router.get("/newproduct", productController.newproduct);
module.exports = router;  
