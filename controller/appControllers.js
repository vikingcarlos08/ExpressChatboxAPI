'use strict';

var Task = require('../models/appModel');

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.status(404).send(err);
    
    res.status(200).send(task);
  });
};



exports.create_a_task = function(req, res) {
  let task = []
  task["task"] = req.query.task;
  task["status"] = req.query.status;
  task["date"] = req.query.date;
  //handles null error 
  if(!task || !status){

            res.status(400).send({ error:true, message: 'Please provide task/status' });

        }
  else{
    
    Task.createTask(task["task"],task["status"],task["date"], function(err, task) {
      
      if (err)
        res.send(err);
      else
        res.json(task);
    });
  }
};


exports.read_a_task = function(req, res) {
  var id = req.query.id;
  if (!id) {
    res.status(400).send({ error:true, message: 'Please provide task' });
  }
  else{
    console.log(id);
    Task.getTaskById(id, function(err, task) {
      if (err)
        res.send(err);
      else
        res.status(200).send(task);
    });
  }
  
};


exports.update_a_task = function(req, res) {
  Task.updateById(req.params.id, req.params.status, req.params.date, function(err, task) {
    if (err)
      res.send(err);
    else
       res.status(200).send(task);
  });
};


exports.delete_a_task = function(req, res) {
   var id = req.query.id;
  Task.remove( id, function(err, task) {
    if (err)
      res.send(err);
    else
      res.status(200).json({ message: 'Task successfully deleted' });
  });
};