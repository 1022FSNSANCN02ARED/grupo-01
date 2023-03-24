const { validationResult }=require("express-validator");


    function resultvalidations(req,res,next){ 
        
        const resultvalidations=validationResult(req);
        const oldValues=req.body;
    
        if (resultvalidations.errors.length>0) {
            return  res.render("dashboard/userToEdit",{
            errors:resultvalidations.mapped(),
            oldValues:oldValues,
            usuario:oldValues,
             });   
        }else{
            next();
        };
}
module.exports=resultvalidations;