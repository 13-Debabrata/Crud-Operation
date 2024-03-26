const express = require ('express')
const mongoose = require ('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/StudentTable')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const route = require('./src/routes/router.js')
app.use(route)


app.listen(3000 , ()=>{
    console.log("server connecting to 3000");
})
