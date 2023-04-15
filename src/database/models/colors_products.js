

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "ProductColors",
        {
            id: {
                type: DataTypes.INTEGER, 
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,

                }
        },
        {
            tableName: "colors_products",
            timestamps: false,
        }
    );

    return model;
};