var feesadd=require('../model/fees_model')
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    feesadd.getAllStudentName(function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
  
});


router.post('/',function(req,res,next){
    feesadd.addFeesDetails(req.body,function(err,rows){
         if(err)
         {
             res.json(err)
         }
         else
         {
             res.json(rows)
         }
     });
   

 });
module.exports=router;