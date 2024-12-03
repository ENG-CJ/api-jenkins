const express = require("express")
const app = express();


app.get("/",(req,res)=>{
    return res.send({message : "server is running"})
})

app.listen(3400,'0.0.0.0',()=>{
    console.log("started")
})