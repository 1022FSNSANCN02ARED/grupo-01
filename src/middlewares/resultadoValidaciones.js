const { validationResult }=require("express-validator");


    function resultvalidations(req,res,next){ 
        const resultvalidations=validationResult(req);
        const oldValues=req.body;
        let registro=1;
        //console.log("pase" + resultvalidations.mapped)
        if (resultvalidations.errors.length>0) {
            return  res.render("login",{
            errors:resultvalidations.mapped(),
            oldValues:oldValues,
            registro:registro,
             });   
        }else{
            next();
        };
}
module.exports=resultvalidations;