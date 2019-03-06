var db=require('../dbconnection');
var faculty={
    getAllFaculty(callback){
        return db.query("select * from faculty_table",callback);
    },
    getFacultyById:function(item,callback){
        return db.query("select * from faculty_table where faculty_id=? and password=?",[item.faculty_id,item.password],callback);
    
},
updatePass:function(item,callback){
    return db.query("update faculty_table set password=? where faculty_id=?",[item.password,item.faculty_id],callback);
},
getFacultybyemailId:function(faculty_id,callback){
    return db.query("select * from faculty_table where faculty_id=?",[faculty_id],callback);
}
}
module.exports=faculty