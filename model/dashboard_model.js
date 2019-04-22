var db=require('../dbconnection');
var dashboard={
    getAllMaterial(callback){
        return db.query('SELECT COUNT(pdf) "pdf" FROM dailywork_table where pdf<>""',callback);
    },
    getAllBatch(callback){
        return db.query('SELECT COUNT(batch_name) "batch_name" FROM batch_table where batch_name<>""',callback);
    },
    getAllStudent(callback){
        return db.query('SELECT COUNT(student_name) "student_name" FROM student_table where student_name<>""',callback);
    },
    getAllExam(callback){
        return db.query(' SELECT COUNT(exam_id) "exam_id" FROM exam_schedule_table where exam_id<>""',callback);
    },
    getAllAttendance(fk_standard_id,callback)
    {
        return db.query('SELECT a.fk_standard_id,s.student_name,b.batch_name,count(*) as total from attendance_table a,student_table s,batch_table b WHERE b.batch_id=a.fk_batch_id AND a.fk_student_id=s.student_id AND a.attendance_status="absent" AND a.fk_standard_id=? GROUP BY s.student_id',[fk_standard_id],callback);
    },
    getAllExamSchedule(batch_id,callback)
    {
        return db.query('SELECT e.fk_standard_id,b.batch_name,e.exam_date,s.subject_name,e.hours from exam_schedule_table e,batch_table b,subject_table s where e.fk_batch_id=b.batch_id AND e.fk_subject_id=s.subject_id and e.fk_batch_id=?',[batch_id],callback);
    }


   
}
module.exports=dashboard