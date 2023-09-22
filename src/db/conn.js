import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/students-api")
    .then( () => { console.log("Connection is successfully... !")}
    ).catch((e) => {
        console.log(`No connection ${e}`);
    });


