const express = require('express')
const router = express.Router()

const studentController = require('../controller/controller.js')

router.get('/' , studentController.demo)
router.post('/addStudent' ,  studentController.addStudent)
router.delete('/deleteStudent' , studentController.deleteStudent)
router.patch('/updateStudent' , studentController.updateStudent)
router.get('/findStudent' , studentController.findstudent)
router.get('/login' , studentController.login)


module.exports = router
