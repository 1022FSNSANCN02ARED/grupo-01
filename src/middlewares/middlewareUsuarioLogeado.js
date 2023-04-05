function middlewareUsuarioLogeado(req,res,next){
    res.locals.localAdminLogeado=false;
    res.locals.localusuarioLogeado=false;
    if (req.session.usuarioLogeado) {
    res.locals.localusuarioLogeado=true;        
    }
    if (req.session.usuarioLogeado && req.session.usuarioLogeado.role_id=="1") {
        res.locals.localAdminLogeado=true;    
        }
    next()
}
module.exports=middlewareUsuarioLogeado;