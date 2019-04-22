var mysql=require('mysql');
var connection=mysql.createPool({
    // host:'localhost',
    // user:'root',
    // password:'',
    // database:'report_project'


    host:'studentVH.db.9462939.49e.hostedresource.net',
    user:'studentVH',
    password:'Vidhi@9898',
    database:'studentVH'

});
module.exports=connection