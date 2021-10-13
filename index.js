const express = require("express");
const app = express();
const product = require("./api/product");
const proxy = require("./api/proxy");

app.use(express.json({ extended: false }));

app.use("/api/product", product);
app.use("/api/proxy", proxy);

const PORT = process.env.PORT || 8088;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
