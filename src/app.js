// import the module 
import express from "express";
// import validator from "validator";
// import mongoose from "mongoose";
import "./db/conn.js";
import StudentRouter from './routers/student.js';

// enviroment varibale port 
const port = process.env.PORT || 8000;
const app = express();

//important for the RESTApi
//you do not need express.json() and express.urlencoded()
// for get requests or delete requests. We only need it for 
// post and put req.
// express.json() is a method inbult in express to recognize the incoming 
// Request Object as a JSON Object. This method is called as a middleware
// in your application using the code : app.use(express.json());
app.use(express.json());
app.use(StudentRouter);

// setup the connection
app.listen(port, () => {
    console.log(`conntection is setup on the ${port} port`);
});

