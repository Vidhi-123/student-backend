var faculty=require('../model/faculty_model')
var express=require('express');
var router=express.Router();



router.get('/:faculty_id?',function(req,res,next){
    if(req.params.faculty_id){
        faculty.getFacultybyemailId(req.params.faculty_id,function(err,rows){
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
        faculty.getAllFaculty(function(err,rows)
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
router.post("/",function(req,res,next){
    faculty.getFacultyById(req.body,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
});

router.put('/',function(req,res,next){
    faculty.updatePass(req.body,function(err,rows){
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