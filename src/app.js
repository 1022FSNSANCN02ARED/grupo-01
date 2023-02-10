const express = require ("express");
const path = require ("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");



const app = express();



app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cookieParser());
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));


const mainRouter = require("./routers/main-router");
app.use(mainRouter); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Se prendió en el puerto ${PORT}`);
});