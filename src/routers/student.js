import express from "express";
import Student from '../models/students.js';

// 1. use router
const router = new express.Router();

// 2. we need to create a new router 
router.get('/manish', (req, res) => {
    res.send("Hello my name is manish kumar");
});

// initial request
router.get('/', (req, res) => {
    res.send("Hello form the other side by manish....");
});

// insert document by promises 
// router.post('/students', (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);

//     // insert document form postman by promises method 
//     user.save().then(() => {
//         // console.log("manish.............")
//         res.status(201).send(user);
//     }).catch((e) => {
//         console.log(e);
//         res.status(400).send(e);
//     });
// });

// insert document by async await , it used mostly now this time
router.post("/students", async(req, res) => {
    try {
        const user = new Student(req.body);
        console.log(req.body);
        // insert data in document form postman
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (error) {
        res.status(400).send(error);
    }
});


// read the data of registred students
router.get('/students', async(req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
        console.log(studentsData);
    } catch (error) {
        res.send(error);
    }
});

//get the indivisual data for a particular students
// router.get('/students/:id', async(req, res) => {
router.get('/students/:id', async(req, res) => {
    try {
        const _id = req.params.id;
        // console.log(req.params.id);
        const studentData = await Student.findById(_id);

        console.log(studentData);
        if(!studentData) {
            return res.status(404).send();
        }
        res.send(studentData);

    } catch (error) {
        res.status(500).send(error);
    }
});

// delete the document from database
router.delete('/students/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // const studentData = await Student.findById(id);
        // if(!studentData){
        //     return res.status(400).send('User does not exists');
        // }

        if(!id) {
            return res.status(400).send('User does not exits...!');
        }
        const deletestudentData = await Student.findByIdAndDelete(id);
       
        res.send(deletestudentData);
    } catch (error) {
        console.log(error);
    }
});

//update the student by it's id 
router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent =  await Student.findByIdAndUpdate(_id, req.body, {
            new :true
        });
        res.status(201).send(updateStudent);
    } catch (error) {
        res.status(404).send(`Something went wrong ... with reason ${error}`);
    }
});

export default router;