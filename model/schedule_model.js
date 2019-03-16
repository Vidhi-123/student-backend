var db=require('../dbconnection');
var schedule={
    getAllSchedule(callback){

        return db.query("select * from schedule_table",callback);
    },
    getAllDate(callback)
    {
        return db.query("select * from schedule_table",callback);
    },
    getSubjectStdBatchFacultyschedule:function(callback){
        return db.query('select b.*,s.*,su.*,sc.*,f.* from batch_table b,standard_table s,subject_table su,schedule_table sc,faculty_table f where b.batch_id=sc.fk_batch_id and s.standard_id=sc.fk_standard_id and su.subject_id=sc.fk_subject_id and f.faculty_id=sc.fk_faculty_id',callback)
    
    },
    addSchedule:function(item,callback){
        var today=new Date(item.schedule_date);
        console.log(today);
         return db.query('insert into schedule_table (schedule_date,timings,fk_subject_id,fk_standard_id,fk_batch_id,fk_faculty_id) values (?,?,?,?,?,?) ',[today,item.timings,item.fk_subject_id,item.fk_standard_id,item.fk_batch_id,item.fk_faculty_id],callback);
     },
     updateSchedule:function(item,schedule_id,callback){
        return db.query("update schedule_table set timings=?,fk_standard_id=?,fk_subject_id=?,fk_batch_id=?,fk_faculty_id=? where schedule_id=?",[item.timings,item.fk_standard_id,item.fk_subject_id,item.fk_batch_id,item.fk_faculty_id,schedule_id],callback);
    },
    getScheduleById:function(schedule_id,callback){
        return db.query('select b.*,s.*,su.*,sc.*,f.* from batch_table b,standard_table s,subject_table su,schedule_table sc,faculty_table f  where b.batch_id=sc.fk_batch_id and s.standard_id=sc.fk_standard_id and su.subject_id=sc.fk_subject_id and f.faculty_id=sc.fk_faculty_id and schedule_id=?',[schedule_id],callback);
    },
    deleteSchedule:function(schedule_id,callback){
        return db.query('delete from schedule_table where schedule_id=?',[schedule_id],callback);
      },
      multipleScheduleDelete:function(item,callback){
        var delarr=[];
        console.log(item);
        console.log(item.length);
        for(i=0;i<item.length;i++){
            console.log(item);
            delarr[i]=item[i].schedule_id;
        }
       return db.query("delete from schedule_table where schedule_id in (?)",[delarr],callback);
       
    },
    getAllBatch:function(callback){
        return db.query("select * from batch_table",callback);
    },
    getStudentByBatch:function(student_id,callback){
        return db.query("select b.*,s.* from batch_table b,student_table s where b.batch_id=s.fk_batch_id and s.student_id=?",[student_id],callback);
    },
    getScheduleIonicById:function(batch_id,callback){
        return db.query("select b.*,sche.*,subj.* from batch_table b,schedule_table sche,subject_table subj where b.batch_id=sche.fk_batch_id and sche.fk_subject_id=subj.subject_id and b.batch_id=?",[batch_id],callback);
    }
  

}
module.exports=schedule