const users = require("../data/users");
const bscryptjs=require("bcryptjs");


const userControllers={
    
    /** Registro de usuario nuevo **/
    proccesRegister:(req,res)=>{
        console.log(req.file)
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
            imagen:req.file ? req.file.filename : "default-image.png",    
        };
        users.saveUser(user);
            res.redirect("/")
        },

    /** Login de usuario **/
    proccesLogin:(req,res)=>{
             let registro=0;
             const usuarioLogeado=users.findByemail(req.body.email)
             /* Se verifica que el email ingresado exista en nuestra vase de datos */
            if(!usuarioLogeado){
                res.render("login",{errors:{
                    email:{msg:"Credenciales inválidas"}},registro: registro})               
            }else{
             /* Si el email existe se verifica el password */

            if(!bscryptjs.compareSync(req.body.password,usuarioLogeado.password)){
               res.render("login",{errors:{
                    email:{msg:"Credenciales inválidas"}},registro: registro})
                }
            }
            delete usuarioLogeado.password;
            req.session.usuarioLogeado=usuarioLogeado;
            res.redirect("/");
    }, 

    
};
 
module.exports=userControllers;