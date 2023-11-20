import express from 'express'
var app = express()

app.get('/', (req, res)=>{
    res.send("this is home page")
})

app.listen(3000, ()=>{
    console.log("Server started at port 3000")
})