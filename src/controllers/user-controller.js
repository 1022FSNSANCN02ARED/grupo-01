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
            imagen:req.file ? req.file.filename : "default-image.png", 
            credencial: "cliente"

        };
        users.saveUser(user);
        res.redirect("/")
        },

    /** Login de usuario **/
    proccesLogin:(req,res)=>{
             let registro=0;
             const usuarioLogeado=users.findByemail(req.body.email)
             /* Se verifica que el email ingresado exista en nuestra base de datos */
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

    /** Logout de usuario **/

    logout:(req,res)=>{
        req.session.destroy()
        res.redirect("/")
    },

    /**Edición del perfil del usuario **/

    editarUsuario:(req,res)=>{
    //obtener datos de usuario logeado
    //enviar datos del usuariologeado a la vista
    const oldValues=req.session.usuarioLogeado;
    res.render("editarUsuario",{oldValues:oldValues,usuario:oldValues})
    },

    /**Proceso de edición del perfil del usuario **/

    procceseditarUsuario:(req,res)=>{
    //Obtener los datos del formulario y adecuarlos    
        const user = {
            id: req.session.usuarioLogeado.id,
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            dni:Number(req.body.dni),
            email:req.body.email,
            usuario:req.body.usuario,
            fechanacimiento: req.body.fechanacimiento,
            domicilio:req.body.domicilio,             
            imagen:req.file ? req.file.filename : "default-image.png", 
        };
        users.saveUserEdited(user);
    //Se actualizan los datos de req.session 
    req.session.usuarioLogeado=user;
    //Después de guardar los datos, retorna a la misma vista.
    const oldValues=req.session.usuarioLogeado;
    res.render("editarUsuario",{oldValues:oldValues,usuario:oldValues})      
    }   
};
 
module.exports=userControllers;