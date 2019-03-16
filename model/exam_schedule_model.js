var db=require('../dbconnection');
var examschedule={
    getAllExamSchedule:function(callback){
        return db.query("select * from exam_schedule_table",callback);
    },
    getExamScheduleByID:function(exam_id,callback){
        return db.query("select * from exam_schedule_table where exam_id=?",[exam_id],callback);
    },
    addExamSchedule:function(item,callback){
        var exam_date=new Date(item.exam_date);
        return db.query("insert into exam_schedule_table (exam_id,fk_batch_id,fk_standard_id,fk_subject_id,exam_date,marks,hours) values (?,?,?,?,?,?,?)",[item.exam_id,item.fk_batch_id,item.fk_standard_id,item.fk_subject_id,exam_date,item.marks,item.hours],callback)
    },
    updateExamSchedule:function(item,exam_id,callback){
        var exam_date=new Date(item.exam_date);
        return db.query("update exam_schedule_table set fk_batch_id=?,fk_standard_id=?,fk_subject_id=?,exam_date=?,marks=?,hours=? where exam_id=?",[item.fk_batch_id,item.fk_standard_id,item.fk_subject_id,exam_date,item.marks,item.hours,exam_id],callback)
    },
    deleteExamSchedule:function(exam_id,callback){
        return db.query("delete from exam_schedule_table where exam_id=?",[exam_id],callback);
    },
    getBatchStdSub:function(callback){
        return db.query("select examschedule.*,batch.batch_name,standard.standard_no,subject.subject_name from exam_schedule_table examschedule,batch_table batch,standard_table standard,subject_table subject where batch.batch_id=examschedule.fk_batch_id and standard.standard_id=examschedule.fk_standard_id and subject.subject_id=examschedule.fk_subject_id",callback)
    },
    multipleSchedule:function(item,callback){
        var delarr=[];
        console.log(item);
        console.log(item.length);
        for(i=0;i<item.length;i++){
            console.log(item);
            delarr[i]=item[i].exam_id;
        }
       return db.query("delete from exam_schedule_table where exam_id in (?)",[delarr],callback);
       
    },
    getStudentByBatch:function(student_id,callback){
        return db.query("select b.*,s.* from batch_table b,student_table s where b.batch_id=s.fk_batch_id and s.student_id=?",[student_id],callback);
    },
    getExamScheduleIonicById:function(batch_id,callback){
        return db.query("select b.*,ex_sche.*,subj.* from batch_table b,exam_schedule_table ex_sche,subject_table subj where b.batch_id=ex_sche.fk_batch_id and ex_sche.fk_subject_id=subj.subject_id and b.batch_id=?",[batch_id],callback);
    }
    
}
module.exports=examschedule