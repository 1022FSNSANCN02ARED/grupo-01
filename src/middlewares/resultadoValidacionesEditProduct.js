const { validationResult }=require("express-validator");


    function resultvalidations(req,res,next){ 
        
        const resultvalidations=validationResult(req);
        const oldValues=req.body;
        const oldValuesFiles=req.files;
    
        if (resultvalidations.errors.length>0) {
            return  res.render("dashboard/EditProduct",{
            errors:resultvalidations.mapped(),
            oldValues:oldValues,
            product:oldValues,
            oldValuesFiles
             });   
        }else{
            next();
        };
}
module.exports=resultvalidations;