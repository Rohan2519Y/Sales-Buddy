var express = require('express');
var router = express.Router();
var upload = require('./multer');
var pool = require('./pool');

router.get('/userinterface_fetch_brands', function (req, res, next) {
    try {
        pool.query("select B.*,S.* from brands B,services S where b.serviceid=S.serviceid", function (error, result) {
            if (error) {
                console.log(error);
                res.status(200).json({ status: false, message: "Database Error, Pls Contact Backend Team" })
            }
            else {
                res.status(200).json({ status: true, message: "Success...", data: result })
            }
        })
    }
    catch (e) {
        console.log(error);
        res.status(200).json({ status: false, message: "Critical Error, Pls Contact Server Administrator" })
    }
});

router.post('/userinterface_fetch_productdetails', function (req, res, next) {
    try {
        pool.query("SELECT P.*, B.*, S.*, PC.*, PV.*, PD.* FROM products P, brands B, services S, productcolors PC, productvarients PV, productdetails PD where P.productid=PD.productid and B.brandid=PD.brandId and S.serviceid=PD.serviceid and PC.productcolorid=Pd.productcolorid  and PV.productvarientid=pd.productvarientid and pd.status=?", [req.body.status], function (error, result) {
            if (error) {
                res.status(200).json({ status: false, message: 'Database Error,Pls Contact Backend Team' })
            }
            else {
                res.status(200).json({ status: true, message: 'Success..', data: result })
            }
        })
    }
    catch (e) {
        res.status(200).json({ status: false, message: 'Critical Error,Pls Contact Server Administrator' })
    }
});


module.exports = router;