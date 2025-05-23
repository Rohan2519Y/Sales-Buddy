var express=require('express');
var router = express.Router()
var upload = require('./multer')
var pool=require('./pool')

router.post('/insert_mainslider',upload.any(),function(req,res,next){
    try{
        var images=req.files.map((item)=>item.filename)
        images=images+''
        pool.query('insert into mainslider (images) values(?)',[ images],function(error, result){
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
        pool.query("SELECT * from mainslider", function (error, result) {
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