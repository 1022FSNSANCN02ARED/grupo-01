function middlewareusuarioNoLogeado(req,res,next){
    
    if (res.locals.localusuarioLogeado){
        res.redirect("/")
    }   
    
    next() 
}
module.exports=middlewareusuarioNoLogeado;