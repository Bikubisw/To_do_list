const mongoose = require('mongoose'); // import mongoose odm
//connect to the database
mongoose.connect('mongodb://localhost/Todolist_db');
//aquire the connection to check it is coonected or not 
const todo_Db = mongoose.connection;
// error
todo_Db.on('error', console.error.bind(console, ' Bikram Biswas connection error:'));
// up and then print the meassage
todo_Db.once('open', function() {
    console.log("We are connected with the database");
});
module.exports = todo_Db;