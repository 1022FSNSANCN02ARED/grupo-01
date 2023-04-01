

module.exports= (sequelize, DataTypes)=>{
const users = sequelize.define(
    'Users',{
        
        name:DataTypes.STRING,
        lastname: DataTypes.STRING,
        email:DataTypes.STRING,
        identification_document: DataTypes.INTEGER,
        user:DataTypes.INTEGER,
        birthdate:DataTypes.DATE,
        adress:DataTypes.STRING,
        password:DataTypes.STRING,
        
    },
    {
        tableName: 'users',
        timestamps:false
    });
        return users;
};