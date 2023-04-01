const users = require("../data/users");
const bscryptjs=require("bcryptjs");
const { Users } = require("../database/models");



const userControllers={
    
    /** Registro de usuario nuevo **/
    /* proccesRegister:(req,res)=>{
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
        }, */

        proccesRegister:(req,res)=>{
            const user = {
            name:req.body.nombre,
            lastname:req.body.apellido,
            identification_document:Number(req.body.dni),
            email:req.body.email,
            user:req.body.usuario,
            birthdate: req.body.fechanacimiento,
            adress:req.body.domicilio,
            password:bscryptjs.hashSync(req.body.password,10),     
            /* imagen:req.file ? req.file.filename : "default-image.png" */ 
             }     

            Users.create(user).then((user) => {
              res.redirect("/");
            });
        },

    /** Login de usuario **/
    proccesLogin:(req,res)=>{
             let registro=0;         
             const usuarioLogeado=Users.findOne({where:{email:req.body.email}})
             .then(user=>{
             /* Se verifica que el email ingresado exista en nuestra base de datos */
            if(!user){
             return  res.render("login",{errors:{
                    email:{msg:"Credenciales inválidas"}},registro: registro})               
            }else{
             /* Si el email existe se verifica el password */
            if(!bscryptjs.compareSync(req.body.password,user.dataValues.password)){
             return  res.render("login",{errors:{
                    email:{msg:"Credenciales inválidas"}},registro: registro})
                }
            }
            delete user.dataValues.password;
            req.session.usuarioLogeado=user;
           return res.redirect("/");
        });
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
    return res.render("editarUsuario",{oldValues:oldValues,usuario:oldValues})
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
           // imagen:req.file ? req.file.filename : "default-image.png", 
        };

    //Guardar los datos en la base de datos    
        Users.update(user, {
            where: {
              id:user.id,
            }
          })
        .then((user) => {
            //Se actualizan los datos de req.session 
              Users.findOne({
                    where:{
                    email:req.body.email,
                    }
               })
               .then((user)=>{        
                     req.session.usuarioLogeado=user.dataValues;
                     //Después de guardar los datos, retorna a la misma vista.
                    const oldValues=req.session.usuarioLogeado;
                    return res.render("editarUsuario",{oldValues:oldValues,usuario:oldValues})      
                })
        }) 
    },
    
    /**Edición del perfil del usuario por el administrador **/   
    editUser:(req,res)=>{
        let registro=0;
        res.render("dashboard/editUser",{registro:registro})
    },
    /*Se ingresa el email del usuario a editar por el administrador */
    userToEdit:(req,res)=>{
        Users.findOne({
            where:{
            email:req.body.email,
            }
       })
       .then((user)=>{        
             req.session.usuarioLogeado=user.dataValues;
             //Después de guardar los datos, retorna a la misma vista.
            const oldValues=req.session.usuarioLogeado;
            res.render("dashboard/userToEdit",{oldValues:oldValues,usuario:oldValues})     
        })
        
    },

    editUserAdmin:(req,res)=>{
        //Obtener los datos del formulario y adecuarlos  
            const user = {
                id:req.session.userToEdit.id,
                nombre:req.body.nombre,
                apellido:req.body.apellido,
                dni:Number(req.body.dni),
                email:req.body.email,
                usuario:req.body.usuario,
                fechanacimiento: req.body.fechanacimiento,
                domicilio:req.body.domicilio, 
                imagen:req.session.userToEdit.imagen, 
                credencial:req.body.credencial,          
            };
         //Guardar los datos en la base de datos    
         Users.update(user, {
            where: {
              id:user.id,
            }
          })
        .then((user) => {
            //Se actualizan los datos de req.session 
              Users.findOne({
                    where:{
                    email:req.body.email,
                    }
               })
               .then((user)=>{        
                     //Después de guardar los datos, retorna a la misma vista.
                    const oldValues=user.dataValues;
                    res.render("dashboard/userToEdit",{oldValues:oldValues,usuario:oldValues})       
                })
        }) 

    }        

};
 
module.exports=userControllers;