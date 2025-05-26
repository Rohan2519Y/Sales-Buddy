var express=require('express');
var router = express.Router()
var upload = require('./multer')
var pool=require('./pool')

router.post('/insert_ads',upload.any(),function(req,res,next){
    try{
        var images=req.files.map((item)=>item.filename)
        images=images+''
        pool.query('insert into ads (serviceid, brandid, productid, productdetailsid, images,imgno) values(?,?,?,?,?,?)',[  req.body.serviceid, req.body.brandid, req.body.productid, req.body.productdetailsid, images,req.body.imgno],function(error, result){
            if(error){
                console.log(error)
                res.status(200).json({status:false,message:'Database Error,Pls Contact Backend Team'})
            }
            else{
                res.status(200).json({status:true,message:'Product Pictures Successfully Submitted..'})
            }
        })
    }
    catch(e){
        console.log(error)
        res.status(200).json({status:false,message:'Critical Error,Pls Contact Server Administrator'})
    }
})
router.get('/fetch_mainslider',function (req, res, next) {
    try {
        pool.query("SELECT P.*, B.*, S.*, PC.*, PV.*, PD.*,AD.* FROM products P, brands B, services S, productcolors PC, productvarients PV, productdetails PD,ads AD WHERE S.serviceid = B.serviceid AND B.brandid = P.brandid AND P.productid = PC.productid AND P.productid = PV.productid AND PD.productdetailsid=AD.productdetailsid AND PC.productcolorid = PD.productcolorid", function (error, result) {
            if (error) {
                console.log(error)
                res.status(200).json({ status: false, message: 'Database Error,Pls Contact Backend Team' })
            }
            else {
                res.status(200).json({ status: true, message: 'Success..',data:result })
            }
        })
    }
    catch(e)
    {
        res.status(200).json({status:false,message:'Critical Error,Pls Contact Server Administrator'})
    }
});
router.post('/delete_mainslider', function (req, res, next) {
    try {
        pool.query("delete from mainslider where mainsliderid=?", [ req.body.mainsliderid], function (error, result) {
            if (error) {
                res.status(200).json({ status: false, message: 'Database Error,Pls Contact Backend Team' })
            }
            else {
                res.status(200).json({ status: true, message: 'Mainslider Deleted Successfully..' })
            }
        })
    }
    catch(e)
    {
        res.status(200).json({status:false,message:'Critical Error,Pls Contact Server Administrator'})
    }
});
 
module.exports=router;