var db=require('../dbconnection');
var subject={
    getAllSubject:function(callback){
        
        return db.query("select * from subject_table",callback)
    },
    addSubject:function(item,callback)
    {
            console.log(item);
            return db.query("insert into sub_table (fk_student_id,fk_subject_id) values (?,?)",[item.fk_student_id,item.fk_subject_id],callback);
    }
}
module.exports=subject;