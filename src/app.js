const express = require ("express");
const path = require ("path");

const mainRouter = require("./routers/main-router");

const app = express();

app.use(mainRouter);

app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Se prendió en el puerto ${PORT}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
  
