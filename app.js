var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var batch=require('./routes/batch_router');
var batch_standard=require('./routes/batchstd_router');
var standard=require('./routes/standard_router');
var dailyworkadd=require('./routes/dailywork_router');
var subject=require('./routes/subject_routes');
var alldaily=require('./routes/displayalldaily_router');
var dailyworkdel=require('./routes/dailyworkdel_router');
var updateDailyWorkImage=require('./routes/dailyimageupdate_router');
var notice=require('./routes/notice_router');
var multidelnotice=require('./routes/multipledelete_notice');
var node_mail=require('./routes/nodemailer_router');
var assignment=require('./routes/assignmnet_router');
var assignmentupdate=require('./routes/assupdateimage_router');
var schedule=require('./routes/schedule_router');
var schedule1=require('./routes/schedule_router1');
var faculty=require('./routes/faculty_router');
var result=require('./routes/result_router');
var attendance=require('./routes/attendance_router')
var attendance1=require('./routes/attendance_router1')
var attendance2=require('./routes/attendance_router2');
var attendance_absent=require('./routes/attendance_absent_router');
var attendance_present=require('./routes/attendance_present_router');
var addattendance=require('./routes/attendance_add_data_router');
var attadd=require('./routes/attendance_router3');
var fees=require('./routes/fees_router');
var admin_fees=require('./routes/admin_fees_router');
var wholefees=require('./routes/whole_fees_remaining.router');
var getfees=require('./routes/getallstudentfess_router');
var dailysubject=require('./routes/daily_subject_router');
var student=require('./routes/student_router');
var deletestudent=require('./routes/multiple_delete_student_router');
var feesdetail=require('./routes/fees_detail');
var examschedule=require('./routes/exam_schedule_router');
var exam_schedule_mergedata=require('./routes/exam_schedule_mergedata_router');
var exam_result=require('./routes/examresult_router');
var examresultmerge=require('./routes/examresult_merge_router');
var examresultmergedataadd=require('./routes/examresultstuadd_router');
var student_login=require('./routes/student_login');
var student_front_display=require('./routes/student_frontdisplay_router');
var student_attendance_ionic=require('./routes/attendancestudentionic_router');
var studentfees=require('./routes/feesstudent_router');
var studentfeesdetail=require('./routes/feesdetailstudent_router')
var student_subject_display=require('./routes/student_subject_display_router');
var dailyWorkIonic=require('./routes/dailywork_ionic');
var studentIonic=require('./routes/studentIonic_router');
var studentIonicimage=require('./routes/student_ionic_image_router');
var assignmentIonic=require('./routes/assignment_ionic_router');
var scheduleIonic=require('./routes/schedule_ionic_router');
var feesionic=require('./routes/fees_ionic_router');
var studentsubject=require('./routes/studentsubject_router');
var scheduleionic1=require('./routes/schedule1_ionic_router');
var studentcount=require('./routes/total_student_router');
var studentresult=require('./routes/exam_result_ionic_router');
var exambatch=require('./routes/exam_schedule_ionic_getstu');
var examstudent=require('./routes/exam_schedule_ionic_batch');
var feesadd=require('./routes/fees_add_router');
var newfeesadd=require('./routes/fees_new_add_router');
var getAllMaterial=require('./routes/getAllMaterialRouter');
var getAllBatch=require('./routes/getAllBatchRouter');
var getAllExam=require('./routes/getAllExamRouter');
var getAllStudent=require('./routes/getAllStudentRouter');
var getallAttendance=require('./routes/getAllAttendanceRouter');
var getallexamschedule=require('./routes/getAllExamScheduleRouter');
var studentbatchdisplay=require('./routes/studentbatch_router');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/batch',batch);
app.use('/batch_standard',batch_standard);
app.use('/standard',standard);
app.use('/dailyworkadd',dailyworkadd);
app.use('/subject',subject);
app.use('/alldaily',alldaily);
app.use('/dailyworkdel',dailyworkdel);
app.use('/updatedailyImage',updateDailyWorkImage);
app.use('/notice',notice);
app.use('/nodemail',node_mail);
app.use('/multidelnotice',multidelnotice);
app.use('/assignment',assignment);
app.use('/assignmentupdate',assignmentupdate);
app.use('/schedule',schedule);
app.use('/schedule1',schedule1);
app.use('/faculty',faculty);
app.use('/result',result);
app.use('/attendance',attendance);
app.use('/attendance1',attendance1);
app.use('/attendance2',attendance2);
app.use('/attendance_absent',attendance_absent);
app.use('/attendance_present',attendance_present);
app.use('/addattendance',addattendance);
app.use('/attadd',attadd);
app.use('/fees',fees);
app.use('/feesadd',feesadd);
app.use('/dailysubject',dailysubject);
app.use('/admin_fees',admin_fees);
app.use('/wholefees',wholefees);
app.use('/getfees',getfees)
app.use('/student',student)
app.use('/deletestudent',deletestudent)
app.use('/feesdetail',feesdetail)
app.use('/examschedule',examschedule)
app.use('/exam_schedule_mergedata',exam_schedule_mergedata)
app.use('/exam_result',exam_result)
app.use('/examresultmerge',examresultmerge)
app.use('/examresultmergedataadd',examresultmergedataadd)
app.use('/studentlogin',student_login);
app.use('/studentfrontdisplay',student_front_display);
app.use('/attendancestudent',student_attendance_ionic);
app.use('/studentfees',studentfees);
app.use('/studentfeesdetail',studentfeesdetail);
app.use('/student_subject_display',student_subject_display);
app.use('/dailyWorkIonic',dailyWorkIonic);
app.use('/studentionic',studentIonic);
app.use('/studentimage',studentIonicimage);
app.use('/assignmentIonic',assignmentIonic);
app.use('/scheduleionic',scheduleIonic);
app.use('/feesionic',feesionic);
app.use('/studentsubject',studentsubject);
app.use('/scheduleionic1',scheduleionic1);
app.use('/totalstudent',studentcount);
app.use('/studentresult',studentresult);
app.use('/exambatch',exambatch);
app.use('/examstudent',examstudent);
app.use('/newfeesadd',newfeesadd);
app.use('/getAllMaterial',getAllMaterial);
app.use('/getAllBatch',getAllBatch);
app.use('/getAllStudent',getAllStudent);
app.use('/getAllExam',getAllExam);
app.use('/getAllAttendance',getallAttendance);
app.use('/getAllExamSchedule',getallexamschedule);
app.use('/studentbatchdisplay',studentbatchdisplay);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
