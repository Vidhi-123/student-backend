var schedule=require('../model/schedule_model')
var express=require('express');
var router=express.Router();
router.get('/:batch_id?',function(req,res,next){
    if(req.params.batch_id){
        schedule.getScheduleIonicById(req.params.batch_id,function(err,rows){
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
        });
        
    }
    else{
        schedule.getAllBatch(function(err,rows)
        {
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
        });

    }
});
module.exports=router;
