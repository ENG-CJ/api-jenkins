const express = require("express")
const app = express();


app.get("/",(req,res)=>{
    return res.send({message : "server is running", status: true, jenkins: true, pipline: "starting"})
})

app.get("/user", (req, res) => {
  return res.send({
   user: "Abdulrahman",
   IPO: "X012LSJ"
  });
});

app.listen(3400,'0.0.0.0',()=>{
    console.log("started")
})