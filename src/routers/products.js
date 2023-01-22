const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productController = require("../controllers/productController");

/*** GET ALL PRODUCTS ***/
router.get("/", productController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productController.create);
router.post("/", productController.store);

/*** GET ONE PRODUCT ***/
router.get("/:id", productController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/:id/edit", productController.edit);
router.put("/:id", productController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productController.destroy);

module.exports = router;