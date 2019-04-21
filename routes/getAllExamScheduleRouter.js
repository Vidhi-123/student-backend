var getexamschedule=require('../model/dashboard_model')
var express=require('express');
var router=express.Router();
router.get('/:batch_id',function(req,res,next){
    
        getexamschedule.getAllExamSchedule(req.params.batch_id,function(err,rows)
        {
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