const express = require('express');
const router = express.Router();
const pruductsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de productos
router.get('/', pruductsAPIController.list);
//Detalle de un producto
router.get('/:id', pruductsAPIController.detailproduct);
/* //Agregar un producto
router.post('/create', pruductsAPIController.create);
//Modificar un producto
router.put('/update/:id', pruductsAPIController.update);*/

//Eliminar un producto
router.delete('/delete/:id', pruductsAPIController.eliminar);

module.exports = router;