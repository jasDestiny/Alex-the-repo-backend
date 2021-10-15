require('dotenv').config();
const express=require("express");
const app=express();
const port= process.env.PORT || 3030;
const bodyParser=require("body-parser");
const mongoose= require("./config/MongooseConnect")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get("/", require("./controllers/home/welcomehome"));
app.post("/personal",require("./controllers/projects/AddPersonal"));
app.post("/faculty",require("./controllers/projects/AddProject"));
app.post("/student",require("./controllers/projects/AddProject"));   

app.get("/signup", function(req, res){
    console.log("REQUEST BODY SIGNUP:", req.query);
    res.json({data: "SAMPLE DATA SIGNUP GET"});
});

app.listen(port, ()=>console.log(`App is running on port ${port}`)); 