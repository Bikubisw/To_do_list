const express = require("express"); // import express
const app = express();
app.use(express.urlencoded({ extended: true })); //
const router = express.Router(); //import router for all the routes
const todoController = require("../controllers/todo_controller"); //import controller for allthe routes
router.get('/', todoController.todolist); //get request is handeled by this route
router.post('/Todolist', todoController.todoPostlist); //post request is handeled by this route
router.get('/delete-todo', todoController.deletelist); // delete request is handeled by this route
module.exports = router;