const express = require('express')
const { student } = require('../model/model')


exports.demo = async (req, res)=>{
    res.send('response sending from controller')
}

exports.addStudent = async(req, res)=>{
    console.log('req.body')
    const data = req.body
    const data2 = new student(data)
    const saveData = await data2.save()
    res.send(saveData)
}

exports.deleteStudent = async(req, res)=>{
    const data = req.query.id
    const deleteData = await student.findByIdAndDelete(data)
    res.send(deleteData)
}

exports.updateStudent = async (req, res)=>{ 
    console.log(req.query.id);
    console.log(req.body);
    const updatedData = await student.findByIdAndUpdate(req.query.id , req.body)
    res.send(updatedData)
}

exports.findstudent = async (req, res) =>{
    const data = await student.find()
    res.send(data)
}

exports.login = async (req, res) => {
    const id = req.query.id
    const dbid = await student.findById(id)
    
    const detailData = await student.findById(id)
    if(dbid == null){
        res.send('invalid user id')
    }
    else{
        res.send(detailData)
    }
}