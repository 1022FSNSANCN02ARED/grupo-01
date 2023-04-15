

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define(
        "ProductSizes",
        {
            id: {
                type: DataTypes.INTEGER, 
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,

                }
        },
        {
            tableName: "products_sizes",
            timestamps: false,
        }
    );

    return model;
};