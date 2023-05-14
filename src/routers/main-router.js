const { Router, urlencoded } = require("express")
const mainController = require("../controllers/main-controller");
const middlewareAdminLogeado=require("../middlewares/middlewareAdminLogeado");
const middlewareusuarioNoLogeado=require("../middlewares/middlewareUsuarioNoLogeado");



const router = Router();


router.get("/", mainController.home);
router.get("/search", mainController.search);
router.get("/store", mainController.store);
router.get("/storeHombre", mainController.storeHombre);
router.get("/storeMujer", mainController.storeMujer);
router.get("/storeKids", mainController.storeKids);

router.get("/productCart", mainController.carrito);

router.get("/login", middlewareusuarioNoLogeado,mainController.login);

// Ver Producto en detalles en la Web
router.get("/:id/productDetail", mainController.detailproduct);


const productsRouter = require("./Product-router");
const userRouter = require("./user-router");

router.use("/dashboard",middlewareAdminLogeado,productsRouter);
router.use("/user",userRouter);


module.exports = router;  