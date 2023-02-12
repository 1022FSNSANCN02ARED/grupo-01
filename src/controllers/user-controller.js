const users = require("../data/users");
const { validationResult }=require("express-validator");

const userControllers={
    proccesRegister:(req,res)=>{
        const resultvalidations= validationResult(req);
        const oldValues=req.body;
        if (resultvalidations.errors.length>0) {
            return  res.render("login",{
                errors:resultvalidations.mapped(),
                oldValues:oldValues,
            });   
        }else{
            res.redirect("/")
        }
   

    }
};
 
module.exports=userControllers;