var express=require('express');
var router = express.Router()
var upload = require('./multer')
var pool=require('./pool')

router.post('/insert_morepictures',upload.any(),function(req,res,next){
    try{
        var picture=req.files.map((item)=>item.filename)
        picture=picture+''
        pool.query('insert into morepicture (serviceid, brandid, productid, productdetailsid, picture) values(?,?,?,?,?)',[ req.body.serviceid, req.body.brandid, req.body.productid, req.body.productdetailsid,picture],function(error, result){
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
        res.status(200).json({status:false,message:'Critical Error,Pls Contact Server Administrator'})
    }
})
router.get('/fetch_morepictures',function (req, res, next) {
    try {
        pool.query("SELECT P.*, B.*, S.*, PC.*, PV.*, PD.*,MP.* FROM products P, brands B, services S, productcolors PC, productvarients PV, productdetails PD,morepicture MP WHERE S.serviceid = B.serviceid AND B.brandid = P.brandid AND P.productid = PC.productid AND P.productid = PV.productid AND PD.productdetailsid=MP.productdetailsid AND PC.productcolorid = PD.productcolorid;", function (error, result) {
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
 
module.exports=router;