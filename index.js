const express = require("express"); //import express
//const Contact = require("./models/todo");
const port = 10000; //Set a port
const path = require('path'); //import path
const app = express();
app.use(express.urlencoded({ extended: true })); // req.body elements is encoded
app.use(require('./routes/todo_route')); // set all the riute path
app.set("view engine", "ejs"); //express engine 
app.set("views", path.join(__dirname, 'views')); //express engine ejs path
app.use(express.static('assets')); //using the static files (css,imges,javascript)
// call the server on that particular port
app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running the server: ${err}`);
        return;

    }
    console.log(`Server is running on port:${port}`);
});