const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');
const path = require("path");

/*** Se requiere Multer ***/
/* const multer = require("multer");
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/product"),
    filename: (req, file, cb) => {
        cb(null, "image-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
}); */

//Rutas
//Listado de productos
router.get('/', productsAPIController.list);
//Agregar un producto
/* upload.array("images",5), */
router.get("/newproduct", productsAPIController.newproduct);
router.post("/saveproduct", productsAPIController.addProduct);
//Detalle de un producto
router.get('/:id', productsAPIController.detailproduct);


/* //Agregar un producto
router.post('/create', pruductsAPIController.create);
//Modificar un producto
router.put('/update/:id', pruductsAPIController.update);*/

//Eliminar un producto
router.delete('/delete/:id', productsAPIController.eliminar);

module.exports = router;