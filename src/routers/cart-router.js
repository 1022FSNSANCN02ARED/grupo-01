const { Router } = require("express");
const router = Router();
module.exports = router;

const controller = require("../controllers/cart-controller");
const loggedGuard = require("../middlewares/logged-guard.js");

// /me/cart

router.use(loggedGuard);

router.get("/", controller.viewCart);

router.post("/buy", controller.buyCart);
router.post("/add/:id", controller.addProductToCart);
router.post("/remove/:id", controller.decreaseProductToCart);

router.delete("/:id", controller.clearProductFromCart);
router.delete("/", controller.clearCart);