const express = require ("express");
const path = require ("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const session =require("express-session");
const middlewareUsuarioLogeado=require("./middlewares/middlewareUsuarioLogeado");



const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);


app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cookieParser());
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({secret:"mensaje secreto",
                  resave:false,
                  saveUninitialized: false}));
app.use(middlewareUsuarioLogeado)    
app.use(express.json());


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));


const mainRouter = require("./routers/main-router");
app.use(mainRouter); 

//Aquí llamo a la ruta de las api de los productos
const apiProductsRouter = require("./routes/api/products");
//Aquí llamo a la ruta de las api de actors
const apiUsersRouter = require("./routes/api/users");


app.use(express.static(path.resolve(__dirname, "../public")));

//Aquí creo la colección de mis recursos de movies (APIs)
app.use("/api/products", apiProductsRouter);
app.use("/api/users", apiUsersRouter);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Se prendió en el puerto ${PORT}`);
});