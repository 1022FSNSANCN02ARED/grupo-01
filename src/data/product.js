const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "productDataBase.json");
const productsFileContent = fs.readFileSync(productsFilePath, "utf-8");
const products = JSON.parse(productsFileContent);

module.exports = products;