const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    rollno:{
        type: String,
        required:  [true, 'Rollno is required'],
        unique: true  
    },
    name : {
        type: String,
        required:  [true, 'Name is required'],
    },
    totalmarks : {
        type: Number,
        required:[true, 'Marks is required']
    }
})

module.exports = mongoose.model('StudentDetails',StudentSchema)