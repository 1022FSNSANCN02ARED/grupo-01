const { Router, urlencoded } = require("express")
const mainController = require("../controllers/main-controller");



const router = Router();

router.get("/", mainController.home);
router.get("/store", mainController.store);

router.get("/productCart", mainController.carrito);

router.get("/login", mainController.login);

// Ver Producto en detalles en la Web
router.get("/:id/productDetail", mainController.detailproduct);


const productsRouter = require("./Product-router");

router.use("/dashboard", productsRouter);


module.exports = router;  