const { Router } = require("express")
const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.home);

router.get("/productDetail", mainController.productos);

router.get("/productCart", mainController.carrito);

router.get("/login", mainController.login);

router.get("/dashboard", mainController.dashboard);

router.get("/editProduct", mainController.editarproducto);

router.get("/product", mainController.productosadmin);


module.exports = router;  