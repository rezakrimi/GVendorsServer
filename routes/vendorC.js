const express = require("express");
const router = express.Router();

const Cdb = {
    "egg": {
        quantity: 8,
        price: 9
    }
}

router.get("/", (req, res, next) => {
    var result = {}
    Object.entries(Cdb).forEach(([key, val]) => {
        console.log(key)
        if(req.query.ingredient === key){
            result = val;
        }
    });
    res.send({...result, vendor: "vendor C"});
});

module.exports = router;