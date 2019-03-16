var db=require('../dbconnection');
var student={
    getStudent:function(callback){
        return db.query("select st.*,b.batch_name,s.standard_no from student_table st,batch_table b,standard_table s where b.batch_id=st.fk_batch_id and s.standard_id=st.fk_standard_id",callback);
    },
    getStudentByLoginId:function(item,callback){
        return db.query("select * from student_table where student_id=? and student_password=?",[item.student_id,item.student_password],callback);
    
},
    getSubjectByStandard:function(standard_id,callback){
    return db.query("select sub.*,s.* from subject_table sub,standard_table s where s.standard_id=sub.fk_standard_id and s.standard_id=?",[standard_id],callback);
},
getTotalStudent:function(callback){
return db.query("select count(student_id) 'total' from student_table",callback);
},
    addStudent:function(item,callback)
    {

        console.log(item);
        var join_date=new Date(item.joining_date);
        var dob=new Date(item.date_of_birth);
        return db.query("insert into student_table (student_name,student_password,joining_date,date_of_birth,fk_standard_id,fk_batch_id) values (?,?,?,?,?,?) ",[item.student_name,item.student_password,join_date,dob,item.fk_standard_id,item.fk_batch_id],callback);
    },
    DeleteStudent(student_id,callback){
        return db.query('delete from student_table where student_id=?',[student_id],callback);
    },
    multipleStudentDelete:function(item,callback){
        var delarr=[];
        console.log(item);
        console.log(item.length);
        for(i=0;i<item.length;i++){
            console.log(item);
            delarr[i]=item[i].student_id;
        }
       return db.query("delete from student_table where student_id in (?)",[delarr],callback);
       
    },
    getStudentById:function(student_id,callback){
        return db.query("select st.*,b.batch_name,s.standard_no from student_table st,batch_table b,standard_table s where b.batch_id=st.fk_batch_id and s.standard_id=st.fk_standard_id and student_id=?",[student_id],callback);
    },
    updateStudent:function(item,student_id,callback){
        var join_date=new Date(item.joining_date);
        var dob=new Date(item.date_of_birth);
        return db.query("update student_table set student_name=?,student_password=?,joining_date=?,date_of_birth=?,fk_standard_id=?,fk_batch_id=?,maths=?,science=?,english=?,physics=?,biology=? where student_id=?",[item.student_name,item.student_password,join_date,dob,item.fk_standard_id,item.fk_batch_id,item.maths,item.science,item.english,item.physics,item.biology,student_id],callback);
    },

    getStudentFront:function(student_id,callback){
        return db.query("select st.*,b.batch_name,s.standard_no from student_table st,batch_table b,standard_table s where b.batch_id=st.fk_batch_id and s.standard_id=st.fk_standard_id and st.student_id=?",[student_id],callback);
    },
    getStudentFrontByID:function(student_id,callback){
        return db.query("select stu.*,sub.*,subject.* from  student_table stu,sub_table sub,subject_table subject where stu.student_id=sub.fk_student_id and subject.subject_id=sub.fk_subject_id and stu.student_id=?",[student_id],callback);
    },
    updateStudent:function(item,student_id,callback){
        var dob=new Date(item.date_of_birth);
        return db.query("update student_table set student_name=?,student_password=?,date_of_birth=? where student_id=?",[item.student_name,item.student_password,dob,student_id],callback);
    },
    updateStudentImage:function(item,filename,callback){
        console.log(item);
        var dob=new Date(item.date_of_birth);
        return db.query("update student_table set student_image=?,student_name=?,student_password=?,date_of_birth=? where student_id=?",[filename,item.student_name,item.student_password,dob,item.student_id],callback)
    },
   

  
};
module.exports=student;
