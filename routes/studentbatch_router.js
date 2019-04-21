var studentbatchdisplay=require('../model/student_model')
var examschdisplay=require('../model/exam_schedule_model');
var express=require('express');
var router=express.Router();

router.get('/:batch_id?',function(req,res,next){
    studentbatchdisplay.getStudentByBatchId(req.params.batch_id,function(err,rows){
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
    examschdisplay.getExamBySubjectBatch(req.body,function(err,rows){
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