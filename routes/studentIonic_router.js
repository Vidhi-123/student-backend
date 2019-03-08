
var student=require('../model/student_model')
var express=require('express');
var router=express.Router();





 router.put('/:student_id',function(req,res,next){
    student.updateStudent(req.body,req.params.student_id,function(err,rows){
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