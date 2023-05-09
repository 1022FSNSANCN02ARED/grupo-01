const path = require("path");
const products = require("../data/product");
const { body } = require("express-validator");




const validacionesEditProduct= [
        body("name")
            .notEmpty()
            .withMessage("Ingresa el nombre del producto.")
            .bail()
            .matches(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\d]+$/)
            .withMessage("Solo se admiten letras y números."),
        body("description")
            .notEmpty()
            .withMessage("Ingresa la descripción del producto."),
        body("price").notEmpty().withMessage("Ingresa el precio del producto"),
        body("brand")
            .notEmpty()
            .withMessage("Ingresa la marca del producto."),
        body("category").notEmpty().withMessage("Selecciona una categoría."),
        body("material").notEmpty().withMessage("Selecciona un material."),
        body("colors").notEmpty().withMessage("Selecciona un colors."),
        body("sizes").notEmpty().withMessage("Selecciona un sizes."),
       /*  body("discount")
            .optional()
            .custom((value, { req }) => {
                discount = req.body.discount;
                if (!value) {
                    return true;
                } else if (discount >= 1 && discount <= 100) {
                    return true;
                } else {
                    throw new Error("Debe ingresar un número entre 1 y 100");
                }
            }), */
        body("image").custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = [".jpg", ".jpeg",".png"];

            if (file) {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(
                        "Las extensiones de imágenes permitidas son .jpg, jpeg o .png."
                    );
                }
            }

            return true;
        }),
    ]

module.exports = validacionesEditProduct;