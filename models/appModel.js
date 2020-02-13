'user strict';
var sql = require('../db_connection');
var model = require('../models/appModels');

exports.createTask = function (task,status,date, result) {   
        if(date == "")
            date = new Date();

        sql.query("INSERT INTO tasks (task, status, created_at) VALUES (?,?,?)", [task, status, date], function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
exports.getTaskById = function (taskId, result) {
        sql.query("Select task from tasks where id = ? ", taskId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
exports.getAllTask = function (result) {
        sql.query("Select * from tasks", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);  
                 result(null, res);
                }
            });   
};
exports.updateById = function(id, task, result){
        sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
exports.remove = function(id, result){
    sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

