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

router.post('/userinterface_fetch_ads', function (req, res, next) {
    try {
        pool.query("select * from ads where imgno=?", [req.body.imgno], function (error, result) {
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

router.post('/userinterface_fetch_productdetails_by_id', function (req, res, next) {
    try {
        pool.query("SELECT P.*, B.*, S.*, PC.*, PV.*, PD.* FROM products P, brands B, services S, productcolors PC, productvarients PV, productdetails PD where P.productid=PD.productid and B.brandid=PD.brandId and S.serviceid=PD.serviceid and PC.productcolorid=Pd.productcolorid  and PV.productvarientid=pd.productvarientid and pd.productdetailsid=?", [req.body.productdetailsid], function (error, result) {
            if (error) {
                res.status(200).json({ status: false, message: 'Database Error,Pls Contact Backend Team' })
            }
            else {
                //console.log(result)
                res.status(200).json({ status: true, message: 'Success..', data: result[0] })
            }
        })
    }
    catch (e) {
        res.status(200).json({ status: false, message: 'Critical Error,Pls Contact Server Administrator' })
    }
});

router.post('/userinterface_fetch_productcolor_by_id', function (req, res, next) {
    try {
        pool.query("SELECT P.*, S.*, PC.* FROM products P, services S, productcolors PC where P.serviceid=S.serviceid and PC.productid=P.productid and P.productid=?", [req.body.productid], function (error, result) {
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

router.post('/userinterface_fetch_productram_by_id', function (req, res, next) {
    try {
        pool.query("SELECT P.*, S.*, PV.* FROM products P, services S, productvarients PV where P.serviceid=S.serviceid and PV.productid=P.productid and P.productid=? group by PV.productram", [req.body.productid], function (error, result) {
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

router.post('/userinterface_fetch_productstorage_by_id', function (req, res, next) {
    try {
        pool.query("SELECT P.*, S.*, PV.* FROM products P, services S, productvarients PV where P.serviceid=S.serviceid and PV.productid=P.productid and P.productid=? group by PV.productstorage", [req.body.productid], function (error, result) {
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

router.post('/moreimages_by_id', function (req, res, next) {
    try {
        pool.query("SELECT M.* FROM productdetails PD, morepicture M  where PD.productdetailsid=M.productdetailsid  and pd.productdetailsid=?", [req.body.productdetailsid], function (error, result) {
            if (error) {
                res.status(500).json({ status: false, message: 'Database Error,Pls Contact Backend Team' })
            }
            else {
                res.status(200).json({ status: true, message: 'Success..', data: result[0] })
            }
        })
    }
    catch (e) {
        res.status(200).json({ status: false, message: 'Critical Error,Pls Contact Server Administrator' })
    }
});

router.post('/userinterface_fetch_productdetails_by_id_color', function (req, res, next) {
    try {
        pool.query("SELECT * FROM productdetails WHERE productid = ? AND productcolorid = ?", [req.body.productid, req.body.productcolorid], function (error, result) {
            if (error) {
                res.status(200).json({ status: false, message: 'Database Error,Pls Contact Backend Team' })
            }
            else {
                //console.log(result)
                res.status(200).json({ status: true, message: 'Success..', data: result[0] })
            }
        })
    }
    catch (e) {
        res.status(200).json({ status: false, message: 'Critical Error,Pls Contact Server Administrator' })
    }
});

router.post('/userinterface_fetch_productdetails_by_id_ram', function (req, res, next) {
    try {
        pool.query("SELECT * FROM productdetails WHERE productid = ? AND productvarientid = ?", [req.body.productid, req.body.productvarientid], function (error, result) {
            if (error) {
                res.status(200).json({ status: false, message: 'Database Error,Pls Contact Backend Team' })
            }
            else {
                console.log(result)
                res.status(200).json({ status: true, message: 'Success..', data: result[0] })
            }
        })
    }
    catch (e) {
        res.status(200).json({ status: false, message: 'Critical Error,Pls Contact Server Administrator' })
    }
});

router.post('/userinterface_fetch_productdetails_by_id_storage', function (req, res, next) {
    try {
        pool.query("SELECT * FROM productdetails WHERE productid = ? AND productvarientid = ?", [req.body.productid, req.body.productvarientid], function (error, result) {
            if (error) {
                res.status(200).json({ status: false, message: 'Database Error,Pls Contact Backend Team' })
            }
            else {
                console.log(result)
                res.status(200).json({ status: true, message: 'Success..', data: result[0] })
            }
        })
    }
    catch (e) {
        res.status(200).json({ status: false, message: 'Critical Error,Pls Contact Server Administrator' })
    }
});

module.exports = router;