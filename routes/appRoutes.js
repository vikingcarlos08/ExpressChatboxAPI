'use strict';
var express = require('express');
var router = express.Router();
var todoList = require('../controller/appControllers');

//Routes Task
router.route('/task')
.get(function(req,res){
	todoList.list_all_tasks(req,res);
});
router.route('/create')
.post(function(req,res){
	todoList.create_a_task(req,res);
});

router.route('/get')
.get(function(req,res){
	todoList.read_a_task(req,res);
});
router.route('/update')
.get(function(req,res){
	todoList.update_a_task(req,res);
})
router.route('/delete')
.get(function(req,res){
	todoList.delete_a_task(req,res);
});

module.exports = router;