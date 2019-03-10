var subject=require('../model/subject_model')
var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    
        subject.getAllSubject(function(err,rows)
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
router.post('/',function(req,res,next){
    subject.addSubject(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;