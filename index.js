const express = require('express')
const app = express()

app.use((req,res)=>{
    res.send("Hello Express.js");
})

app.listen(8080,()=>{
    console.log("Start server at port 8080")
})