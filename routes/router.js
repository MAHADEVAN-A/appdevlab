const express = require('express')
const route = express.Router()

const Student = require('../models/StudentSchema')

route.get('/',(req,res)=>{
    res.send('hello');
})

route.post('/student',async(req,res)=>{
    const data = req.body
    const student = await Student.create(data);
    res.json({ msg: 'Successfully stored the student details' });
    console.log(student)
})

route.get('/getAllStudent',async(req,res)=>{
    const studdata = await Student.find()
    res.json({data:studdata})
})

route.get('/deleteStudent/:id',async (req, res) => {
    console.log('delete')
    const studID = req.params.id;
    const stud = await Student.findOneAndDelete({ _id: studID });
    if (!stud) {
      return res.status(404).json({ msg: `No company with id:${compID}` });
    }
    res.status(200).json({ msg: 'Success' });
});

module.exports = route;