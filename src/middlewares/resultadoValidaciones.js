const { validationResult }=require("express-validator");


    function resultvalidations(req,res,next){ 
        const resultvalidations=validationResult(req);
        const oldValues=req.body;
        if (resultvalidations.errors.length>0) {
            return  res.render("login",{
            errors:resultvalidations.mapped(),
            oldValues:oldValues,
             });   
        }else{
            next();
        };
}
module.exports=resultvalidations;