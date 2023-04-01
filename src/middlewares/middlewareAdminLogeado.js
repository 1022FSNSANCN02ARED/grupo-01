function middlewareAdminLogeado(req,res,next){
    
    if (!res.locals.localAdminLogeado){
      return  res.redirect("/")
    }   
    
    next() 
}
module.exports=middlewareAdminLogeado;