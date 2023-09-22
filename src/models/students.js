import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
    name : {
        type :String,
        required : true,
        lowercase :true,
        minLength : 3,
        unique:true,
    },
    email : {
        type: String,
        required: true,
        unique:true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type:Number,
        min:10,
        // max:10,
        required:true,
        unique:true,
    },
    address: {
        type:String,
        required:true
    }
});

// we will be create a new collection
const Student = new  mongoose.model('Student', studentSchema);

export default Student;