var express = require('express');
var router = express.Router();
var upload = require('./multer');
var pool = require('./pool');

router.get('/userinterface_fetch_brands' ,function(req, res, next) {
  
    try{

        pool.query("select B.*,S.* from brands B,services S where b.serviceid=S.serviceid", function(error,result){

            if(error){
                console.log(error);
                res.status(200).json({status:false, message:"Database Error, Pls Contact Backend Team"})
            }
            else{
                res.status(200).json({status:true, message:"Success...",data:result})
            }

        })

    }

    catch(e){
        console.log(error);
        res.status(200).json({status:false, message:"Critical Error, Pls Contact Server Administrator"})
    }


});


module.exports = router;