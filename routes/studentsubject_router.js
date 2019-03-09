var studentsubject=require('../model/student_model')
var express=require('express');
var router=express.Router();
router.get('/:standard_id',function(req,res,next){
    
        studentsubject.getSubjectByStandard(req.params.standard_id,function(err,rows)
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