const { validationResult }=require("express-validator");


    function resultvalidations(req,res,next){ 
        
        const resultvalidations=validationResult(req);
        const oldValues=req.body;
        let registro=1;
        if (resultvalidations.errors.length>0) {
            return  res.render("dashboard/editUser",{
            errors:resultvalidations.mapped(),
            oldValues:oldValues,
            usuario:oldValues,
            registro:registro,
             });   
        }else{
            next();
        };
}
module.exports=resultvalidations;