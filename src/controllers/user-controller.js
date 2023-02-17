const users = require("../data/users");
const bscryptjs=require("bcryptjs");


const userControllers={
    
    /** Registro de usuario nuevo **/
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
        users.saveUser(user);
            res.redirect("/")
        },

    /** Login de usuario **/
    proccesLogin:(req,res)=>{
             let registro=0;
            if(!users.findByemail(req.body.email)){
                console.log("hola")
                res.render("login",{errors:{
                    email:{msg:"Credenciales inválidas"}},registro: registro})
                
            }else{
            if(!bscryptjs.compareSync(req.body.password,users.findByemail(req.body.email).password)){
               res.render("login",{errors:{
                    email:{msg:"Credenciales inválidas"}},registro: registro})
                }
            }
res.redirect("/");
    }, 

    
};
 
module.exports=userControllers;