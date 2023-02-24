function middlewareUsuarioLogeado(req,res,next){
    res.locals.localusuarioLogeado=false;
    if (req.session.usuarioLogeado) {
    res.locals.localusuarioLogeado=true;        
    }
    next()
}
module.exports=middlewareUsuarioLogeado;