const { validationResult }=require("express-validator");


function resultadoValidacionesLogin(req,res,next){
         const resultadoValidaciones=validationResult(req);
         const oldValues=req.body;
         const registro=0;
         if(resultadoValidaciones.errors.length>0){
            console.log(resultadoValidaciones.mapped());
           return res.render("login",{
                errors:resultadoValidaciones.mapped(),
                oldValues:oldValues, 
                registro:registro,

            })
         }
         next();
}
module.exports=resultadoValidacionesLogin;