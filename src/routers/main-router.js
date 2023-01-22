const { Router } = require("express")
const mainController = require("../controllers/main-controller");



const router = Router();

router.get("/", mainController.home);

router.get("/productDetail", mainController.productos);

router.get("/productCart", mainController.carrito);

router.get("/login", mainController.login);





const productsRouter = require("./Product-router");
router.use("/dashboard", productsRouter);


module.exports = router;  