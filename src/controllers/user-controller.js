const users = require("../data/users");
const bscryptjs=require("bcryptjs");


const userControllers={
    proccesRegister:(req,res)=>{

        const user = {
            id: Date.now(),
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            dni:Number(req.body.dni),
            email:req.body.email,
            usuario:req.body.usuario,
            fechanacimiento: req.body.fechanacimiento,
            domicilio:req.body.domicilio,
            password:bscryptjs.hashSync(req.body.password,10),
            
            
           /*  image: req.files[0] ? req.files[0].originalname : "default-image.png", */
           
        };
        
    
        // res.send(product);
        users.saveUser(user);
        

            res.redirect("/")
        }
    
};
 
module.exports=userControllers;