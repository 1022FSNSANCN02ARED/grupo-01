'use strict';

const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports= (sequelize, DataTypes)=>{

const product = sequelize.define(
    'Product',{
        id:DataTypes.INTEGER,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.TEXT,
        price: DataTypes.DECIMAL
    },
    {
        tableName: 'productos',
        timestamps:false
    });
        return product;
};