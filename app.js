const express = require("express");
const app = express();

const vendorA = require("./routes/vendorA");
const vendorB = require("./routes/vendorB");
const vendorC = require("./routes/vendorC");
const vendorD = require("./routes/vendorD");

app.use("/vendorA", vendorA);
app.use("/vendorB", vendorB);
app.use("/vendorC", vendorC);
app.use("/vendorD", vendorD);

app.listen(3000, '0.0.0.0', () => {
    console.log('Vendors app listening on port 3000!');
});