const express = require("express");
const router = express.Router();

const Ddb = {
    "milk": {
        quantity: 2,
        price: 8
    }
}


router.get("/", (req, res, next) => {
    var result = {}
    Object.entries(Ddb).forEach(([key, val]) => {
        console.log(key)
        if(req.query.ingredient === key){
            result = val;
        }
    });
    res.send({...result, vendor: "vendor D"});
});

module.exports = router;