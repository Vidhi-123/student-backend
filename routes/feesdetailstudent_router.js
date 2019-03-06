var fees=require('../model/fees_model')
var express=require('express');
var router=express.Router();

router.get('/:student_id?',function(req,res,next){
    fees.getStudentDetailsByFeesId(req.params.student_id,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });

});

module.exports=router;