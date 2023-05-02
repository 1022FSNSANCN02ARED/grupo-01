const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de productos
router.get('/', productsAPIController.list);
//Agregar un producto

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