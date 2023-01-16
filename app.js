const express = require ("express");
const path = require ("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Se prendió en el puerto ${PORT}`);
});

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/index.html"));
});

app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/login.html"));
  });

  app.get("/productCart", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/productCart.html"));
  });

  app.get("/productDetail", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/productDetail.html"));
  });


  app.get("/register", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/register.html"));
  });

  app.get("/dashboard", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/dashboard/dashboard.html"));
  });

  app.get("/product", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/dashboard/product.html"));
  });

  app.get("/editproduct", (req, res) =>{
    res.sendFile(path.join(__dirname,"views/dashboard/editProduct.html"));
  });
