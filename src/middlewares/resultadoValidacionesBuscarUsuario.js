const { validationResult }=require("express-validator");


function resultadoValidacionesBuscarUsuario(req,res,next){
         const resultadoValidaciones=validationResult(req);
         const oldValues=req.body;
         const registro=0;
         
         if(resultadoValidaciones.errors.length>0){
         
           return res.render("dashboard/editUser",{
                errors:resultadoValidaciones.mapped(),
                oldValues:oldValues, 
                registro:registro,

            })
         }
         next();
}
module.exports=resultadoValidacionesBuscarUsuario;