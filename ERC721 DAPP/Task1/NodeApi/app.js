const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();








//Import POSTS

const mainRoute = require("./routes/mainRoute");



// //MIDDLEWARE

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/',mainRoute);





//ROUTES




mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true ,
    useUnifiedTopology:true,
    useCreateIndex:true
}, 

() =>{
    console.log("connected to the Database");
})
//How do we start listening to the server
app.listen(5000);