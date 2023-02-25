function middlewareAdminLogeado(req,res,next){
    
    if (!res.locals.localAdminLogeado){
        res.redirect("/")
    }   
    
    next() 
}
module.exports=middlewareAdminLogeado;