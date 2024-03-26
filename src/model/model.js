const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    address :{
        type : String,
        require : true
    },
    phoneNo : {
        type : Number,
        require : true
    }
})

const student = mongoose.model('student' , studentSchema)
module.exports = {student}