const express = require("express");
const app = express();
const cors = require("cors");
const product = require("./api/product");
const proxy = require("./api/proxy");

app.use(express.json({ extended: false }));
app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/product", product);
app.use("/api/proxy", proxy);

const PORT = process.env.PORT || 8092;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
