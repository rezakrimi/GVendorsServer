const express = require("express");
const app = express();
const cors = require('cors');
//remove for production
app.use(cors());
app.options('*', cors());

const vendorA = require("./routes/vendorA");
const vendorB = require("./routes/vendorB");
const vendorC = require("./routes/vendorC");
const vendorD = require("./routes/vendorD");

app.use("/vendorA", vendorA);
app.use("/vendorB", vendorB);
app.use("/vendorC", vendorC);
app.use("/vendorD", vendorD);

app.listen(5000, 'localhost', () => {
    console.log('Vendors app listening on port 5000!');
});